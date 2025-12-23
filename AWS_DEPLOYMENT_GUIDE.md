# AWS Deployment Guide - Bangle Franchise Website

## Step 1: Launch EC2 Instance

1. **Go to AWS Console** → EC2 → Launch Instance
2. **Choose AMI**: Ubuntu 22.04 LTS (Free tier eligible)
3. **Instance Type**: t2.micro (Free tier)
4. **Security Group Settings**:
   - SSH (Port 22) - Your IP only
   - HTTP (Port 80) - 0.0.0.0/0
   - HTTPS (Port 443) - 0.0.0.0/0

5. **Create/Select Key Pair**: Download `.pem` file (keep it safe!)
6. **Launch Instance**

---

## Step 2: Connect to Instance

```bash
# On your local machine
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

---

## Step 3: Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Git
sudo apt install -y git

# Install Nginx
sudo apt install -y nginx

# Install PM2 globally
sudo npm install -g pm2

# Install SSL certificate tool
sudo apt install -y certbot python3-certbot-nginx
```

---

## Step 4: Clone and Setup Application

```bash
# Navigate to home directory
cd /home/ubuntu

# Clone your GitHub repo (or upload files)
git clone https://github.com/YOUR-USERNAME/bangle-franchise.git
cd bangle-franchise

# Install dependencies
npm install

# Build the application
npm run build
```

---

## Step 5: Configure PM2 (Process Manager)

```bash
# Start the application with PM2
pm2 start npm --name "bangle-franchise" -- start

# Configure to start on system reboot
pm2 startup
pm2 save
```

---

## Step 6: Configure Nginx (Reverse Proxy)

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/bangle-franchise
```

Paste this configuration:

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
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/bangle-franchise /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

---

## Step 7: Setup SSL Certificate (Free with Let's Encrypt)

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Follow prompts to:
- Enter email
- Agree to terms
- Choose redirect to HTTPS

This auto-configures Nginx for HTTPS!

---

## Step 8: Point Domain to AWS

1. **Get Elastic IP** (so IP doesn't change):
   - EC2 Dashboard → Elastic IPs → Allocate
   - Associate with your instance

2. **Update Domain DNS** (wherever you bought domain):
   - Add `A` record pointing to Elastic IP
   - Example: `your-domain.com → 35.xx.xx.xx`
   - Wait 5-15 minutes for DNS propagation

---

## Step 9: Monitor & Maintain

```bash
# View running processes
pm2 status

# View logs
pm2 logs bangle-franchise

# Restart if needed
pm2 restart bangle-franchise

# Stop/start
pm2 stop bangle-franchise
pm2 start bangle-franchise
```

---

## Step 10: Auto-Renew SSL Certificate

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

---

## Useful Commands

```bash
# SSH into instance
ssh -i your-key.pem ubuntu@your-elastic-ip

# Deploy updates
cd /home/ubuntu/bangle-franchise
git pull origin main
npm install
npm run build
pm2 restart bangle-franchise

# Check Nginx status
sudo systemctl status nginx

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Check application logs
pm2 logs bangle-franchise
```

---

## Cost Estimation

- **EC2 t2.micro**: Free tier (12 months)
- **After free tier**: ~$5-10/month
- **Elastic IP**: Free if attached
- **Data transfer**: First 1GB/month free
- **SSL Certificate**: FREE (Let's Encrypt)

---

## Troubleshooting

**Site not loading?**
- Check security group (ports 80, 443 open?)
- Check Nginx: `sudo nginx -t`
- Check PM2: `pm2 status`

**Domain not working?**
- Wait for DNS propagation (5-15 min)
- Verify A record points to Elastic IP
- Check with: `nslookup your-domain.com`

**Out of memory?**
- Use t2.small instead of t2.micro
- Optimize Node.js: `NODE_OPTIONS="--max_old_space_size=256"`

---

## Next Steps After Deployment

1. Test enquiry form in production
2. Monitor emails for enquiries
3. Set up automated backups
4. Monitor uptime with AWS CloudWatch
5. Enable auto-scaling if traffic increases
