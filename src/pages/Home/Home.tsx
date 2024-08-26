import Header from "@/utils/Header";
import HeroSectionHome from "@/utils/HeroSectionHome";
import HowItWorksVendor from "@/utils/HowItWorksVendor";
import JobsByCategorySectionHome from "@/utils/JobsByCategorySectionHome";
import TestimonialsVendor from "@/utils/TestimonialsVendor";

function Home() {
  return (
    <div className="relative">
      <div>
        <Header />
      </div>
      {/* Hero Section */}
      <HeroSectionHome />
      {/* Jobs Category Section */}
      <JobsByCategorySectionHome />
      {/* How to Use */}
      <HowItWorksVendor />
      {/* Testimonials */}
      <TestimonialsVendor />
    </div>
  );
}

export default Home;
