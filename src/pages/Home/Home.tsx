import Header from "@/utils/Header";
import HeroSectionHome from "@/utils/HeroSectionHome";
import JobsByCategorySectionHome from "@/utils/JobsByCategorySectionHome";

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
    </div>
  );
}

export default Home;
