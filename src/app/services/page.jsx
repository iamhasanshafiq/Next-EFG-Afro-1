import { HowWeWork, OurExpertise, SpecializedSolution, HeroSection } from "@/Components/index.js";
import { Settings } from "lucide-react";


function Services() {
  return (
    <div>
      {/*  HERO SECTION AT TOP */}
      <HeroSection
        title="Our Professional"
        highlight="Services & Solutions"
        description="Empowering African businesses with cutting-edge technology, comprehensive support, and global market access. From marketplace solutions to supply chain management, we've got you covered."
        badgeText="Comprehensive Business Solutions"
        badgeIcon="Settings"
        useIcons={true}
        enableFloating={true}
        reverseGradient={true}
        reduceIconSpacing={true}
        images={{
          left: "1",
          right: "1",
          bottomLeft: "1",
          bottomRight: "1",
        }}
      />

      <OurExpertise />
      <SpecializedSolution />
      <HowWeWork />
    </div>
  );
}

export default Services;
