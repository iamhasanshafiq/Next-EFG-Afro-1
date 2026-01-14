"use client";

import { useEffect, useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  PhoneCall,
  MapPin,
  ChevronUp,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Container from "../../container";

function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full m-0 p-0">
      <Container>
      <div
        className="relative w-full"
        style={{
          backgroundImage: "url('/images/footerImage.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="absolute inset-0 bg-[#FAF5EB]/92" />

        <div className="relative z-10 w-full">
          <div className="h-0.75 w-full bg-[#D67C2A]" />

          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {/* Left Section */}
              <div className="flex flex-col gap-6">
                <img
                  src="/images/logo.png"
                  alt="EFG Afro Market"
                  className="h-16 w-fit"
                />

                <p className="text-gray-700 leading-7 max-w-lg">
                  {t("description")}
                </p>

                <div
                  className={`flex gap-3 ${
                    isRTL ? "justify-end" : ""
                  }`}
                >
                  <SocialIcon label="Facebook">
                    <Facebook size={18} />
                  </SocialIcon>
                  <SocialIcon label="Twitter">
                    <Twitter size={18} />
                  </SocialIcon>
                  <SocialIcon label="LinkedIn">
                    <Linkedin size={18} />
                  </SocialIcon>
                  <SocialIcon label="Instagram">
                    <Instagram size={18} />
                  </SocialIcon>
                  <SocialIcon label="YouTube">
                    <Youtube size={18} />
                  </SocialIcon>
                </div>
              </div>

              {/* Right Section */}
              <div
                className={`max-w-md w-full ${
                  isRTL
                    ? "md:justify-self-start text-right"
                    : "md:justify-self-end text-left"
                }`}
              >
                <h3 className="text-lg font-bold text-[#0B4E3C] mb-6 relative inline-block">
                  {t("contactTitle")}
                  <span className="absolute left-0 -bottom-2 h-0.75 w-10 bg-[#D67C2A]" />
                </h3>

                <div className="space-y-6">
                  <ContactRow
                    icon={<Mail size={20} />}
                    text={t("email")}
                    isRTL={isRTL}
                  />

                  <ContactRow
                    icon={<PhoneCall size={20} />}
                    text={t("phone")}
                    isRTL={isRTL}
                  />

                  <ContactRow
                    icon={<MapPin size={20} />}
                    text={t("address")}
                    isRTL={isRTL}
                  />
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-gray-400/40 pt-6 text-center text-gray-700">
              {t("copyright")}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 ${
            isRTL ? "left-6" : "right-6"
          } h-12 w-12 rounded-full bg-[#0B4E3C] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={22} />
        </button>
      )}
      </Container>
    </footer>
  );
}

export default Footer;

/* ---------------- Sub Components ---------------- */

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="h-10 w-10 rounded-full border border-[#0B4E3C]/40 bg-white/50 backdrop-blur flex items-center justify-center text-[#0B4E3C] hover:bg-white transition cursor-pointer"
    >
      {children}
    </a>
  );
}

function ContactRow({ icon, text, isRTL }) {
  return (
    <div
      className={`flex items-start gap-4 text-gray-700 ${
        isRTL ? "flex-row-reverse text-right" : ""
      }`}
    >
      <div className="mt-0.5 text-[#D67C2A]">{icon}</div>
      <p className="leading-7">{text}</p>
    </div>
  );
}
