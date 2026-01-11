"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown, Menu, X, User } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("US EN");

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

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[78px] flex items-center justify-between">

          {/* LOGO */}
          <img
            src="/images/logo.png"
            alt="EFG Logo"
            className="w-16 h-12 object-contain"
          />

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-3 font-medium text-gray-800">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`px-4 py-2 rounded-full transition ${isActive
                      ? "bg-green-100 text-green-700 font-semibold"
                      : "hover:bg-green-50 hover:text-green-700"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border hover:border-green-600"
              >
                <Globe size={16} className="text-green-700" />
                {language}
                <ChevronDown size={16} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow w-36">
                  {["US EN", "UK EN", "FR"].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLanguage(l);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-green-50 text-sm"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login */}
            <button className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-700 to-yellow-600 hover:scale-105 transition">
              Login/Register
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden h-10 w-10 rounded-full border flex items-center justify-center"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Card */}
          <div className="fixed inset-x-4 top-24 bg-white rounded-2xl shadow-xl z-50 p-5">

            {/* Close */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute -top-5 right-4 h-10 w-10 rounded-xl border bg-white flex items-center justify-center"
            >
              <X className="text-orange-500" />
            </button>

            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-16 mx-auto mb-4"
            />

            {/* Nav Grid */}
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 rounded-xl text-center font-medium ${isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-50 hover:bg-green-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Login */}
            <button className="mt-5 w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-green-700 to-yellow-600 flex items-center justify-center gap-2">
              <User size={18} /> Login/Register
            </button>

            {/* Language */}
            <button className="mt-3 w-full py-3 rounded-xl bg-gray-100 flex items-center justify-center gap-2">
              <Globe size={18} className="text-green-700" /> {language}
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
