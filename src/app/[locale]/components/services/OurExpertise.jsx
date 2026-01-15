"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCart, Truck, Sprout, CreditCard } from "lucide-react";
import { useTranslations } from "next-intl";

function OurExpertise() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("OurExpertise");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: t("Service1Title"),
      desc: t("Service1Description"),
      icon: <ShoppingCart className="w-8 h-8 text-green-900" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      features: [t("Service1One"), t("Service1Two")],
    },
    {
      id: 2,
      title: t("Service2Title"),
      desc: t("Service2Description"),
      icon: <Truck className="w-8 h-8 text-green-900" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400",
      features: [t("Service2One"), t("Service2Two")],
    },
    {
      id: 3,
      title: t("Service3Title"),
      desc: t("Service3Description"),
      icon: <Sprout className="w-8 h-8 text-green-900" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      features: [t("Service3One"), t("Service3Two")],
    },
    {
      id: 4,
      title: t("Service4Title"),
      desc: t("Service4Description"),
      icon: <CreditCard className="w-8 h-8 text-green-900" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
      features: [t("Service4One"), t("Service4Two")],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className={`inline-block px-3 py-1 text-xs font-bold text-emerald-700 bg-emerald-100 rounded-full mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {t("OurExpertiseBadge")}
          </span>

          <h2
            className={`text-2xl sm:text-3xl font-bold text-gray-800 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {t("OurExpertiseTitle")}
          </h2>

          <p className="mt-3 text-gray-600">
            {t("OurExpertiseDescription")}
          </p>
        </div>

        {/* Cards Grid – 🔒 LTR LOCK */}
        <div
          dir="ltr"
          className="max-w-5xl mx-auto flex gap-4 overflow-x-auto pb-6 snap-x lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white border-2 border-transparent rounded-2xl shadow-sm overflow-hidden transition-all duration-500 
              hover:border-green-800 hover:shadow-xl hover:-translate-y-1 snap-start min-w-[280px] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={service.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={service.title}
                />

                <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-orange-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-lg transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 mb-4 line-clamp-2">
                  {service.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs text-gray-600"
                    >
                      <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center mr-2 text-white text-[8px]">
                        ✓
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2.5 bg-green-900 text-white rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-md active:scale-95">
                  ➜ {t("OurExpertiseButton")}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurExpertise;
