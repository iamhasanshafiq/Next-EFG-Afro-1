"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");
  const pathname = usePathname();
  const isRTL = pathname.startsWith("/ar") || pathname.startsWith("/ur");

  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: 0,
      titleKey: "OrganicProducts",
      descKey: "OrganicProductsDescription",
      headingKey: "OrganicProductsTitle",
      contentKey: "OrganicProductsContent1",
      benefitsKeys: [
        "OrganicProductsContent2",
        "OrganicProductsContent3",
        "OrganicProductsContent4",
        "OrganicProductsContent5",
      ],
      icon: "🌿",
      image: "/images/Veg-basket-1024x673.jpeg.webp",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500",
    },
    {
      id: 1,
      titleKey: "ExpressGlobalDelivery",
      descKey: "ExpressGlobalDeliveryDescription",
      headingKey: "ExpressGlobalDeliveryTitle",
      contentKey: "ExpressGlobalDeliveryContent1",
      benefitsKeys: [
        "ExpressGlobalDeliveryContent2",
        "ExpressGlobalDeliveryContent3",
        "ExpressGlobalDeliveryContent4",
        "ExpressGlobalDeliveryContent5",
      ],
      icon: "🚚",
      image: "/images/exportyd.jpg",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500",
    },
    {
      id: 2,
      titleKey: "SatisfactionGuarantee",
      descKey: "SatisfactionGuaranteeDescription",
      headingKey: "SatisfactionGuaranteeTitle",
      contentKey: "SatisfactionGuaranteeContent1",
      benefitsKeys: [
        "SatisfactionGuaranteeContent2",
        "SatisfactionGuaranteeContent3",
        "SatisfactionGuaranteeContent4",
        "SatisfactionGuaranteeContent5",
      ],
      icon: "🎯",
      image: "/images/teamwork-2-1024x702.webp",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500",
    },
  ];

  const currentFeature = features[selectedFeature];

  return (
    // 🔒 Layout hamesha LTR (order stable rahe)
    <section dir="ltr" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <div className="mb-12 flex items-start">
          <div className="inline-block bg-teal-700 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-widest">
            {t("WHYCHOOSEUS")}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT */}
          <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {t("WhyChooseEFGAfroMarket")}
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`w-full rounded-2xl p-6 border-2 transition-all duration-300 text-left ${
                    selectedFeature === index
                      ? `${feature.borderColor} ${feature.bgColor} shadow-lg scale-105`
                      : "border-gray-200 bg-white hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-lg ${
                        selectedFeature === index
                          ? feature.iconBg
                          : "bg-gray-200"
                      } flex items-center justify-center text-white text-2xl`}
                    >
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t(feature.descKey)}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden border-8 border-orange-400 shadow-xl">
                <Image
                  src={currentFeature.image}
                  alt={t(currentFeature.headingKey)}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT () */}
       <div
  className={`space-y-8 ${isRTL ? "text-right" : "text-left"}`}
>

  <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
    {t(currentFeature.headingKey)}
  </h3>

  <p className="text-gray-600">
    {t(currentFeature.contentKey)}
  </p>

  <div className="space-y-4">
    {currentFeature.benefitsKeys.map((benefitKey, index) => (
      <div
        key={index}
        dir="ltr"   // 🔥 HARD FIX – ROW NEVER FLIPS
        className={`flex items-center gap-4 pb-4 rounded-lg border-orange-400
          ${isRTL ? "border-r-4 pr-4" : "border-l-4 pl-4"}
        `}
      >
        <span
          dir={isRTL ? "rtl" : "ltr"}   // 🔥 TEXT DIRECTION SAFE
          className={`font-medium text-gray-700 w-full ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t(benefitKey)}
        </span>
      </div>
    ))}
  </div>

</div>


        </div>
      </div>
    </section>
  );
}
