# ChefLink Website - Deployment Guide

This guide covers deploying the ChefLink marketing website to **GitHub Pages** with a custom domain via Hostinger.

## 📋 Pre-Deployment Checklist

- [ ] Update all content in `/src/lib/constants.ts`
- [ ] Replace hero image at `/public/images/hero.png`
- [ ] Test locally: `npm run dev` and verify all pages work
- [ ] Run linting: `npm run lint`
- [ ] Set up Google Analytics 4 account
- [ ] Have your custom domain ready (e.g., cheflink.in)
- [ ] GitHub account created
- [ ] Hostinger account with DNS access

---

## 🚀 Option 1: Deploy to GitHub Pages (Recommended)

### Step 1: Create GitHub Repository

1. **Go to GitHub** and create a new repository:
   - Repository name: `cheflink-website` (or your preference)
   - Visibility: Public
   - Don't initialize with README (we have one)

2. **Push your code**:
   ```bash
   cd C:\Users\Vansh\cheflink-website

   # If not already initialized
   git init
   git add .
   git commit -m "Initial commit: ChefLink marketing website"
   git branch -M main

   # Add remote (replace with your repo URL)
   git remote add origin https://github.com/yourusername/cheflink-website.git

   # Push
   git push -u origin main
   ```

### Step 2: Build the Website

```bash
npm run build
```

This creates a `/out` directory with all static HTML files.

### Step 3: Enable GitHub Pages

1. **Go to repository settings**:
   - Repository → Settings → Pages

2. **Configure Pages**:
   - **Source**: Deploy from a branch
   - **Branch**: Select `main` and folder `/root`
   - **Click Save**

3. **Wait for deployment** (2-5 minutes)
   - You'll see a green checkmark when deployment succeeds
   - GitHub will show your site URL: `https://yourusername.github.io/cheflink-website`

### Step 4: Configure Custom Domain (Hostinger)

#### 4.1 In GitHub:
1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain: `cheflink.in`
3. Click Save
4. **Don't** check "Enforce HTTPS" yet (wait for DNS propagation)

#### 4.2 In Hostinger:

1. **Log in to Hostinger** control panel
2. **Find DNS settings**:
   - Domain Management → DNS Zone
   - Or: Domains → Your Domain → DNS

3. **Add CNAME record**:
   - **Name**: `@` or leave blank (for root domain)
   - **Type**: `CNAME`
   - **Value**: `yourusername.github.io`
   - **TTL**: 3600 (default)
   - **Save**

   **Alternative for subdomain** (www.cheflink.in):
   - **Name**: `www`
   - **Type**: `CNAME`
   - **Value**: `yourusername.github.io`

4. **Wait for DNS propagation** (5 minutes to 24 hours, usually 15-30 minutes)

#### 4.3 Verify Setup:

```bash
# Check CNAME record
nslookup cheflink.in

# Should show: yourusername.github.io
```

#### 4.4 Enable HTTPS in GitHub:

Once DNS is propagated:
1. Go to repository Settings → Pages
2. Check "Enforce HTTPS"
3. Save

**Note**: GitHub will provision an SSL certificate automatically (takes a few minutes)

---

## 🚀 Option 2: Deploy to Vercel (Faster Alternative)

Vercel is owned by Next.js creators and is simpler for Next.js projects.

### Step 1: Push to GitHub

```bash
git push -u origin main
```

### Step 2: Connect to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "New Project"**
3. **Select GitHub** and authorize
4. **Choose your repository**: `cheflink-website`
5. **Configure**:
   - Framework: Next.js
   - Root Directory: ./
   - Environment Variables:
     - `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID
     - `NEXT_PUBLIC_SITE_URL`: https://cheflink.in

6. **Click Deploy**

### Step 3: Set Custom Domain

1. **In Vercel project settings**:
   - Domains → Add → Enter `cheflink.in`

2. **In Hostinger DNS**:
   - Add the DNS records shown by Vercel (usually A records)
   - Wait for propagation

3. **Vercel will auto-provision HTTPS**

---

## 📊 Post-Deployment Setup

### Google Analytics

1. **Create Google Analytics 4 Account**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create new property for your domain
   - Get Measurement ID: `G-XXXXXXXXXX`

2. **Add to environment**:
   ```bash
   # In .env.local (locally) or Vercel/GitHub Secrets
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Verify tracking** (after deployment):
   - Visit your site
   - Go to GA4 dashboard
   - Check Real-time report
   - You should see visitors

### Airtable Integration (Optional)

For production lead capture (beyond MVP):

1. **Create Airtable base**:
   - [Create account at airtable.com](https://airtable.com)
   - Create new base with table "Waitlist"
   - Fields: Email, Phone, Timestamp, Status

2. **Get API credentials**:
   - Airtable → Settings → API
   - Get: Base ID, Table ID, Personal Access Token

3. **Update environment**:
   ```bash
   NEXT_PUBLIC_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
   AIRTABLE_API_TOKEN=pat_XXXXXXXXXXXX
   NEXT_PUBLIC_AIRTABLE_TABLE_ID=tblXXXXXXXXXXXXXX
   ```

4. **Note**: For static export, you'll need a serverless function or external API wrapper

### Email Integration (Optional)

For automated confirmation emails:

1. **Set up Mailchimp or SendGrid**
2. **Create confirmation email template**
3. **Add API credentials to environment**
4. **Implement in WaitlistForm.tsx**

---

## 🔄 Continuous Deployment

### GitHub Pages (Automatic)

Every push to `main` automatically redeploys:

```bash
git add .
git commit -m "Update: Hero image and FAQs"
git push origin main
```

The site updates within 2-5 minutes.

### Vercel (Automatic)

Same as GitHub Pages - automatic deployment on push.

---

## 🧪 Testing After Deployment

### Test Checklist:

- [ ] Site loads at custom domain
- [ ] All links work (hero CTA, navigation, footer)
- [ ] Images load properly
- [ ] Mobile responsive (test on iPhone/Android)
- [ ] Form submits successfully
- [ ] Google Analytics tracking works
- [ ] OG tags visible when sharing on social media
- [ ] No console errors (F12 → Console)
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 85

### Test Tools:

```bash
# Test OG tags
curl -s https://cheflink.in | grep og:

# Check performance
# Use Google PageSpeed Insights: https://pagespeed.web.dev/
# Enter your domain

# Test mobile
# Use Google Mobile-Friendly Test:
# https://search.google.com/test/mobile-friendly
```

---

## 🔧 Troubleshooting

### Issue: Site shows 404 after GitHub Pages setup

**Solution**:
- Check Settings → Pages → Source is set to `main` and `/root`
- Verify build succeeded (check Actions tab)
- Try adding `CNAME` file manually (GitHub usually does this)

### Issue: Domain not pointing to GitHub Pages

**Solution**:
- Check CNAME record in Hostinger DNS
- Wait for DNS propagation (check with `nslookup cheflink.in`)
- Try clearing browser cache (Ctrl+Shift+Delete)

### Issue: HTTPS not working

**Solution**:
- Wait 5-10 minutes after DNS setup
- GitHub needs time to provision SSL
- Refresh the "Enforce HTTPS" setting

### Issue: Analytics not tracking

**Solution**:
- Verify `NEXT_PUBLIC_GA_ID` is set correctly
- Check in Google Analytics: Realtime → Overview
- Clear browser cache and revisit

---

## 📈 Monitoring & Analytics

### Set up alerts in Google Analytics:

1. **Go to GA4 Admin**
2. **Create alerts** for:
   - Drop in daily active users
   - Spike in bounce rate
   - No conversions for 24 hours

### Track important metrics:

- **Bounce rate**: Target < 40%
- **Conversion rate**: Target > 2% (waitlist signups)
- **Avg. session duration**: Target > 2 min
- **Pages per session**: Target > 2

### Use Google Search Console:

1. **Add to [Google Search Console](https://search.google.com/search-console)**
2. **Verify domain ownership**
3. **Submit sitemap**: `/sitemap.xml`
4. **Monitor**: Clicks, impressions, rankings, coverage

---

## 🚀 Next Steps After Launch

1. **Monitor Analytics**:
   - Check daily for first 2 weeks
   - Identify drop-off points

2. **Iterate**:
   - A/B test CTA buttons
   - Update testimonials with real user quotes
   - Optimize FAQ based on user questions

3. **Marketing**:
   - Share on social media
   - Submit to directories (Product Hunt, etc.)
   - Email outreach to initial users

4. **Enhancements**:
   - Add blog for SEO
   - Implement Airtable integration
   - Add video testimonials
   - Create pamphlet PDF

---

## 📞 Support & Help

- **GitHub Issues**: Create issue in your repository
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Pages**: https://docs.github.com/en/pages

---

## 🎯 Success Metrics

After 1 month of launch, target:

- [ ] 100+ email signups
- [ ] 1000+ unique visitors
- [ ] < 2s page load time
- [ ] Lighthouse score ≥ 85
- [ ] 2%+ conversion rate

---

Built with ❤️ for ChefLink. Good luck with your launch! 🚀
