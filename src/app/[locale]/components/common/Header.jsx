"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown, Menu, X, User } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "../../container";

const navItems = [
  { key: "Home", path: "/" },
  { key: "AboutUs", path: "/about" },
  { key: "Products", path: "/products" },
  { key: "Services", path: "/services" },
  { key: "Blog", path: "/blog" },
  { key: "Contact", path: "/contact" },
];

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "zh", label: "ZH" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
];

export default function Header() {
  const t = useTranslations("Header");

  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1] || "en";

  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  const changeLanguage = (code) => {
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/"));
    setLangOpen(false);
    setMobileOpen(false);
  };

  const isRTL = currentLocale === "ar";

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <Container>
        <div
          className={`h-[78px] flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""
            }`}
        >
          {/* LOGO */}
          <img
            src="/images/logo.png"
            alt="EFG Logo"
            className="w-16 h-12 object-contain"
          />

          {/* DESKTOP MENU */}
          <ul
            className={`hidden md:flex items-center gap-3 font-medium text-gray-800 ${isRTL ? "flex-row-reverse" : ""
              }`}
          >
            {navItems.map((item) => {
              const isHome = item.path === "/";
              const isActive = isHome
                ? pathname === `/${currentLocale}`
                : pathname === `/${currentLocale}${item.path}`;

              return (
                <li key={item.key} className="relative group">
                  <Link
                    href={`/${currentLocale}${item.path}`}
                    className={`relative px-5 py-2 font-medium transition ${isActive ? "text-gray-900" : "hover:text-green-700"
                      }`}
                  >
                    {t(item.key)}

                    {/* SILVER BACKGROUND (ACTIVE + HOVER) */}
                    <span
                      className={`
                        absolute inset-0
                        bg-slate-200
                        rounded-full
                        py-4
                        border-1 border-slate-300
                        -z-10
                        transition-opacity duration-300
                        ${isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                    />

                    {/* ORANGE UNDERLINE — TRUE 1px GAP */}
                    <span
                      className={`
                        absolute
                        bottom-[-1px]
                        left-6
                        right-6
                        h-[2px]
                        bg-orange-500
                        rounded-full
                        transform
                        origin-center
                        transition-transform duration-300 ease-out
                        ${isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP RIGHT */}
          <div
            className={`hidden md:flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""
              }`}
          >
            {/* Language */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border hover:border-green-600"
              >
                <Globe size={16} className="text-green-700" />
                {currentLocale.toUpperCase()}
                <ChevronDown size={16} />
              </button>

              {langOpen && (
                <div
                  className={`absolute ${isRTL ? "left-0" : "right-0"
                    } mt-2 bg-white border rounded-lg shadow w-36`}
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-green-50 ${currentLocale === lang.code
                          ? "font-semibold text-green-700"
                          : ""
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login */}
            <Link
            href={`https://dashboard.efgafromarket.ae/`}
            className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-700 to-yellow-600 hover:scale-105 transition">
              {t("LoginRegister")}
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden h-10 w-10 rounded-full border flex items-center justify-center"
          >
            <Menu size={20} />
          </button>
        </div>
      </Container>

      {/* MOBILE MENU — unchanged */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setMobileOpen(false)}
          />

          <div
            className={`fixed inset-x-4 top-24 bg-white rounded-2xl shadow-xl z-50 p-5 ${isRTL ? "text-right" : "text-left"
              }`}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className={`absolute -top-5 ${isRTL ? "left-4" : "right-4"
                } h-10 w-10 rounded-xl border bg-white flex items-center justify-center`}
            >
              <X className="text-orange-500" />
            </button>

            <img
              src="/images/logo.png"
              alt="logo"
              className="w-16 mx-auto mb-4"
            />

            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${currentLocale}${item.path}`}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 rounded-xl text-center font-medium bg-gray-50 hover:bg-green-50"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>

            <Link href={`https://dashboard.efgafromarket.ae/`}  className="mt-5 w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-green-700 to-yellow-600 flex items-center justify-center gap-2">
              <User size={18} /> {t("LoginRegister")}

            </Link>

            <div className="mt-3 grid grid-cols-5 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`py-2 rounded-xl border text-sm ${currentLocale === lang.code
                      ? "bg-green-100 text-green-700 font-semibold"
                      : "bg-gray-100"
                    }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
