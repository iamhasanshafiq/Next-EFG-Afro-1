"use client";

import { ShieldHalf, Leaf, Handshake, Globe, Rocket, Star, Users, Heart } from "lucide-react";
import { Card } from "../index";

function OurFoundation() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container  w-full mx-auto px-4 sm:px-6 ">
        <div className="text-center mb-5">
          <span className="block mx-auto w-fit flex items-center justify-center px-3 py-1 text-sm font-medium text-emerald-600 bg-gray-200 rounded-full mb-3 py-2 px-3 gap-2">
            <Heart className="text-amber-300" />
            Our Foundation</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Core Values</h2>
          <p className="text-gray-500 mt-2">The principles that guide everything we do</p>
        </div>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div
            className=" flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <Card
              icon={ShieldHalf}
              title="Authenticity"
              description="We ensure all products are genuinely African, preserving theauthentic heritage and quality that makes them special."
              bgType="gradient"
            />
            <Card
              icon={Leaf}
              title="Sustainability"
              description="Environmental responsibility and sustainable practices are at thecore of our operations and partnerships."
              bgType="gradient"
            />
            <Card
              icon={Handshake}
              title="Integrity"
              description="Transparent, honest dealings with all stakeholders, building trust through consistent and ethical business practices."
              bgType="gradient"
            />
            <Card
              icon={Rocket}
              title="Innovation"
              description="Leveraging cutting-edge technology to revolutionize traditional African trade and commerce."
              bgType="gradient"
            />
            <Card
              icon={Globe}
              title="Community"
              description="Empowering local communities and fostering inclusive growth."
              bgType="gradient"
            />
            <Card
              icon={Star}
              title="Excellence"
              description="Commitment to the highest quality products and global standards."
              bgType="gradient"
            />
            <Card
              icon={Users}
              title="Collaboration"
              description="Building strong partnerships to achieve shared goals."
              bgType="gradient"
            />
            <Card
              icon={Heart}
              title="Passion"
              description="Driven by love for Africa and showcasing its beauty to the world."
              bgType="gradient"
            />
          </div>
        </section>
      </div>
    </section>
  )
}
export default OurFoundation