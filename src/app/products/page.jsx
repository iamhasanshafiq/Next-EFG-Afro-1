//import HeroSection from "../components/common/HeroSection.jsx";
//import { ExploreCategories, NewsLetter, OurProducts } from "../components/index.js";
import { HeroSection, ExploreCategories, NewsLetter, OurProducts } from "@/Components";

import { Leaf } from "lucide-react";



function Products() {
  return (
    <>
      <div>
        {/*  HERO SECTION AT TOP */}
        <HeroSection
          title="Discover Authentic African Products"
          highlight="& Resources"
          description="Connecting global markets with premium African products."
          badgeText="100% Authentic African Products"
          // badgeIcon={Leaf}
          badgeIcon="leaf"      // ya "shield" / "globe" / "truck"

          btnPrimary="Explore Products"
          btnSecondary="Learn More"
          showStats={true}
        />
        <OurProducts />
        <ExploreCategories />
        <NewsLetter />
      </div>
    </>
  )
}

export default Products