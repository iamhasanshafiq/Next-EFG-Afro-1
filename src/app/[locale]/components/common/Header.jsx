"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
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
  { code: "en", label: "EN", flag: "/pngs/Australia.png" },
  { code: "ar", label: "AR", flag: "/pngs/Saudi_Arabia.png" },
  { code: "zh", label: "ZH", flag: "/pngs/china.png" },
  { code: "fr", label: "FR", flag: "/pngs/france.png" },
  { code: "es", label: "ES", flag: "/pngs/spain.png" },
];

export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || "en";
  const cleanPath = pathname.replace(/\/$/, "");

  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef(null);

  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <>
      <div className="h-[78px]" />

      <nav
        className={`
          fixed top-0 left-0 w-full bg-white shadow-sm z-50
          transition-transform duration-300 ease-in-out
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <Container>
          <div
            className={`h-[78px] flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""
              }`}
          >
            <img
              src="/images/logo.png"
              alt="EFG Logo"
              className="w-25 h-auto object-contain transition-transform duration-300 hover:scale-110"
            />

            <ul
              className={`hidden lg:flex items-center gap-3 font-medium text-gray-800 ${isRTL ? "flex-row-reverse" : ""
                }`}
            >
              {navItems.map((item) => {
                const isHome = item.path === "/";
                const isActive = isHome
                  ? cleanPath === `/${currentLocale}`
                  : cleanPath === `/${currentLocale}${item.path}`;

                return (
                  <li key={item.key} className="relative group">
                    <Link
                      href={`/${currentLocale}${item.path}`}
                      className={`relative px-5 py-2 font-medium transition ${isActive
                        ? "text-gray-900"
                        : "hover:text-green-700"
                        }`}
                    >
                      {t(item.key)}

                      <span
                        className={`
                          absolute inset-0 rounded-full -z-10
                          bg-slate-200
                          transition-opacity duration-300
                          opacity-0
                          ${isActive ? "opacity-100" : ""}
                          lg:group-hover:opacity-100
                        `}
                      />

                      <span
                        className={`
                          absolute bottom-[-1px] left-6 right-6 h-[2px]
                          bg-orange-500 rounded-full
                          transition-transform duration-300 origin-left
                          scale-x-0
                          ${isActive ? "scale-x-100" : ""}
                          lg:group-hover:scale-x-100
                        `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div
              className={`hidden lg:flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""
                }`}
            >
              <div
                className="relative"
                ref={langRef}
                style={{ direction: "ltr", unicodeBidi: "isolate" }}
              >

               <button
  onClick={() => setLangOpen(!langOpen)}
  suppressHydrationWarning
  className="px-4 py-2 rounded-full bg-gray-100 border hover:border-green-600"
>
  <span
    dir="ltr"
    className="flex flex-row items-center gap-2"
  >
    <Globe size={16} className="text-green-700" />
    {currentLocale.toUpperCase()}
    <ChevronDown size={16} />
  </span>
</button>


                {langOpen && (
                  <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow w-36">

                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        suppressHydrationWarning
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm
    hover:bg-gray-200  border-b border-gray-400
    ${currentLocale === lang.code
                            ? "bg-gray-200  font-semibold text-grar-800"
                            : ""
                          }
    ${lang.code === LANGUAGES[0].code ? "rounded-t-lg" : ""}
    ${lang.code === LANGUAGES[LANGUAGES.length - 1].code ? "rounded-b-lg" : ""}
  `}
                        style={{ direction: "ltr" }}
                      >
                        <img
                          src={lang.flag}
                          alt={lang.label}
                          className="w-5 h-5 object-contain"
                        />
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="https://dashboard.efgafromarket.ae/"
                className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-700 to-yellow-600 hover:scale-105 transition"
              >
                {t("LoginRegister")}
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden h-10 w-10 rounded-full border flex items-center justify-center"
            >
              <Menu size={20} />
            </button>
          </div>
        </Container>

        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setMobileOpen(false)}
            />

            <div
              dir="ltr"
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
                className="w-25 h-auto mx-auto mb-4"
              />

              <div className="grid grid-cols-2 gap-3 ltr">
                {navItems.map((item) => {
                  const isHome = item.path === "/";
                  const isActive = isHome
                    ? cleanPath === `/${currentLocale}`
                    : cleanPath === `/${currentLocale}${item.path}`;

                  return (
                    <Link
                      key={item.key}
                      href={`/${currentLocale}${item.path}`}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        relative py-3 rounded-xl text-center font-medium
                        border-2 border-gray-200
                        ${isActive
                          ? "bg-gray-100"
                          : "bg-gray-50 hover:bg-green-50"
                        }
                      `}
                    >
                      <span className="relative inline-block">
                        {t(item.key)}
                        {isActive && (
                          <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-orange-500 rounded-full" />
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-3 grid grid-cols-5 gap-2 ltr">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`py-2 rounded-xl border text-sm flex items-center justify-center gap-1 ${currentLocale === lang.code
                      ? "bg-gray-200 border-2 border-gray-400 font-semibold text-grar-800"
                      : "bg-gray-100"
                      }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.label}
                      className="w-4 h-4 object-contain"
                    />
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
