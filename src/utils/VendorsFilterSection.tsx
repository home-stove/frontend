import {
  CityFilterCombobox,
  SpecialityFilterCombobox,
} from "@/components/ui/combobox";
import { Slider } from "@/components/ui/slider";

type Props = {};
const vendors = [
  {
    id: 1,
    name: "Amara's Creations",
    profileImage: "https://example.com/amara.jpg",
    rating: 4.9,
    totalReviews: 75,
    location: "Downtown, Cityville",
    specialties: ["Custom Cakes", "Cupcakes"],
    distance: "2 miles",
    isOnline: true,
    experience: "5 years",
    jobsCompleted: 20,
    bidsWon: 15,
    profession: "Custom Cake Designer",
    bio: "Passionate home baker specializing in custom cakes for special occasions. With over 5 years of experience, I have crafted cakes for weddings, birthdays, and other celebrations. I focus on creating memorable and delicious treats tailored to your event.",
  },
  {
    id: 2,
    name: "Baking Bliss by Maria",
    profileImage: "https://example.com/maria.jpg",
    rating: 4.7,
    totalReviews: 60,
    location: "Eastside, Cityville",
    specialties: ["Cookies", "Brownies"],
    distance: "4 miles",
    isOnline: false,
    experience: "3 years",
    jobsCompleted: 12,
    bidsWon: 8,
    profession: "Cookie & Brownie Baker",
    bio: "Home baker who loves crafting delicious cookies and brownies using family recipes. I put a lot of love and care into each batch to ensure that every bite is as delightful as the last. My goal is to bring a little bit of bliss to every occasion.",
  },
  {
    id: 3,
    name: "Cakes by Hannah",
    profileImage: "https://example.com/hannah.jpg",
    rating: 5.0,
    totalReviews: 100,
    location: "Westside, Cityville",
    specialties: ["Wedding Cakes", "Pastries"],
    distance: "5 miles",
    isOnline: true,
    experience: "7 years",
    jobsCompleted: 30,
    bidsWon: 25,
    profession: "Wedding Cake Specialist",
    bio: "Professional home baker focusing on elegant wedding cakes and delicate pastries. With 7 years of experience, I strive to create visually stunning and delicious cakes and pastries that are perfect for your special events. Each creation is made with precision and care to exceed your expectations.",
  },
  {
    id: 4,
    name: "Talia's Treats",
    profileImage: "https://example.com/talia.jpg",
    rating: 4.8,
    totalReviews: 90,
    location: "Southside, Cityville",
    specialties: ["Cupcakes", "Cake Pops"],
    distance: "3 miles",
    isOnline: false,
    experience: "4 years",
    jobsCompleted: 18,
    bidsWon: 12,
    profession: "Treats Creator",
    bio: "Home-based baker who loves adding a creative twist to classic treats. I specialize in crafting fun and flavorful cupcakes and cake pops that not only taste amazing but also look fantastic. My aim is to bring joy and creativity to your celebrations through my treats.",
  },
  {
    id: 5,
    name: "Sarah's Baking Studio",
    profileImage: "https://example.com/sarah.jpg",
    rating: 4.6,
    totalReviews: 50,
    location: "Northside, Cityville",
    specialties: ["Artisan Bread", "Muffins"],
    distance: "6 miles",
    isOnline: true,
    experience: "6 years",
    jobsCompleted: 22,
    bidsWon: 16,
    profession: "Bread & Muffin Baker",
    bio: "Experienced baker focused on crafting artisanal breads and delightful muffins. With a passion for traditional baking techniques and high-quality ingredients, I create breads and muffins that are rich in flavor and texture. Whether you’re looking for a hearty loaf or a tasty muffin, I’ve got you covered.",
  },
];
function VendorsFilterSection({}: Props) {
  return (
    <div className="flex flex-col gap-10">
      {/* Search Field */}
      <div className="mb-6 mt-2">
        <h1 className="text-lg font-semibold pb-4">Keywords</h1>
        <input
          type="text"
          className="bg-[#a2a2a2] bg-opacity-5 h-10 text-[#797979] placeholder:text-[#797979] placeholder:text-sm px-3 w-full rounded-lg"
          placeholder="e.g. Amara's Creations"
        />
      </div>
      {/* Speciality */}
      <div>
        <h1 className="text-lg font-semibold pb-4">Speciality</h1>
        <SpecialityFilterCombobox />
      </div>
      {/* City Combobox */}
      <div>
        <h1 className="text-lg font-semibold pb-4">City</h1>
        <CityFilterCombobox />
      </div>
      {/* Distance */}
      <div>
        <h1 className="text-lg font-semibold pb-4">Distance</h1>
        <Slider />
      </div>
      {/* Apply Button */}
      <div>
        <button className="w-full h-14 bg-[#5bbb7b] flex justify-center items-center gap-2 px-5 py-3 rounded-lg">
          <span className="text-white text-sm font-semibold">Find Listings</span>
          <svg
            className="translate-y-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="white"
              d="M198 64v104a6 6 0 0 1-12 0V78.48L68.24 196.24a6 6 0 0 1-8.48-8.48L177.52 70H88a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default VendorsFilterSection;
