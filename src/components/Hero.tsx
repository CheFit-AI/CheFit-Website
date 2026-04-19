import Image from "next/image";
import { HERO, CTA } from "@/lib/constants";

const BASEPATH = "/CheFit-Website";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-orange-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {HERO.headline}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {HERO.subheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg">
                {HERO.ctaPrimary}
              </button>
              <button className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-lg">
                {HERO.ctaSecondary}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-4 text-sm text-gray-600">
              <div>✓ 1000+ Chefs</div>
              <div>✓ 4.9★ Rating</div>
              <div>✓ Secure Payments</div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={`${BASEPATH}/images/hero.png`}
              alt="Chef cooking fresh meal at home"
              width={600}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
