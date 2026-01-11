// import HeroSection from "../components/common/HeroSection.jsx";
// import NewsLetter from "../components/home/NewsLetter.jsx";
// import Footer from "../components/common/Footer.jsx";
// // import { ExcellenceSection, ExploreSection, NewsletterSection, ProductSection, WhyChooseUs } from "../components/index.js"
// import {
//   HeroSection,
//   ExcellenceSection,
//   ExploreSection,
//   NewsletterSection,
//   ProductSection,
//   WhyChooseUs,
// } from "@/Components";

// import NewsLetter from "@/Components/home/NewsLetter";
import {
  HeroSection,
  ExcellenceSection,
  ExploreSection,
  NewsletterSection,
  ProductSection,
  WhyChooseUs,
} from "@/Components";

import NewsLetter from "@/Components/home/NewsLetter";


import { ShieldCheck } from "lucide-react";

function Home() {
  return (
    <div>
      {/*  HERO SECTION AT TOP */}
      <HeroSection
        title="Your Gateway to"
        highlight="African Excellence"
        description="Connecting global markets with premium African products."
        badgeText="100% Authentic African Products"
        badgeIcon="shield"  // ✅ related authentic icon
        btnPrimary="Explore Products"
        btnSecondary="Learn More"
        showImages={true}
        showStats={true}
        images={{
          left: "/images/bag.png",
          right: "/images/mango.png",
          bottomLeft: "/images/gold.png",
          bottomRight: "/images/coffee.png",
        }}
      />


      <ExploreSection />
      <ProductSection />
      <WhyChooseUs />
      <ExcellenceSection />
      <NewsLetter />
    </div>
  );
}

export default Home;
