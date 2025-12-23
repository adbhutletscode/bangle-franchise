# Complete Deployment Guide - GitHub to AWS

## STEP 1: Push Code to GitHub (5 minutes)

### 1.1 Create GitHub Repository
1. Go to **github.com** → Sign in
2. Click **"+" icon** → **New repository**
3. Name: `bangle-franchise`
4. Description: `Professional Franchise Enquiry Website`
5. Make it **Public**
6. Click **Create repository**

### 1.2 Push Your Code
On your local machine, in project folder:

```bash
cd c:\Users\adbnivor\Desktop\grouth

git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"

git init
git add .
git commit -m "Initial commit: Bangle franchise website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bangle-franchise.git
git push -u origin main
```

**Replace `YOUR-USERNAME` with your GitHub username**

Check: Visit `github.com/YOUR-USERNAME/bangle-franchise` → Should see all files ✅

---

## STEP 2: Create AWS EC2 Instance (10 minutes)

### 2.1 Launch Instance
1. Go to **aws.amazon.com** → Sign in
2. Go to **EC2 Dashboard**
3. Click **Launch Instance**

### 2.2 Configure Instance
- **Name**: `bangle-franchise`
- **AMI**: Ubuntu 22.04 LTS (Free tier)
- **Instance Type**: t2.micro (Free tier)
- **Key Pair**: 
  - Click **Create new key pair**
  - Name: `bangle-key`
  - Type: RSA
  - Format: .pem
  - **Download immediately** (save safely!)

### 2.3 Security Group
- Inbound Rules - Add these:
  1. SSH (22) - Source: My IP
  2. HTTP (80) - Source: 0.0.0.0/0
  3. HTTPS (443) - Source: 0.0.0.0/0

- Click **Launch Instance**
- Wait 2-3 minutes for instance to start

### 2.4 Get Elastic IP (Keep IP permanent)
1. EC2 Dashboard → **Elastic IPs**
2. Click **Allocate Elastic IP**
3. Click newly created IP
4. **Associate address**
5. Select your instance
6. **Associate**

**Note down this IP** (example: `54.123.456.789`)

---

## STEP 3: Connect to AWS Server (2 minutes)

### 3.1 Prepare Key File
Move your downloaded `bangle-key.pem` to a safe folder (example: `C:\aws-keys\`)

### 3.2 Open PowerShell or Terminal
Navigate to where you saved the key:

```powershell
cd C:\aws-keys\
```

### 3.3 Connect to Server
```powershell
# Replace ELASTIC-IP with your actual Elastic IP
ssh -i bangle-key.pem ubuntu@54.123.456.789
```

**Answer `yes` if asked about fingerprint**

You should see:
```
ubuntu@ip-xxxxx:~$
```

✅ You're now on the AWS server!

---

## STEP 4: Install Docker & Deploy (5 minutes)

### 4.1 Update System
```bash
sudo apt update
sudo apt upgrade -y
```

### 4.2 Install Docker
```bash
sudo apt install -y docker.io docker-compose
sudo usermod -aG docker ubuntu
```

### 4.3 Exit & Reconnect (to apply permissions)
```bash
exit
```

Wait 5 seconds, then reconnect:
```powershell
ssh -i bangle-key.pem ubuntu@54.123.456.789
```

### 4.4 Clone Your GitHub Repository
```bash
git clone https://github.com/YOUR-USERNAME/bangle-franchise.git
cd bangle-franchise
```

Replace `YOUR-USERNAME` with your actual GitHub username!

### 4.5 Start Docker
```bash
docker-compose up -d
```

Wait 30-60 seconds...

### 4.6 Verify It's Running
```bash
docker-compose ps
```

You should see:
```
NAME          STATUS
bangle-web    Up X seconds
```

✅ Your app is running!

---

## STEP 5: Setup Nginx + SSL (10 minutes)

### 5.1 Install Nginx
```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

### 5.2 Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/bangle
```

Paste this (replace `your-domain.com` with your actual domain):

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

**Save**: Press `Ctrl + O`, then `Enter`, then `Ctrl + X`

### 5.3 Enable Nginx Configuration
```bash
sudo ln -s /etc/nginx/sites-available/bangle /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

### 5.4 Get Free SSL Certificate
```bash
# Replace your-domain.com with your actual domain
sudo certbot --nginx -d your-domain.com -d www.your-domain.com --non-interactive --agree-tos -m your-email@gmail.com
```

✅ SSL certificate installed automatically!

---

## STEP 6: Point Your Domain (5 minutes)

### 6.1 Update Domain DNS Records
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find **DNS Settings** or **Manage DNS**
3. Look for **A Record** or **Name Servers**
4. Set/Update the `A` record:
   - **Name/Host**: `@` (or leave blank)
   - **Type**: `A`
   - **Value**: Your Elastic IP (example: `54.123.456.789`)
   - **TTL**: 3600 or auto

5. Also add `www` subdomain:
   - **Name/Host**: `www`
   - **Type**: `A`
   - **Value**: Same Elastic IP
   - **TTL**: 3600 or auto

6. Click **Save**

**Wait 5-15 minutes for DNS to propagate** ⏳

### 6.2 Test Your Domain
Open your browser and visit:
```
https://your-domain.com
```

✅ You should see your Bangle Franchise website!

---

## STEP 7: Verify Everything Works (5 minutes)

### 7.1 Test Form
1. Visit `https://your-domain.com`
2. Click "Apply for Franchise"
3. Fill out form and submit
4. Should see "Thank You" message ✅

### 7.2 Check Enquiry Data
SSH to server:
```bash
ssh -i bangle-key.pem ubuntu@54.123.456.789
cd bangle-franchise
ls enquiries/
cat enquiries/enquiry-*.json
```

You should see your form data saved! ✅

---

## STEP 8: Keep App Running (Auto-Start)

```bash
docker-compose down
```

Edit docker-compose.yml to add restart policy:

```bash
sudo nano docker-compose.yml
```

Change the `web:` section to include:
```yaml
restart_policy:
  condition: on-failure
  delay: 5s
  max_attempts: 5
restart: unless-stopped
```

Save and restart:
```bash
docker-compose up -d
```

Now app restarts automatically on server reboot! ✅

---

## Complete! 🎉

Your website is now:
- ✅ Deployed on AWS
- ✅ Secure with HTTPS
- ✅ Running on your custom domain
- ✅ Collecting enquiries
- ✅ Auto-starting on reboot

---

## Useful Commands (Going Forward)

### SSH to Server
```bash
ssh -i C:\aws-keys\bangle-key.pem ubuntu@YOUR-ELASTIC-IP
```

### View Logs
```bash
docker-compose logs -f
```

### Stop App
```bash
docker-compose stop
```

### Start App
```bash
docker-compose start
```

### Restart App
```bash
docker-compose restart
```

### Update Code (Pull from GitHub)
```bash
git pull origin main
docker-compose up -d --build
```

### View Enquiries
```bash
cd bangle-franchise
cat enquiries/enquiry-*.json
```

---

## Cost Summary

| Item | Cost |
|------|------|
| EC2 (t2.micro) | FREE (12 months) |
| Elastic IP | FREE |
| SSL Certificate | FREE (Let's Encrypt) |
| Domain | $10-15/year (your cost) |
| **Total Monthly** | **FREE (first year)** |

After 12 months: ~$5-10/month

---

## Need Help?

**SSL not working?**
```bash
sudo certbot renew --dry-run
```

**Domain not resolving?**
```bash
nslookup your-domain.com
```

**Docker issue?**
```bash
docker-compose down
docker-compose up -d
docker-compose logs
```

**Port already in use?**
```bash
docker ps -a
docker kill CONTAINER_ID
docker-compose up -d
```
