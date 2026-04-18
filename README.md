# ChefLink Marketing Website

A modern, responsive marketing website for the ChefLink app built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## 🎯 Features

- **Mobile-First Design**: Optimized for all devices (85%+ mobile traffic in India)
- **SEO Optimized**: Meta tags, OG tags, sitemap.xml, robots.txt, and canonical URLs
- **Fast Performance**: Static export for lightning-fast GitHub Pages deployment
- **Lead Capture**: Waitlist signup form with localStorage (Airtable integration ready)
- **Accessible**: Semantic HTML, WCAG guidelines, proper contrast ratios
- **Analytics Ready**: Google Analytics 4 integration ready
- **No Database**: Fully static—no backend needed for MVP

## 📁 Project Structure

```
cheflink-website/
├── public/
│   ├── images/          # Hero image and assets
│   ├── downloads/       # PDF assets (pamphlets, etc.)
│   ├── robots.txt       # SEO robots file
│   └── favicon.ico      # Website favicon
├── src/
│   ├── app/
│   │   ├── page.tsx     # Main landing page
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── sitemap.ts   # SEO sitemap
│   │   └── globals.css  # Global styles
│   ├── components/
│   │   ├── Header.tsx        # Sticky navigation
│   │   ├── Hero.tsx          # Hero section
│   │   ├── ValueProposition.tsx # For Customers vs Chefs
│   │   ├── HowItWorks.tsx   # 4-step flow
│   │   ├── Features.tsx      # 6 key features
│   │   ├── Comparison.tsx    # vs Competitors table
│   │   ├── Testimonials.tsx  # Social proof
│   │   ├── FAQ.tsx           # FAQs accordion
│   │   ├── WaitlistForm.tsx  # Lead capture form
│   │   ├── CTASection.tsx    # Call-to-action
│   │   └── Footer.tsx        # Footer
│   └── lib/
│       └── constants.ts  # All website copy & config
├── next.config.ts       # Next.js config (static export enabled)
├── tailwind.config.ts   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
└── .env.example         # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/cheflink-website.git
   cd cheflink-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values (Google Analytics ID, etc.)
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔨 Development

### Available Scripts

- **`npm run dev`** — Start development server with hot reload
- **`npm run build`** — Build for static export (GitHub Pages)
- **`npm run start`** — Run production build locally
- **`npm run lint`** — Run ESLint to check code quality

### Key Technologies

| Tool | Purpose |
|------|---------|
| **Next.js 16** | React framework with static export |
| **React 19** | UI component library |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **TypeScript** | Type-safe JavaScript |
| **ESLint** | Code quality and consistency |

## 📝 Content & Customization

### Update Copy
All website content is in `/src/lib/constants.ts`:
- **Hero headline and CTA**: `HERO`
- **Value propositions**: `VALUE_PROPOSITION`
- **Features**: `FEATURES`
- **FAQ**: `FAQ`
- **Testimonials**: `TESTIMONIALS`
- **Footer**: `FOOTER`

### Replace Hero Image
1. Convert your image to WebP format (recommended)
2. Place in `/public/images/hero.png`
3. Update the `SITE_CONFIG.ogImage` in `/src/lib/constants.ts`

### Update Colors
Edit `/tailwind.config.ts` or use Tailwind's utility classes:
- Primary color: Orange (`orange-600`, `orange-700`)
- Text: Gray (`gray-900`, `gray-600`)
- Backgrounds: White (`white`), Light gray (`gray-50`)

## 📊 Performance Optimization

### Image Optimization
- Hero image: Already optimized PNG
- Recommended: Convert all images to WebP format
- Command: `cwebp input.png -o output.webp`

### Build Output
- Static HTML files in `/out` directory
- Zero JavaScript for non-interactive sections
- Client-side only for form interactions

## 🔒 Security & Best Practices

- ✅ No secrets in source code (use `.env.local` for sensitive data)
- ✅ Static export (no server-side code exposure)
- ✅ Content Security Policy ready (add to `next.config.ts` if needed)
- ✅ HTTPS only in production
- ✅ Form validation on client-side (server-side recommended for production)

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS 12+, Android 5+

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ChefLink website"
   git branch -M main
   git remote add origin https://github.com/yourusername/cheflink-website.git
   git push -u origin main
   ```

2. **Build for Production**:
   ```bash
   npm run build
   ```
   This creates `/out` directory with static HTML files.

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/root` (or `/docs` if you prefer)
   - Save

4. **Configure Custom Domain** (Optional):
   - In Hostinger DNS: Add CNAME record pointing to `yourusername.github.io`
   - In GitHub: Settings → Pages → Custom domain → `cheflink.in`
   - GitHub will create `CNAME` file automatically

### Deploy to Vercel (Alternative)

1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure Environment**:
   - Set `NEXT_PUBLIC_GA_ID` in Vercel dashboard

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## 🔗 Environment Variables

Create `.env.local` file:

```env
# Google Analytics ID (Get from Google Analytics 4)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Airtable (For lead capture - optional for MVP)
NEXT_PUBLIC_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_API_TOKEN=pat_XXXXXXXXXXXX
NEXT_PUBLIC_AIRTABLE_TABLE_ID=tblXXXXXXXXXXXXXX

# App Store Links (Update when apps go live)
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/cheflink
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.cheflink

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://cheflink.in
```

## 📊 Analytics Setup

1. **Create Google Analytics 4 Property**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create new property for your domain
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to `.env.local`**:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Events Tracked** (Ready to customize):
   - Page views (automatic)
   - Form submissions (`event_signup`)
   - App store clicks (`event_app_click`)

## 📋 Feature Checklist

### MVP (Minimum Viable Product)
- [x] Hero section with CTA
- [x] Value proposition (Customers vs Chefs)
- [x] How it works (4-step flow)
- [x] Features (6 key features)
- [x] Testimonials (3-4 quotes)
- [x] FAQ (10 questions)
- [x] Waitlist signup form
- [x] Mobile responsive
- [x] SEO optimized
- [x] Static export ready

### Post-Launch Improvements
- [ ] Airtable integration for lead capture
- [ ] Mailchimp email automation
- [ ] A/B testing on CTA buttons
- [ ] Blog section for content marketing
- [ ] WhatsApp chatbot integration
- [ ] Heatmap tracking (Hotjar)
- [ ] Video testimonials
- [ ] Team/About section
- [ ] Multilingual support (Hindi, Tamil, etc.)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add feature"`
3. Push: `git push origin feature/your-feature`
4. Create Pull Request

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 📧 Support

For questions or issues:
- Email: support@cheflink.in
- WhatsApp: +91 98765 43210
- GitHub Issues: [Open an issue](https://github.com/yourusername/cheflink-website/issues)

## 🎯 Next Steps

1. Update all content in `/src/lib/constants.ts`
2. Replace hero image with your own
3. Set up Google Analytics
4. Configure GitHub Pages or Vercel
5. Test on mobile devices
6. Monitor analytics and iterate

---

Built with ❤️ for ChefLink. Making home-cooked meals accessible to everyone.
