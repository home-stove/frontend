import CallToAction from "@/utils/CallToAction";
import Footer from "@/utils/Footer";
import Header from "@/utils/Header";
import HeroSectionHome from "@/utils/HeroSectionHome";
import HowItWorksVendor from "@/utils/HowItWorksVendor";
import JobsByCategorySectionHome from "@/utils/JobsByCategorySectionHome";
import SlidingMenu from "@/utils/SlidingMenu";
import TestimonialsVendor from "@/utils/TestimonialsVendor";

function Home() {
  return (
    <div className="relative">
      <SlidingMenu />
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
      {/* Call to Action */}
      <CallToAction />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
