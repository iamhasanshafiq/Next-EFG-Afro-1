"use client";

import HeroSection from "../components/common/HeroSection";
import InquiryTypeSection from "../components/contact/InquiryTypeSection";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import FAQSection from "../components/contact/FAQSection";
import GeneralInquiryForm from "../components/contact/GeneralInquiryForm";
import { useTranslations, useLocale } from "next-intl";

function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale(); // ✅ added

  return (
    <>
      <HeroSection
        key={locale}              // ✅ THIS IS THE FIX
        badgeText={t("badgeText")}
        badgeIcon="ShieldCheck"
        title={t("title")}
        highlight={t("highlight")}
        description={t("description")}
        showImages={false}
        showStats={true}
        stats={[
          { value: "24", label: t("stats.support") },
          { value: "4", label: t("stats.responseTime") },
          { value: "50", label: t("stats.countries") },
        ]}
      />

      <InquiryTypeSection />
      <GeneralInquiryForm />
      <ContactInfoSection />
      <FAQSection />
    </>
  );
}

export default Contact;
