"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HERO, NAVIGATION } from "@/lib/constants";

const BASEPATH = "/CheFit-Website";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" aria-label="ChefLink home">
            <Image
              src={`${BASEPATH}/images/logo.jpg`}
              alt="ChefLink Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold text-gray-800 hidden sm:inline">ChefLink</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
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

          <div className="flex items-center gap-4">
            <Link
              href={HERO.ctaPrimaryLink}
              aria-label="Join Waitlist"
              className="hidden md:inline-block bg-orange-600 text-white px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors text-sm font-semibold"
            >
              Join Waitlist
            </Link>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-4 py-3 space-y-2">
            {NAVIGATION.map((item) => (
              <Link key={item.label} href={item.href} className="block text-gray-700 px-2 py-2 rounded hover:bg-gray-50">
                {item.label}
              </Link>
            ))}
            <Link href={HERO.ctaPrimaryLink} className="block bg-orange-600 text-white px-4 py-2 rounded-md text-center font-semibold">
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
