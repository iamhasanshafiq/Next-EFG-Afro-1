"use client";

import { ShieldHalf, Leaf, Handshake, Globe, Rocket, Star, Users, Heart } from "lucide-react";
import { Card } from "../index";
import { useTranslations } from "next-intl";
import Container from "../../container";

function OurFoundation() {
  const t = useTranslations("OurFoundation");

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container w-full mx-auto px-4 sm:px-6">
        <Container>
          {/* HEADER */}
          <div className="text-center mb-5">
            <span className="block mx-auto w-fit flex items-center justify-center px-3 py-1 text-sm font-medium text-emerald-600 bg-gray-200 rounded-full mb-3 gap-2">
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

          {/* CARDS */}
          <section className="max-w-7xl mx-auto px-2 md:px-4 py-12">
            <div
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <Card
                icon={ShieldHalf}
                title={t("Authenticity")}
                description={t("AuthenticityDescription")}
                bgType="gradient"
              />

              <Card
                icon={Leaf}
                title={t("Sustainability")}
                description={t("SustainabilityDescription")}
                bgType="gradient"
              />

              <Card
                icon={Handshake}
                title={t("Integrity")}
                description={t("IntegrityDescription")}
                bgType="gradient"
              />

              <Card
                icon={Rocket}
                title={t("Innovation")}
                description={t("InnovationDescription")}
                bgType="gradient"
              />

              <Card
                icon={Globe}
                title={t("Community")}
                description={t("CommunityDescription")}
                bgType="gradient"
              />

              <Card
                icon={Star}
                title={t("Excellence")}
                description={t("ExcellenceDescription")}
                bgType="gradient"
              />

              <Card
                icon={Users}
                title={t("Collaboration")}
                description={t("CollaborationDescription")}
                bgType="gradient"
              />

              <Card
                icon={Heart}
                title={t("Passion")}
                description={t("PassionDescription")}
                bgType="gradient"
              />
            </div>
          </section>
        </Container>
      </div>
    </section>
  );
}

export default OurFoundation;
