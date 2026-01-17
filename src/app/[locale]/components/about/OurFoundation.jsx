"use client";

import {
  ShieldHalf,
  Leaf,
  Handshake,
  Globe,
  Rocket,
  Star,
  Users,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Card from "../common/Card";
import { useTranslations } from "next-intl";
import { useRef, useEffect, useState } from "react";
import Container from "../../container";

function OurFoundation() {
  const t = useTranslations("OurFoundation");

  const sliderRef = useRef(null);

  // 🔥 Hydration-safe render
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔹 Slide ONE card (snap aligned)
  const slideLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-x-hidden">
      {/* ↑ ADDED overflow-x-hidden (page overflow fix) */}
      <Container>
        {/* HEADER */}
        <div className="text-center mb-6">
          <span className="mx-auto w-fit flex items-center justify-center px-3 py-1 text-sm font-medium text-emerald-600 bg-gray-200 rounded-full mb-3 gap-2">
            <Heart className="text-amber-300" />
            {t("OurFoundation")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t("OurFoundationTitle")}
          </h2>

          <p className="text-gray-500 mt-2">
            {t("OurFoundationDescription")}
          </p>
        </div>

        {/* SLIDER AREA */}
        <div className="relative max-w-7xl mx-auto py-12">
          {/* LEFT ARROW (mobile only) */}
          <button
            onClick={slideLeft}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-emerald-700 hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT ARROW (mobile only) */}
          <button
            onClick={slideRight}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-emerald-700 hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* 🔥 CARDS (SNAP + CENTER EFFECT) */}
          {mounted && (
            <div
              ref={sliderRef}
              dir="ltr"
              className="
                flex gap-6 overflow-x-auto scrollbar-hide
                snap-x snap-mandatory
                px-[15vw]

                md:px-0
                md:grid md:grid-cols-4 md:gap-6
                md:overflow-visible md:snap-none
              "
              style={{
                WebkitOverflowScrolling: "touch",

                /* ✅ ADDED — RTL isolation (cards seedhe) */
                direction: "ltr",
                unicodeBidi: "isolate",

                /* ✅ ADDED — px-[15vw] override (overflow fix) */
                paddingInline: "7vw",
              }}
            >
              {/* EACH CARD WRAPPED (DO NOT TOUCH Card.jsx) */}
              <div className="snap-center flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto">
                <Card icon={ShieldHalf} title={t("Authenticity")} description={t("AuthenticityDescription")} bgType="gradient" />
              </div>

              <div className="snap-center flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto">
                <Card icon={Leaf} title={t("Sustainability")} description={t("SustainabilityDescription")} bgType="gradient" />
              </div>

              <div className="snap-center flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto">
                <Card icon={Handshake} title={t("Integrity")} description={t("IntegrityDescription")} bgType="gradient" />
              </div>

              <div className="snap-center flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto">
                <Card icon={Rocket} title={t("Innovation")} description={t("InnovationDescription")} bgType="gradient" />
              </div>

              <div className="snap-center flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto">
                <Card icon={Globe} title={t("Community")} description={t("CommunityDescription")} bgType="gradient" />
              </div>

              <div className="snap-center flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto">
                <Card icon={Star} title={t("Excellence")} description={t("ExcellenceDescription")} bgType="gradient" />
              </div>

              <div className="snap-center flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto">
                <Card icon={Users} title={t("Collaboration")} description={t("CollaborationDescription")} bgType="gradient" />
              </div>

              <div className="snap-center flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto">
                <Card icon={Heart} title={t("Passion")} description={t("PassionDescription")} bgType="gradient" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default OurFoundation;
