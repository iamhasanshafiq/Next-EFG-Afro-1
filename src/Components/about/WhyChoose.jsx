"use client";

import React, { useState, useEffect } from "react";
import { Settings, Truck, Headset, Clock, Medal, Check } from "lucide-react";


function WhyChoose() {
  const [activeTab, setActiveTab] = useState("technology");
  const [imageScale, setImageScale] = useState(1);

  const TABS = {
    technology: {
      title: "Advanced Technology Stack",
      desc:
        "Our platform leverages AI, blockchain, and IoT technologies to provide real-time tracking and secure transactions.",
      image: "/images/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg",
      label: "Advanced Technology",
      icon: Settings,
      points: [
        "AI-powered quality verification",
        "Blockchain-secured transactions",
        "IoT-enabled supply chain tracking",
        "Mobile-first design",
      ],
    },
    logistics: {
      title: "Integrated Logistics Network",
      desc:
        "From farm to doorstep, our logistics ensure fast and safe global delivery.",
      image: "/images/glgofficial_cover.jpg",
      label: "Global Logistics",
      icon: Truck,
      points: [
        "Cold-chain facilities",
        "Express shipping",
        "Customs clearance",
        "Real-time tracking",
      ],
    },
    support: {
      title: "Dedicated Support System",
      desc: "Our multilingual team provides 24/7 assistance worldwide.",
      image: "/images/360_F_542604531_DGyPu4WuqiUykOtt6DwadjlRmgOzQaM5.jpg",
      label: "Dedicated Support",
      icon: Headset,
      points: [
        "24/7 customer support",
        "Multilingual help",
        "Producer training",
        "Market insights",
      ],
    },
  };


  const current = TABS[activeTab];
  const Icon = current.icon;

  useEffect(() => {
    setImageScale(0.96);
    const t1 = setTimeout(() => setImageScale(1.04), 150);
    const t2 = setTimeout(() => setImageScale(1), 300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [activeTab]);

  return (
    <section className="bg-gray-50 py-24 w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 items-center">

        {/* LEFT */}
        <div className="w-full md:w-1/2 px-6">
          <span className="inline-flex items-center gap-2 bg-gray-200 text-green-900 px-3 py-1 rounded-full mb-6">
            <Medal className="text-amber-500" />
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What Makes Us{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-green-500 to-yellow-500">
              Different
            </span>
          </h2>

          <p className="text-gray-500 mb-10">
            A complete ecosystem combining traditional values with modern
            technology.
          </p>

          {/* TABS */}
          <div className="flex gap-3 flex-wrap mb-10">
            {Object.keys(TABS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                  ${activeTab === tab
                    ? "bg-green-900 text-white scale-105"
                    : "border text-gray-500 hover:bg-green-900 hover:text-white"
                  }`}
              >
                {tab === "technology" && <Settings />}
                {tab === "logistics" && <Truck />}
                {tab === "support" && <Headset />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <h3 className="text-2xl font-semibold mb-3">{current.title}</h3>
          <p className="text-gray-400 mb-6">{current.desc}</p>

          <ul className="space-y-4">
            {current.points.map((item, i) => (
              <li key={i} className="flex gap-3 items-center">
                <Check className="text-green-900" />
                <span className="text-gray-500">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[40%] relative flex justify-center">

          {/* IMAGE CONTAINER (FIXED + ROUNDED) */}
          <div
            className="w-full h-[400px] overflow-hidden rounded-2xl transition-transform duration-500"
            style={{ transform: `scale(${imageScale})` }}
          >
            <img
              src={current.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* ICON + LABEL */}
          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
            <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <p className="text-xl font-semibold">{current.label}</p>
          </div>

          {/* FLOATING BADGES */}
          <div className="absolute top-5 right-0 md:right-[-10%] bg-white border rounded-full shadow-md py-1 px-5 flex gap-2 animate-bounce-slow">
            <Medal className="text-green-700" />
            <p className="font-semibold">ISO Certified</p>
          </div>

          <div className="absolute top-1/2 left-0 md:left-[-10%] -translate-y-1/2 bg-white border rounded-full shadow-md py-1 px-5 animate-bounce-slow">
            <p className="font-semibold">Secure Platform</p>
          </div>

          <div className="absolute bottom-5 right-0 md:right-[-10%] bg-white border rounded-full shadow-md py-1 px-5 flex gap-2 animate-bounce-slow">
            <Clock className="text-green-700" />
            <p className="font-semibold">24/7 Available</p>
          </div>

          <style>
            {`
              @keyframes bounce-slow {
                0%,100% { transform: translateY(0); }
                50% { transform: translateY(-10%); }
              }
              .animate-bounce-slow {
                animation: bounce-slow 3s infinite;
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
