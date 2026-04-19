import Image from "next/image";
import { HERO, CTA } from "@/lib/constants";

const BASEPATH = "/CheFit-Website";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-orange-50 to-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {HERO.headline}
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {HERO.subheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button className="bg-orange-600 text-white px-6 py-2.5 rounded-md hover:bg-orange-700 transition-colors font-semibold text-sm">
                {HERO.ctaPrimary}
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-2.5 rounded-md hover:bg-gray-300 transition-colors font-semibold text-sm">
                {HERO.ctaSecondary}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-3 text-sm text-gray-600">
              <div>✓ 1000+ Chefs</div>
              <div>✓ 4.9★</div>
              <div>✓ Secure Payments</div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={`${BASEPATH}/images/hero.png`}
              alt="Chef cooking fresh meal at home"
              width={600}
              height={420}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
