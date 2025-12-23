# Docker Deployment - Simple Way

## Prerequisites
- Docker & Docker Compose installed
- Any server (AWS, DigitalOcean, Linode, etc.)

---

## Local Testing (5 minutes)

```bash
# Build and run locally
docker-compose up --build

# Open http://localhost:3000 in browser
```

---

## Deploy to AWS (10 minutes)

### Step 1: Launch EC2
1. Go to AWS → EC2 → Launch Instance
2. Choose: **Ubuntu 22.04 LTS** (t2.micro)
3. Security: Open ports **80, 443, 22**
4. Create & download key pair (`.pem` file)

### Step 2: Connect
```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### Step 3: Install Docker
```bash
sudo apt update
sudo apt install -y docker.io docker-compose
sudo usermod -aG docker ubuntu
```

Exit and reconnect for changes to take effect:
```bash
exit
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### Step 4: Deploy
```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/bangle-franchise.git
cd bangle-franchise

# Start with Docker
docker-compose up -d

# Check if running
docker-compose ps
```

**Your app is now running on port 3000!**

---

## Setup Domain + HTTPS (5 minutes)

### Option A: Using Nginx + Let's Encrypt

```bash
# Install Nginx
sudo apt install -y nginx certbot python3-certbot-nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/bangle
```

Paste this:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable config
sudo ln -s /etc/nginx/sites-available/bangle /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

# Get free SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Option B: Point Domain to EC2
1. Get **Elastic IP** (AWS Console → Elastic IPs)
2. Update your domain's DNS `A` record to point to this IP
3. Wait 5-15 minutes for DNS propagation

**Done! Site is live at https://your-domain.com**

---

## Manage Container

```bash
# View logs
docker-compose logs -f

# Stop
docker-compose stop

# Start
docker-compose start

# Restart
docker-compose restart

# Update code & redeploy
git pull
docker-compose up -d --build
```

---

## Check Enquiry Data

Enquiries are saved locally at:
```bash
ls enquiries/
cat enquiries/enquiry-*.json
```

---

## Troubleshooting

**Port already in use?**
```bash
# Change port in docker-compose.yml: 8080:3000
docker-compose down
docker-compose up -d
```

**Container won't start?**
```bash
docker-compose logs
```

**Out of space?**
```bash
docker system prune -a
```

---

## Cost
- **EC2 t2.micro**: Free first 12 months
- **After free tier**: ~$5-10/month
- **No extra costs** for Docker

---

## Summary
✅ Push to GitHub  
✅ EC2 + Docker  
✅ Nginx + SSL  
✅ Done!

Total time: ~20 minutes
