import Link from "next/link";
import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍽️</span>
              <span className="text-xl font-bold text-white">ChefLink</span>
            </div>
            <p className="text-sm">{FOOTER.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-orange-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-orange-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {FOOTER.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors text-xl"
                  title={social.name}
                >
                  {social.name === "Instagram" && "📷"}
                  {social.name === "Twitter" && "𝕏"}
                  {social.name === "LinkedIn" && "💼"}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>{FOOTER.copyright}</p>
            <p>Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
