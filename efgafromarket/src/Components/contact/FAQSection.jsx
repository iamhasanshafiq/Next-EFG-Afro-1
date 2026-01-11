"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How can I find reliable African suppliers on your platform?",
    answer:
      "We carefully vet and verify all suppliers on our platform to ensure reliability, quality, and authenticity. You can review supplier profiles, ratings, and certifications before connecting.",
  },
  {
    question: "What types of African products are available on your platform?",
    answer:
      "We offer a wide range of authentic African products including agricultural produce (coffee, cocoa, fruits, spices), natural resources, handcrafted items, textiles, and artisanal products. All products undergo quality verification and sustainable sourcing practices.",
  },
  {
    question: "Do you provide assistance with logistics and shipping?",
    answer:
      "Yes, we offer comprehensive logistics solutions including warehousing, packaging, shipping coordination, and customs clearance assistance. Our network of partners ensures your products reach you efficiently and safely.",
  },
  {
    question: "What are your fees and commission rates?",
    answer:
      "Our fee structure is transparent and competitive. Rates vary based on product category, volume, and services required. We offer volume discounts for regular buyers. Contact us for a customized quote based on your specific needs.",
  },
  {
    question: "How do you ensure product quality and authenticity?",
    answer:
      "We have a rigorous quality assurance process including supplier verification, product sampling, third-party testing, and certification requirements. Our team conducts regular audits and maintains strict quality standards throughout the supply chain.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We support multiple payment methods including bank transfers, letters of credit, trade finance solutions, and digital payment platforms. Our secure payment system ensures safe transactions for all buyers.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-24"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-emerald-200 text-emerald-700 bg-white">
            <HelpCircle size={16} className="text-amber-600" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-semibold text-gray-800">
            Common Questions
          </h2>

          <p className="mt-3 text-gray-600">
            Find quick answers to the most frequently asked questions
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-emerald-100 rounded-2xl px-6 py-5 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-gray-800 font-medium">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-emerald-700 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
