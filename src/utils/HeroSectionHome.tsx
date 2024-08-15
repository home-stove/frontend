import ChangingHeadline from "./ChangingHeadline";
import SearchFormHome from "./SearchFormHome";
type Props = {};

// Hero Section Home
function HeroSectionHome({}: Props) {
  return (
    <div
      className="relative bg-center bg-cover w-full h-[29rem]"
      style={{ backgroundImage: `url(${"/src/assets/landing-hero.jpg"})` }}
    >
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>
      <div className="text-white font-montserrat px-4 flex flex-col py-9 h-full">
        {/* Heading Text */}
        <ChangingHeadline />
        {/* Sub Heading Text 1 */}
        <div className="mb-4">
          <p className="text-sm leading-relaxed opacity-[.99]">
            Tailor-made treats that make every celebration memorable.
          </p>
        </div>
        {/* Search Form */}
        <SearchFormHome />
        {/* Sub Heading Text 2 */}
        <div>
          <p className="text-sm leading-relaxed opacity-[.99]">
            Popular Searches: Cake Decorator, Pastry Chef, Chocolatier, Bread
            Baker
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionHome;
