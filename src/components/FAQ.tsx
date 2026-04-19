"use client";

import { useState } from "react";
import { FAQ } from "@/lib/constants";

export default function FAQSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <button
                onClick={() =>
                  setExpandedIdx(expandedIdx === idx ? null : idx)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-left font-semibold text-gray-900">
                  {item.question}
                </span>
                <span
                  className={`text-2xl text-orange-600 flex-shrink-0 transition-transform ${
                    expandedIdx === idx ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {expandedIdx === idx && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-6">
            Contact us via WhatsApp or email. We respond within minutes!
          </p>
          <a
            href="https://wa.me/918019551129"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
