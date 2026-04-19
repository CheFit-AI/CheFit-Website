// All website copy and constants for ChefLink marketing website

export const SITE_CONFIG = {
  title: "ChefLink - Fresh Home-Cooked Meals On Demand",
  description: "Book vetted chefs to cook fresh, healthy meals at your home. No middleman, just great food.",
  url: "https://cheflink.in",
  ogImage: "./images/hero.png",
};

export const NAVIGATION = [
  { label: "Home", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Customers", href: "#value-prop" },
  { label: "For Chefs", href: "#value-prop" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  headline: "Home-cooked meals — effortless",
  subheading: "Book a vetted chef to cook fresh meals at your home",
  ctaPrimary: "Join Waitlist",
  ctaSecondary: "Download App",
};

export const VALUE_PROPOSITION = {
  customers: {
    title: "For Customers",
    description: "Healthy, home-cooked meals with zero fuss",
    points: [
      {
        icon: "🍽️",
        title: "Fresh & Healthy",
        description: "Meals cooked at your home",
      },
      {
        icon: "💰",
        title: "Transparent Pricing",
        description: "Typical sessions: ₹500–800",
      },
      {
        icon: "✓",
        title: "Vetted Chefs",
        description: "Verified cooks you can trust",
      },
    ],
  },
  chefs: {
    title: "For Chefs",
    description: "Flexible bookings, fair earnings",
    points: [
      {
        icon: "💸",
        title: "Fair Pay",
        description: "Set your price, get steady customers",
      },
      {
        icon: "📱",
        title: "Easy Management",
        description: "Simple bookings and earnings view",
      },
      {
        icon: "⭐",
        title: "Grow Your Profile",
        description: "Ratings help you get repeat bookings",
      },
    ],
  },
};

export const HOW_IT_WORKS = [
  {
    number: 1,
    title: "Browse Nearby Chefs",
    description: "View profiles of vetted chefs in your area with their ratings and menus",
    icon: "🔍",
  },
  {
    number: 2,
    title: "Select & Book",
    description: "Choose your chef, meal type, and preferred time. Pay securely via UPI",
    icon: "📅",
  },
  {
    number: 3,
    title: "Chef Arrives & Cooks",
    description: "Chef arrives on time and prepares fresh meals in your kitchen",
    icon: "👨‍🍳",
  },
  {
    number: 4,
    title: "Enjoy & Rate",
    description: "Enjoy your meal and rate your chef to help the community",
    icon: "😋",
  },
];

export const FEATURES = [
  { icon: "📊", title: "Real-Time Tracking", description: "See chef status live" },
  { icon: "💳", title: "UPI Payments", description: "Fast, secure UPI checkout" },
  { icon: "⭐", title: "Vetted Chefs", description: "Verified cooks with ratings" },
  { icon: "🔔", title: "Notifications", description: "Timely booking updates" },
  { icon: "🔄", title: "Re-booking", description: "Save favorites and rebook" },
  { icon: "💬", title: "Support", description: "WhatsApp support when needed" },
];

export const COMPARISON = {
  headers: ["Aspect", "ChefLink", "Food Delivery (Swiggy/Zomato)", "Domestic Cook"],
  rows: [
    {
      aspect: "Food Quality",
      cheflink: "Fresh, customized meals",
      foodDelivery: "Depends on restaurant",
      domesticCook: "Inconsistent quality",
    },
    {
      aspect: "Cost per Session",
      cheflink: "₹500–800",
      foodDelivery: "₹400–600 per order (daily adds up)",
      domesticCook: "₹300–500 (variable)",
    },
    {
      aspect: "Reliability",
      cheflink: "Vetted, professional chefs",
      foodDelivery: "Reliable delivery",
      domesticCook: "Often unreliable, frequent cancellations",
    },
    {
      aspect: "Meal Customization",
      cheflink: "Full control over ingredients & recipes",
      foodDelivery: "Menu set by restaurant",
      domesticCook: "Need to manage yourself",
    },
    {
      aspect: "Health Factor",
      cheflink: "No oil reuse, premium ingredients",
      foodDelivery: "Often heavy on oil & salt",
      domesticCook: "Depends on cook",
    },
    {
      aspect: "Effort Required",
      cheflink: "Zero effort",
      foodDelivery: "Just ordering (still eating outside)",
      domesticCook: "Manage hiring, training, quality",
    },
  ],
};

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Bangalore",
    quote:
      "I'm eating healthier now and saving ₹1200/week vs. Swiggy. Chef Ravi's meals are amazing!",
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Arun Kumar",
    role: "Entrepreneur, Delhi NCR",
    quote:
      "No more hunting for reliable cooks. ChefLink chefs are professional, on-time, and consistent.",
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Neha Verma",
    role: "Consultant, Mumbai",
    quote:
      "Finally, healthy home-cooked food without the stress. Booking is super easy. I'm hooked!",
    image: "/images/testimonial-3.jpg",
  },
];

export const FAQ = [
  {
    question: "How much does a ChefLink session cost?",
    answer:
      "Typical sessions range from ₹500–800 depending on the chef's expertise and the cuisine. You can see the exact price before booking.",
  },
  {
    question: "What cuisines can chefs prepare?",
    answer:
      "Our chefs specialize in North Indian, South Indian, Continental, Chinese, and Jain cuisines. Each chef's menu is available in their profile.",
  },
  {
    question: "Can I book a chef for parties or events?",
    answer:
      "Yes! We support group bookings. Just mention your guest count and preferences when booking. Pricing adjusts accordingly.",
  },
  {
    question: "How do I pay?",
    answer:
      "ChefLink supports UPI, Google Pay, and debit/credit cards. Payment is secure and captured after the chef confirms availability.",
  },
  {
    question: "What if the chef cancels?",
    answer:
      "Cancellations are rare (our chefs are professional), but if it happens, we'll immediately offer an alternative chef or full refund.",
  },
  {
    question: "Is it safe? How are chefs vetted?",
    answer:
      "Yes! Every chef undergoes background verification, health screening, and skills assessment. Customers leave ratings and reviews.",
  },
  {
    question: "How do I become a chef on ChefLink?",
    answer:
      "Download the app, fill out your profile, pass our background check, and start accepting bookings. Keep 100% of your earnings.",
  },
  {
    question: "Is ChefLink available in my city?",
    answer:
      "We're currently launching in Delhi NCR, Mumbai, Bangalore, and Hyderabad. Join the waitlist and we'll notify you when we're live in your area!",
  },
  {
    question: "Can I request specific ingredients or dietary preferences?",
    answer:
      "Absolutely! Add notes when booking (gluten-free, no onions, less oil, etc.). Chefs review these before confirming.",
  },
  {
    question: "Do you offer recurring bookings (weekly chef)?",
    answer:
      "Yes! Many customers book the same chef weekly. You can save favorites and re-book with one tap.",
  },
];

export const TEAM = [
  {
    name: "Founder Name",
    role: "Co-Founder & CEO",
    bio: "Built ChefLink to solve the home-cooked food problem. Ex-chef turned entrepreneur.",
    image: "/images/team-1.jpg",
  },
];

export const CTA = {
  primary: "Join Waitlist",
  secondary: "Download App",
  appStoreUrl: "https://apps.apple.com/app/cheflink",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.cheflink",
};

export const FOOTER = {
  tagline: "Fresh home-cooked meals, on demand",
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact Us", href: "#contact" },
    { label: "Blog", href: "/blog" },
  ],
  social: [
    { name: "Instagram", url: "https://instagram.com/cheflink" },
    { name: "Twitter", url: "https://twitter.com/cheflink" },
    { name: "LinkedIn", url: "https://linkedin.com/company/cheflink" },
  ],
  copyright: "© 2026 ChefLink. All rights reserved.",
};
