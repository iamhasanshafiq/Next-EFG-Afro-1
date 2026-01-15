"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Container from "../../container";

export default function NewsletterSection() {
  const t = useTranslations("NewsLetter");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const deliverBadges = [
    "FRESH",
    "HealthyProducts",
    "QUALITYFIRST",
    "ECOFRIENDLY",
    "FARMFOOD",
    "NATURALFOOD",
  ];

  const displayedBadges = isRTL
    ? [...deliverBadges].reverse()
    : deliverBadges;

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <Container>

        {/* GREEN BOX */}
        <div className="mb-16 lg:mb-24">
          <div className="relative bg-[#0b5d47] rounded-3xl p-8 lg:p-12 shadow-lg overflow-hidden">

            {/* DECOR */}
            <div className="absolute top-6 left-10 opacity-10 text-4xl">🍃</div>
            <div className="absolute bottom-6 right-16 opacity-10 text-5xl">🍃</div>

            {/* GRID — NEVER FLIPS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* LEFT SIDE TEXT (ALWAYS LEFT) */}
              <div className={`text-white ${isRTL ? "text-right" : "text-left"}`}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                  {t("NewsLetterTitle")}
                </h2>
                <p className="text-lg opacity-90">
                  {t("OUREXCELLENCEDescription")}
                </p>
              </div>

              {/* RIGHT SIDE FORM (ALWAYS RIGHT) */}
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 justify-end">
                  <input
                    type="email"
                    placeholder={t("NewsLetterPlaceHolder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    dir={isRTL ? "rtl" : "ltr"}
                    className={`w-full max-w-sm px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-orange-400
                      ${isRTL ? "text-right" : "text-left"}`}
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300"
                  >
                    {t("Send")}
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>

        {/* WE DELIVER */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            {t("WeDeliver")}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {displayedBadges.map((key) => (
              <div
                key={key}
                className="border-2 border-teal-600 rounded-2xl px-4 py-6 text-center hover:scale-105 hover:shadow-lg"
              >
                <p className="text-teal-700 font-bold text-sm lg:text-base">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
