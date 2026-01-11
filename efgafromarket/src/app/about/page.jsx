"use client";

import { HeroSection, ExploreProducts, OurFoundation, OurPurpose, OurStory, WhyChoose } from "@/Components/index.js";
import { Star } from "lucide-react";



function About() {
  return (
    <div className="w-full bg-white m-0 p-0">
      <HeroSection
        title="Connecting Africa's Rich Heritage"
        highlight="Global Opportunities"
        description="Discover our journey, mission, and vision as we bridge traditional African industries with modern digital commerce"
        badgeText="About EFG Afro Market"
        badgeIcon={Star}
        showStats={false}
      />

      <OurStory />
      <OurPurpose />
      <OurFoundation />
      <WhyChoose />
      <ExploreProducts />
    </div>
  );
}
export default About;
