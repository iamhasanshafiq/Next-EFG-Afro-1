"use client";

import { Rocket, MessageCircle, ArrowDown, Users, Handshake, Globe, Check, } from "lucide-react";

// import WorldImg from "/src/images/shutterstock_110973782-768x768.jpg";
const WorldImg = "/images/shutterstock_110973782-768x768.jpg";


function OurStory() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-14  flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="w-fit px-6 py-2 bg-gray-200 text-green-900 rounded-full shadow font-medium">
          ⭐ Our Story
        </div>
        <h1 className="text-4xl font-bold">Bridging Africa’s</h1>
        <h1 className="text-4xl font-bold">
          <span className="text-transparent bg-gradient-to-r from-green-900 to-amber-600 bg-clip-text">
            Traditional Industries
          </span>{" "}
          with Digital Commerce
        </h1>
        <p className="text-gray-600 max-w-xl">
          EFG Afro Market Company is a dynamic digital gateway created to bring Africa’s communities and products into the international market.
        </p>
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex items-center gap-3">
            <Globe className="text-green-900" />
            Digital Gateway to Africa
          </div>
          <div className="flex items-center gap-3">
            <Handshake className="text-green-900" />
            Empowering Local Producers
          </div>
          <div className="flex items-center gap-3">
            <Rocket className="text-green-900" />
            Future-Ready Commerce
          </div>
        </div>
        <div className="flex gap-5 mt-6">
          <button className="w-40 py-4 rounded-3xl bg-green-900 text-white  flex items-center justify-center gap-2 font-semibold transition hover:bg-amber-600 hover:scale-105">
            <MessageCircle /> Let’s Talk
          </button>
          <button className="w-40 py-4 rounded-3xl border border-green-900 text-green-900 flex items-center justify-center gap-2 font-semibold transition hover:bg-green-900 hover:text-white hover:scale-105">
            <ArrowDown /> Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative pr-16">
        <div className="w-full h-[500px] overflow-hidden rounded-xl">
          <img
            src={WorldImg}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="absolute bottom-6 left-6 text-white max-w-[70%]">
          <p className="text-2xl font-semibold">
            Connecting Africa to the World
          </p>
          <p>Empowering communities through digital innovation</p>
        </div>
        <div className="absolute top-5 right-0 bg-white border rounded-xl shadow p-3 flex gap-3 animate-bounceSlow">
          <Users className="text-green-700" />
          <p className="font-semibold">
            1000+ <span className="block text-sm">Producers</span>
          </p>
        </div>
        <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 bg-white border rounded-xl shadow p-3 flex gap-3 animate-bounceSlow">
          <Globe className="text-green-700" />
          <p className="font-semibold">
            50+ <span className="block text-sm">Countries</span>
          </p>
        </div>
        <div className="absolute bottom-5 right-0 bg-white border rounded-xl shadow p-3 flex gap-3 animate-bounceSlow">
          <Check className="text-green-700" />
          <p className="font-semibold">
            98% <span className="block text-sm">Success</span>
          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes bounceSlow {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10%); }
          }
          .animate-bounceSlow {
            animation: bounceSlow 6s infinite;
          }
        `}
      </style>
    </div>
  );
}

export default OurStory;
