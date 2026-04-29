import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/lib/constants";

const BASEPATH = "/CheFit-Website";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-orange-50 to-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {HERO.headline}
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {HERO.subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Link href={HERO.ctaPrimaryLink} aria-label="Join waitlist" className="w-full sm:w-auto inline-flex items-center justify-center bg-orange-600 text-white px-6 py-2.5 rounded-md hover:bg-orange-700 transition-colors font-semibold text-sm">
                {HERO.ctaPrimary}
              </Link>
              <button className="bg-white border border-gray-200 text-gray-800 px-6 py-2.5 rounded-md hover:bg-gray-50 transition-colors font-semibold text-sm" aria-label="App launching soon">
                {HERO.ctaSecondary}
              </button>
            </div>

            <div className="flex items-center gap-4 pt-3 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="text-orange-600 font-semibold">✓</span><span>1000+ Chefs</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-semibold">✓</span><span>4.9★ rating</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-semibold">✓</span><span>Secure payments</span></div>
            </div>
          </div>

          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={`${BASEPATH}/images/hero.png`}
              alt="Chef preparing a fresh home-cooked meal"
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
