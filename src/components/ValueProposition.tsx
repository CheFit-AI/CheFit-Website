import { VALUE_PROPOSITION } from "@/lib/constants";

export default function ValueProposition() {
  const { customers, chefs } = VALUE_PROPOSITION;

  return (
    <section id="value-prop" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Both
          </h2>
          <p className="text-xl text-gray-600">
            Whether you want fresh meals or steady income, ChefLink is for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Customers */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {customers.title}
            </h3>
            <p className="text-gray-700 mb-8">{customers.description}</p>
            <div className="space-y-6">
              {customers.points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{point.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-gray-700 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chefs */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {chefs.title}
            </h3>
            <p className="text-gray-700 mb-8">{chefs.description}</p>
            <div className="space-y-6">
              {chefs.points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{point.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-gray-700 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
