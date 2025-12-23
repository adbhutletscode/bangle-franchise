# 🚀 Quick Start - Deploy in 10 Minutes

## Step 1: Prepare GitHub (2 min)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bangle-franchise.git
git push -u origin main
```

---

## Step 2: Launch AWS EC2 (3 min)

1. Go to **AWS Console** → **EC2** → **Launch Instance**
2. Select: **Ubuntu 22.04 LTS**
3. Instance type: **t2.micro** (Free)
4. Security Group - Allow:
   - Port 22 (SSH)
   - Port 80 (HTTP)
   - Port 443 (HTTPS)
5. Create keypair → Download `.pem` file

---

## Step 3: One-Click Deploy (5 min)

Connect to your server:
```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

Run deployment script:
```bash
curl -fsSL https://raw.githubusercontent.com/YOUR-USERNAME/bangle-franchise/main/deploy.sh | bash
```

When prompted:
- **GitHub URL**: Paste your repo URL
- **Domain**: Enter your domain name

---

## Step 4: Point Domain (1 min)

1. Get **Elastic IP** from AWS Console
2. Go to your domain registrar
3. Set DNS `A` record to this IP
4. Wait 5-15 minutes

---

## ✅ Done! Your site is live at https://your-domain.com

---

## Daily Operations

```bash
# SSH into server
ssh -i your-key.pem ubuntu@your-ec2-public-ip

# View logs
docker-compose logs -f

# View enquiries
ls enquiries/
cat enquiries/enquiry-*.json

# Restart app
docker-compose restart

# Update code
git pull
docker-compose up -d --build
```

---

## Costs (After Free Tier)
- EC2 t2.micro: ~$5/month
- Domain: ~$10-15/year
- Total: **~$5-10/month**

---

## Support

**Problem?** Check:
1. EC2 instance is running
2. Security group has ports 80, 443, 22 open
3. Domain A record points to Elastic IP
4. `docker-compose ps` shows container running

```bash
# Check container status
docker-compose ps

# View errors
docker-compose logs

# Restart everything
docker-compose restart
```
