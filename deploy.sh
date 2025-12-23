#!/bin/bash

# Bangle Franchise - One-Click Deployment Script
# Run this on your server after SSH connection

echo "🚀 Bangle Franchise Deployment Script"
echo "======================================="

# Update system
echo "📦 Updating system..."
sudo apt update && sudo apt upgrade -y

# Install Docker
echo "🐳 Installing Docker..."
sudo apt install -y docker.io docker-compose

# Add user to docker group
sudo usermod -aG docker ubuntu

# Clone repository
echo "📥 Cloning repository..."
read -p "Enter your GitHub repository URL: " REPO_URL
git clone $REPO_URL
cd bangle-franchise || exit

# Start Docker
echo "🚀 Starting application with Docker..."
docker-compose up -d

# Install Nginx
echo "🌐 Installing Nginx..."
sudo apt install -y nginx certbot python3-certbot-nginx

# Get domain
read -p "Enter your domain (e.g., example.com): " DOMAIN

# Create Nginx config
echo "⚙️ Configuring Nginx..."
sudo tee /etc/nginx/sites-available/bangle > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable Nginx
sudo ln -s /etc/nginx/sites-available/bangle /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default 2>/dev/null
sudo nginx -t
sudo systemctl restart nginx

# Get SSL certificate
echo "🔒 Getting SSL certificate..."
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m admin@$DOMAIN

echo ""
echo "✅ Deployment Complete!"
echo "======================================="
echo "🌐 Your site is live at: https://$DOMAIN"
echo ""
echo "📋 Next steps:"
echo "1. Point your domain's A record to this server's IP"
echo "2. Wait 5-15 minutes for DNS propagation"
echo "3. Visit https://$DOMAIN in your browser"
echo ""
echo "📊 Manage with:"
echo "   docker-compose logs -f       (view logs)"
echo "   docker-compose restart       (restart)"
echo "   docker-compose stop          (stop)"
