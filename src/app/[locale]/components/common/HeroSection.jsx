"use client";
import React, { useEffect, useState } from 'react';
import { ShieldCheck, Globe, Truck, Settings } from "lucide-react";
import { useTranslations } from "next-intl";
const BADGE_ICONS = {
  shield: ShieldCheck,
  globe: Globe,
  truck: Truck,
  settings: Settings,
};

const HeroSection = ({

  

  title,
  highlight,
  description,
  badgeText,
  badgeIcon, // ✅ YAHI SAHI HAI
  showImages = true,
  showStats = true,
  btnPrimary,
  btnSecondary,
  images = {},
  useIcons = false, // NEW PROP: set to true for icons, false for images
  enableFloating = false, // NEW PROP: set to true to enable floating animation
  reverseGradient = false, // NEW PROP: set to true for orange to green gradient
  showBadgeIcon = false, // NEW PROP: set to true to show rotating settings icon
  reduceIconSpacing = false // NEW PROP: set to true to reduce spacing between icons (Services page)
}) => {

  const t = useTranslations("Stats");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="relative w-full overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 relative">

        {/* Badge - Fade in */}
        {badgeText && (
          <div
            className={`w-full flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-6 py-2 text-green-900 font-semibold mb-8">

              {badgeIcon && BADGE_ICONS[badgeIcon] && (
                <span className="flex items-center">
                  {React.createElement(BADGE_ICONS[badgeIcon], {
                    className: "w-4 h-4 text-orange-500",
                  })}
                </span>
              )}




              {showBadgeIcon && (
                <Settings className="w-4 h-4 text-green-700 animate-spin-slow" />
              )}

              <span>{badgeText}</span>

            </div>
          </div>
        )}
        {/* Heading */}
        <div className="relative flex items-center justify-center">
          {/* LEFT IMAGE or ICON */}
          {showImages && images.left && (
            useIcons ? (
              <div
                className={`absolute ${reduceIconSpacing ? 'left-20 top-16' : 'left-10 top-10'} hidden md:block ${enableFloating ? 'animate-float' : ''}`}
                style={{ animationDelay: '0s' }}
              >
                <div className="bg-green-800 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
                  <Globe className="w-20 h-20 text-white" strokeWidth={1.5} />
                </div>
              </div>
            ) : (
              <img
                src={images.left}
                alt="Product"
                className={`absolute left-10 top-10 w-32 hidden md:block ${enableFloating ? 'animate-float' : ''}`}
                style={{ animationDelay: '0s' }}
              />
            )
          )}
          <h1
            className={`text-5xl md:text-6xl font-bold leading-tight text-gray-900 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            {title} {highlight && <br />}
            {highlight && (
              <span className={`bg-clip-text text-transparent ${reverseGradient
                ? 'bg-gradient-to-r from-orange-400 to-green-800'
                : 'bg-gradient-to-r from-green-800 to-yellow-500'
                }`}>
                {highlight}
              </span>
            )}
          </h1>
          {/* RIGHT IMAGE or ICON */}
          {showImages && images.right && (
            useIcons ? (
              <div
                className={`absolute ${reduceIconSpacing ? 'right-20 top-16' : 'right-10 top-10'} hidden md:block ${enableFloating ? 'animate-float' : ''}`}
                style={{ animationDelay: '1s' }}
              >
                <div className="bg-yellow-500 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
                  <Truck className="w-20 h-20 text-white" strokeWidth={1.5} />
                </div>
              </div>
            ) : (
              <img
                src={images.right}
                alt="Product"
                className={`absolute right-10 top-10 w-32 hidden md:block ${enableFloating ? 'animate-float' : ''}`}
                style={{ animationDelay: '1s' }}
              />
            )
          )}
        </div>
        {/* Description - Fade in */}
        {description && (
          <p
            className={`text-lg text-gray-600 mt-6 text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            {description}
          </p>
        )}
        {/* Buttons or Bottom Icons Container */}
        {(btnPrimary || btnSecondary || (showImages && (images.bottomLeft || images.bottomRight))) && (
          <div className="relative flex items-center justify-center mt-14 gap-4">
            {/* Bottom Left IMAGE or ICON */}
            {showImages && images.bottomLeft && (
              useIcons ? (
                <div
                  className={`absolute ${reduceIconSpacing ? 'left-24 bottom-2' : 'left-16 bottom-0'} hidden md:block ${enableFloating ? 'animate-float' : ''}`}
                  style={{ animationDelay: '2s' }}
                >
                  <div className="bg-yellow-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
                    {/* <Shield className="w-16 h-16 text-white" strokeWidth={1.5} /> */}
                    <ShieldCheck className="w-16 h-16 text-white" />


                  </div>
                </div>
              ) : (
                <img
                  src={images.bottomLeft}
                  alt="Product"
                  className={`absolute left-16 bottom-0 w-28 hidden md:block ${enableFloating ? 'animate-float' : ''}`}
                  style={{ animationDelay: '2s' }}
                />
              )
            )}
            {btnPrimary || btnSecondary ? (
              <div
                className={`flex gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: '600ms' }}
              >
                {btnPrimary && (
                  <button className="px-8 py-3 bg-[#054B2B] text-white rounded-full text-lg font-semibold hover:bg-green-900 transition-colors duration-300">
                    {btnPrimary}
                  </button>
                )}
                {btnSecondary && (
                  <button className="px-8 py-3 border border-[#054B2B] rounded-full text-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                    {btnSecondary}
                  </button>
                )}
              </div>
            ) : (
              <div className="h-16"></div>
            )}
            {/* Bottom Right IMAGE or ICON */}
            {showImages && images.bottomRight && (
              useIcons ? (
                <div
                  className={`absolute ${reduceIconSpacing ? 'right-24 bottom-2' : 'right-16 bottom-0'} hidden md:block ${enableFloating ? 'animate-float' : ''}`}
                  style={{ animationDelay: '1.5s' }}
                >
                  <div className="bg-green-800 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
                    <Settings className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              ) : (
                <img
                  src={images.bottomRight}
                  alt="Product"
                  className={`absolute right-16 bottom-0 w-28 hidden md:block ${enableFloating ? 'animate-float' : ''}`}
                  style={{ animationDelay: '1.5s' }}
                />
              )
            )}
          </div>
        )}
        {/* Stats Section - Fade in with stagger */}
        {showStats && (
          <div className="mt-20 flex justify-center gap-20 text-center">
            <div
              className="transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '800ms'
              }}
            >
              <h2 className="text-4xl font-bold text-green-900">500</h2>
              <p className="text-gray-600 text-sm">{t("Products")}</p>
            </div>
            <div
              className="transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '950ms'
              }}
            >
              <h2 className="text-4xl font-bold text-green-900">50</h2>
              <p className="text-gray-600 text-sm">{t("Countries")}</p>
            </div>
            <div
              className="transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '1100ms'
              }}
            >
              <h2 className="text-4xl font-bold text-green-900">1000</h2>
              <p className="text-gray-600 text-sm">{t("Customers")}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;