import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How ChefLink Works
          </h2>
          <p className="text-xl text-gray-600">
            Fresh meals in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.number} className="relative">
              {/* Card */}
              <div className="bg-white rounded-xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
