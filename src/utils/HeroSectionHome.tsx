import ChangingHeadline from "./ChangingHeadline";
import SearchFormHome from "./SearchFormHome";
type Props = {};

// Hero Section Home
function HeroSectionHome({}: Props) {
  return (
    <section
      className="relative bg-center bg-cover w-full h-[29rem]"
      style={{
        backgroundImage: `url(${"https://storagehomestovedev.blob.core.windows.net/web/landing-hero.jpg?sp=r&st=2024-08-20T12:36:02Z&se=2025-08-20T20:36:02Z&spr=https&sv=2022-11-02&sr=b&sig=XDD8Y%2BnmVM6969J%2BrxDmijtgdQ5q3KBeXGA0lfJYb3k%3D"})`,
      }}
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
    </section>
  );
}

export default HeroSectionHome;
