
import HeroSection from "@/Components/common/HeroSection";
import InquiryTypeSection from "@/Components/contact/InquiryTypeSection";
import ContactInfoSection from "@/Components/contact/ContactInfoSection";
import FAQSection from "@/Components/contact/FAQSection";
import GeneralInquiryForm from "@/Components/contact/GeneralInquiryForm";
import { ShieldCheck } from "lucide-react";


function Contact() {
  return (
    <>
      <HeroSection
        badgeText="100% Authentic African Products"
        badgeIcon="ShieldCheck"
        title="Your Gateway to"
        highlight="African Excellence"
        description="Connecting global markets with premium African agricultural products, natural resources, and handcrafted treasures."
        showImages={false}
        showStats={true}
        stats={[
          { value: "24", label: "24/7 SUPPORT" },
          { value: "4", label: "RESPONSE TIME (HRS)" },
          { value: "50", label: "COUNTRIES" },
        ]}
      />
      <InquiryTypeSection/>
      <GeneralInquiryForm/>
      <ContactInfoSection/>
      <FAQSection/>

    </>
  );
}

export default Contact;
