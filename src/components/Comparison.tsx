import { COMPARISON } from "@/lib/constants";

export default function Comparison() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose ChefLink?
          </h2>
          <p className="text-xl text-gray-600">
            See how we compare to other options
          </p>
        </div>

        {/* Table - Desktop */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-orange-600 text-white">
                {COMPARISON.headers.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {row.aspect}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold text-orange-600">
                    {row.cheflink}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{row.foodDelivery}</td>
                  <td className="px-6 py-4 text-gray-600">{row.domesticCook}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {COMPARISON.rows.map((row, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-4">{row.aspect}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-orange-600 font-semibold">ChefLink</p>
                  <p className="text-gray-700">{row.cheflink}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Food Delivery</p>
                  <p className="text-gray-600">{row.foodDelivery}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Domestic Cook</p>
                  <p className="text-gray-600">{row.domesticCook}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
