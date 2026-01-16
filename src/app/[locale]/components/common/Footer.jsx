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
import { useTranslations } from "next-intl";
import Image from "next/image";

function Footer() {
  const t = useTranslations("footer");

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
    <footer className="w-full m-0 p-0 mt-10" dir="ltr">
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

              {/* LEFT SECTION */}
              <div className="flex flex-col gap-6 text-left">
                <Image
                  src="/images/logo.png"
                  alt="EFG Afro Market"
                  width={100}
                  height={100}
                  className="h-16 w-fit"
                />

                <p className="text-gray-700 leading-7 max-w-lg" dir="ltr">
                  {t("description")}
                </p>

                <div className="flex gap-3">
                  <SocialIcon href="https://www.facebook.com/EFGAFROMARKET/" label="Facebook">
                    <Facebook size={18} />
                  </SocialIcon>
                  <SocialIcon href="https://x.com/efgafromarket" label="Twitter">
                    <Twitter size={18} />
                  </SocialIcon>
                  <SocialIcon href="https://www.linkedin.com/company/efgafromarket" label="LinkedIn">
                    <Linkedin size={18} />
                  </SocialIcon>
                  <SocialIcon href="https://www.instagram.com/efgafromarket/" label="Instagram">
                    <Instagram size={18} />
                  </SocialIcon>
                  <SocialIcon href="https://youtube.com/c/efgafromarket" label="YouTube">
                    <Youtube size={18} />
                  </SocialIcon>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="max-w-md w-full md:justify-self-end text-left">
                <h3 className="text-lg font-bold text-[#0B4E3C] mb-6 relative inline-block">
                  {t("contactTitle")}
                  <span className="absolute left-0 -bottom-2 h-0.75 w-10 bg-[#D67C2A]" />
                </h3>

                <div className="space-y-6">
                  <ContactRow
                    icon={<Mail size={20} />}
                    text={t("email")}
                    href="mailto:example@example.com"
                  />

                  <ContactRow
                    icon={<PhoneCall size={20} />}
                    text={t("phone")}
                    href="tel:+1234567890"
                  />

                  <ContactRow
                    icon={<MapPin size={20} />}
                    text={t("address")}
                    href="https://goo.gl/maps/example"
                  />
                </div>
              </div>

            </div>

            {/* COPYRIGHT */}
            <div className="mt-14 border-t border-gray-400/40 pt-6 text-center text-gray-700">
              {t("copyright")}
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-[#0B4E3C] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition z-50 hover:cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </footer>
  );
}

export default Footer;

/* ---------------- Sub components ---------------- */

function SocialIcon({ children, label, href }) {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-10 w-10 rounded-full border border-[#0B4E3C]/40 bg-white/50 backdrop-blur flex items-center justify-center text-[#0B4E3C] transition-all duration-300 ease-out hover:-translate-y-1 hover:text-white hover:bg-linear-to-br hover:from-green-900 hover:to-orange-400/80 shadow-sm hover:shadow-lg cursor-pointer"
    >
      {children}
    </a>
  );
}

function ContactRow({ icon, text, href }) {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 text-gray-700 hover:text-[#0B4E3C] transition"
    >
      {/* Icon always LEFT */}
      <div className="mt-0.5 text-[#D67C2A]">{icon}</div>
      <p className="leading-7">{text}</p>
    </a>
  );
}
