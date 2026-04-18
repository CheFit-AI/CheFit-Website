import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from real customers and chefs who love ChefLink
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="mb-4 text-2xl">⭐⭐⭐⭐⭐</div>

              {/* Quote */}
              <p className="text-gray-800 italic text-lg mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-orange-300 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-600">1000+</p>
            <p className="text-gray-600 mt-2">Verified Chefs</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-600">4.9★</p>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-600">50K+</p>
            <p className="text-gray-600 mt-2">Happy Meals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
