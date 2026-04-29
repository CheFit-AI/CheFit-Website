import WaitlistForm from "./WaitlistForm";
import { CTA } from "@/lib/constants";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Try ChefLink?
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands who are enjoying fresh, healthy home-cooked meals
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 md:p-12 shadow-lg">
          <WaitlistForm />
        </div>

        {/* App Download Links */}
        <div className="mt-16">
          <p className="text-center text-gray-600 mb-8">
            ChefLink app is launching soon on:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href={CTA.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              <span className="text-2xl"></span>
              <div className="text-left">
                <div className="text-xs">Download on</div>
                <div className="text-lg">App Store</div>
              </div>
            </a>
            <a
              href={CTA.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              <span className="text-2xl"></span>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
