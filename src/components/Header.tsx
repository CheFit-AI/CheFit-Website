import Link from "next/link";
import Image from "next/image";
import { HERO, NAVIGATION } from "@/lib/constants";

const BASEPATH = "/CheFit-Website";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={`${BASEPATH}/images/logo.jpg`}
              alt="ChefLink Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold text-gray-800 hidden sm:inline">
              ChefLink
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-orange-600 transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-semibold">
            <a href={HERO.ctaPrimaryLink}>Join Waitlist</a>
          </button>
        </div>
      </div>
    </header>
  );
}
