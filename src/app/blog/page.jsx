
import HeroSection from "@/Components/common/HeroSection";
import BlogCategories from "@/Components/blogs/BlogCategories";
import RecentPostsSection from "@/Components/blogs/RecentPostsSection";
import TrendingTagsSection from "@/Components/blogs/TrendingTagsSection";

import { Newspaper } from "lucide-react";



function Blog() {

  return (
    <>
      <HeroSection
        badgeText="EFG Afro Market Blog"
        // badgeIcon={Newspaper}
        badgeIcon="newspaper"

        title="Insights from"
        highlight="Africa’s Trade Revolution"
        description="Stay updated with the latest trends, market insights, success stories, and developments in African trade and agriculture"
        showImages={false}
        showStats={true}
        stats={[
          { value: 1, label: "Articles" },
          { value: 8, label: "Categories" },
          { value: 110, label: "Readers" },
        ]}
      />

      <BlogCategories />
      <RecentPostsSection />
      <TrendingTagsSection />



    </>

  )
}





export default Blog;
