# ChefLink Website - Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Install & Start
```bash
cd C:\Users\Vansh\cheflink-website
npm install  # (already done)
npm run dev
```
Visit: http://localhost:3000

### 2. Update Content
Edit `/src/lib/constants.ts`:
- Change testimonials, FAQs, features, etc.
- Everything is in one file for easy editing

### 3. Replace Hero Image
- Place your image at: `/public/images/hero.png`
- Must be PNG or WebP
- Recommended size: 1200x800px

### 4. Customize Colors (Optional)
Search and replace in all files:
- `orange-600` → Your primary color
- `orange-700` → Your primary hover color

### 5. Deploy
```bash
npm run build
git add .
git commit -m "Launch ChefLink website"
git push origin main
```
Site goes live on GitHub Pages in 2-5 minutes!

---

## 📝 Content Changes (Most Important)

### Edit `/src/lib/constants.ts`:

```typescript
// Update this:
export const HERO = {
  headline: "Your headline here",
  subheading: "Your subheading",
  ctaPrimary: "Your CTA text",
  ctaSecondary: "Your CTA text",
};

// Update testimonials:
export const TESTIMONIALS = [
  {
    name: "Customer Name",
    role: "Title, City",
    quote: "Their exact quote here...",
    image: "/images/testimonial-1.jpg",
  },
  // Add more...
];

// Update FAQ:
export const FAQ = [
  {
    question: "Your question?",
    answer: "Your answer here...",
  },
  // Add more...
];
```

All changes reload instantly with `npm run dev`!

---

## 🎨 Visual Customization

### Change colors globally:
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-color-code',
}
```

### Add new sections:
1. Create component in `/src/components/`
2. Import in `/src/app/page.tsx`
3. Add to component order

---

## ✅ Pre-Launch Checklist

- [ ] All copy updated
- [ ] Hero image replaced
- [ ] All links tested
- [ ] Mobile view checked (F12 → toggle mobile)
- [ ] Form works (open browser DevTools to see submission)
- [ ] Google Analytics ID added
- [ ] No console errors (F12 → Console)

---

## 🚀 One-Click Deploy

### GitHub Pages:
```bash
git push origin main
```
Done! Site updates automatically.

### Vercel:
1. Connect GitHub repo to Vercel
2. Every push auto-deploys

---

## 📊 After Launch

1. **Monitor analytics**: Google Analytics 4 dashboard
2. **Check metrics**: Bounce rate, conversion %, page speed
3. **Iterate**: Update testimonials, FAQs based on feedback
4. **Marketing**: Share on social, email outreach

---

## 💡 Pro Tips

1. **Forms**: Currently use browser storage. To save to Airtable, add API integration.
2. **SEO**: All pages already optimized. Add to Google Search Console after launch.
3. **Mobile**: Already mobile-first. Test on real devices before launch.
4. **Images**: Compress PNG to WebP for smaller file sizes.
5. **Speed**: Goal < 2s load time. Use Google PageSpeed Insights to check.

---

## 🆘 Common Questions

**Q: How do I change the waitlist form behavior?**
A: Edit `/src/components/WaitlistForm.tsx`

**Q: Can I add more sections?**
A: Yes! Create new component in `/src/components/`, then import in page.tsx

**Q: How do I add custom CSS?**
A: Use Tailwind classes in components, or add to `/src/app/globals.css`

**Q: Is it mobile-friendly?**
A: Yes, fully responsive. Test in browser DevTools (F12).

**Q: Can I add videos?**
A: Yes, use Next.js Image component for optimization.

---

## 🎯 Success Metrics

Track in Google Analytics:
- Visitors per day
- Bounce rate (target < 40%)
- Avg. session duration (target > 2 min)
- Conversion rate / signups (target > 2%)

---

**Enjoy building! 🚀** For detailed deployment guide, see `DEPLOYMENT.md`
