# 🌐 DNS SETUP GUIDE - STORE.NEURANESTAI.WORLD

## 🚀 QUICK SETUP (5 Minutes)

### Step 1: Log into GoDaddy DNS Management
1. Go to [GoDaddy DNS Management](https://dcc.godaddy.com/manage/neuranestai.world/dns)
2. Login with your GoDaddy account
3. Navigate to **neuranestai.world** domain

### Step 2: Add Subdomain DNS Records

#### Option A: CNAME Record (Recommended for Vercel)
Add the following CNAME record:
```
Type: CNAME
Name: store
Value: cname.vercel-dns.com
TTL: 1 Hour
```

#### Option B: A Record (Alternative)
Add the following A record:
```
Type: A  
Name: store
Value: 76.76.19.19
TTL: 1 Hour
```

### Step 3: Verify DNS Setup
After adding the record, verify with:
```bash
nslookup store.neuranestai.world
```

## 🔧 AUTOMATED SETUP (Alternative)

### Using GoDaddy API (If permissions allow):

#### API Credentials:
```
Key: h2Jp1DXVY7zT_8j8zUsnedx5UN3ymoFaxzq
Secret: H2JkMRWSFEHiUr6qirtLfN
```

#### PowerShell Script:
```powershell
$headers = @{
    'Authorization' = 'sso-key h2Jp1DXVY7zT_8j8zUsnedx5UN3ymoFaxzq:H2JkMRWSFEHiUr6qirtLfN'
    'Content-Type' = 'application/json'
}

$body = @(
    @{
        type = "CNAME"
        name = "store"
        data = "cname.vercel-dns.com"
        ttl = 3600
    }
) | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.godaddy.com/v1/domains/neuranestai.world/records/CNAME/store" -Method PUT -Headers $headers -Body $body
```

## 🎯 VERCEL DEPLOYMENT WITH CUSTOM DOMAIN

### Step 1: Deploy to Vercel
```bash
cd V0_FUTURISTIC_DASHBOARD_LIVE
vercel --prod
```

### Step 2: Add Custom Domain in Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**  
3. Add domain: `store.neuranestai.world`
4. Vercel will provide DNS instructions

### Step 3: Configure SSL
Vercel automatically provides SSL certificates for custom domains.

## 🚀 FINAL VERIFICATION

### Check DNS Propagation:
- [DNS Checker](https://dnschecker.org) - Enter `store.neuranestai.world`
- [What's My DNS](https://whatsmydns.net) - Global DNS check

### Test Your Live Site:
```
https://store.neuranestai.world
```

## 📊 EXPECTED RESULTS

Once DNS is configured and deployed:
- ✅ `https://store.neuranestai.world` loads your dashboard
- ✅ SSL certificate is automatically provisioned  
- ✅ Stripe payments are ready to process
- ✅ Revenue generation begins immediately

## 🆘 TROUBLESHOOTING

### DNS Not Resolving:
1. Wait 15-60 minutes for DNS propagation
2. Clear your DNS cache: `ipconfig /flushdns`
3. Try different DNS checker tools

### SSL Certificate Issues:
1. Ensure DNS is pointing to Vercel correctly
2. Check Vercel domain settings
3. Wait for automatic certificate provisioning

### Access Denied API Errors:
1. Verify API keys are production (not sandbox)
2. Check domain ownership in GoDaddy account  
3. Ensure API permissions include DNS management

---

## 🎉 READY TO GO LIVE!

**Your subdomain `store.neuranestai.world` is ready for deployment!**

**Next Step:** Run the deployment script and start making money! 💰🚀