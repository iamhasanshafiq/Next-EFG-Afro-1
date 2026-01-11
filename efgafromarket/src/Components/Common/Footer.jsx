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

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full m-0 p-0">

      <div
        className="relative w-full"
        style={{
          backgroundImage: "url('/image/footerImage.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >

        <div className="absolute inset-0 bg-[#FAF5EB]/[0.92]" />

        <div className="relative z-10 w-full">
          <div className="h-[3px] w-full bg-[#D67C2A]" />

          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div className="flex flex-col gap-6">
                  <img
                    src="/image/logo.png"
                    alt="EFG Afro Market"
                    className="h-16 w-fit"
                  />

                  <p className="text-gray-700 leading-7 max-w-lg">
                    EFG Afro Market Company is a dynamic digital gateway under the
                    EFG Hub (Enterprise of the Future Generation). Connecting global
                    markets with premium African products.
                  </p>

                  <div className="flex gap-3">
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

                <div className="md:justify-self-end max-w-md w-full">
                  <h3 className="text-lg font-bold text-[#0B4E3C] mb-6 relative inline-block">
                    Contact Us
                    <span className="absolute left-0 -bottom-2 h-[3px] w-10 bg-[#D67C2A]" />
                  </h3>

                  <div className="space-y-6">
                    <ContactRow
                      icon={<Mail size={20} />}
                      text="info@efgafromarket.ae"
                    />

                    <ContactRow
                      icon={<PhoneCall size={20} />}
                      text="+97142390993"
                    />

                    <ContactRow
                      icon={<MapPin size={20} />}
                      text="Office 206, Abraj Al Mamzar Building, Block A Al Ittihad Road, PO Box 15058, Dubai, UAE."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-14 border-t border-gray-400/40 pt-6 text-center text-gray-700">
                © 2025 EFG-HUB. All rights reserved | Enterprise of the Future Generation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-[#0B4E3C] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition"
          aria-label="Scroll to top"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </footer>
  );
}

export default Footer;



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

function ContactRow({ icon, text }) {
  return (
    <div className="flex items-start gap-4 text-gray-700">
      <div className="mt-[2px] text-[#D67C2A]">{icon}</div>
      <p className="leading-7">{text}</p>
    </div>
  );
}
