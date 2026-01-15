"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("faq");
  const locale = useLocale();
  const isRTL = locale === "ar" || locale === "ur";
  const faqs = t.raw("items");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-emerald-200 text-emerald-700 bg-white">
            <HelpCircle size={16} className="text-amber-600" />
            {t("badge")}
          </span>

          <h2 className="mt-6 text-3xl font-semibold text-gray-800">
            {t("title")}
          </h2>

          <p className="mt-3 text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-emerald-100 rounded-2xl px-6 py-5 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`flex items-center justify-between w-full text-left ${
                    isRTL ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <span className="text-gray-800 font-medium">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`text-emerald-700 transition-transform duration-500 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Smooth Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-[1000ms] ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
