"use client";

import Card from "../common/Card";
import {
  MessageCircle,
  ShoppingCart,
  LineChart,
  LifeBuoy,
  HelpCircle,
} from "lucide-react";

export default function InquiryTypeSection() {
  const items = [
    {
      icon: MessageCircle,
      title: "General Inquiry",
      description:
        "Questions about our services, platform, or general information about African trade opportunities.",
      buttonText: "Get Started",
      bgType: "gradient",
    },
    {
      icon: ShoppingCart,
      title: "Product Inquiry",
      description:
        "Looking for specific African products? Let us connect you with verified suppliers for your needs.",
      buttonText: "Find Products",
      bgType: "gradient",
    },
    {
      icon: LineChart,
      title: "Market Information",
      description:
        "Need market insights, pricing information, or trade statistics for African products?",
      buttonText: "Get Insights",
      bgType: "gradient",
    },
    {
      icon: LifeBuoy,
      title: "Technical Support",
      description:
        "Need help with your account, orders, or technical issues? Our support team is here to help.",
      buttonText: "Get Support",
      bgType: "gradient",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-green-900/20 bg-green-900/10 text-green-900 font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span>How can we help?</span>
          </div>
        </div>

        {/* CHOOSE YOUR INQUIRY TYPE (LEFT ALIGNED) */}
        <div className="mt-10">
          <h3 className="text-green-900 font-extrabold tracking-widest text-sm">
            CHOOSE YOUR INQUIRY TYPE
          </h3>
        </div>

        {/* CENTERED SUBTITLE (PERFECT CENTER) */}
        <div className="mt-4 flex justify-center">
          <p className="text-gray-500 text-xl leading-relaxed text-center max-w-2xl">
            Select the option that best describes your needs to get <br />
            personalized assistance
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((it, idx) => (
            <Card
              key={idx}
              icon={it.icon}
              title={it.title}
              description={it.description}
              buttonText={it.buttonText}
              onButtonClick={() => console.log(`${it.title} clicked`)}
              bgType={it.bgType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
