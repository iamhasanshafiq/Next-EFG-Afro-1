"use client";

import HeroSection from "../Components/common/HeroSection";
import InquiryTypeSection from "../Components/contact/InquiryTypeSection";
import ContactInfoSection from "../Components/contact/ContactInfoSection";
import FAQSection from "../Components/contact/FAQSection";
import GeneralInquiryForm from "../Components/contact/GeneralInquiryForm";
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
