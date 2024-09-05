import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

function VendorCards({}: Props) {
  return (
    <div className="text-[#0c0c0c]">
      {vendors.map((vendor) => (
        <div className="text-sm my-5 p-3 border border-[#e9e9e9]" key={vendor.id}>
          <div className="flex gap-x-3 items-center pb-5">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-base">{vendor.name}</h2>
              <h3 className="text-[#26ae61]">{vendor.profession}</h3>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="#e7b900"
                    d="M7.223.666a.3.3 0 0 1 .554 0L9.413 4.6a.3.3 0 0 0 .253.184l4.248.34a.3.3 0 0 1 .171.528L10.85 8.424a.3.3 0 0 0-.097.297l.99 4.145a.3.3 0 0 1-.45.326L7.657 10.97a.3.3 0 0 0-.312 0l-3.637 2.222a.3.3 0 0 1-.448-.326l.989-4.145a.3.3 0 0 0-.097-.297L.915 5.652a.3.3 0 0 1 .171-.527l4.248-.34a.3.3 0 0 0 .253-.185z"
                  ></path>
                </svg>
                <p className="font-semibold">&nbsp;{vendor.rating}</p>
                <p className="text-[#a2a2a2]">&nbsp;({vendor.totalReviews} Reviews)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <img className="h-5 w-5" src="https://storagehomestovedev.blob.core.windows.net/web/pin.png?sp=r&st=2024-09-05T22:48:39Z&se=2025-09-06T06:48:39Z&spr=https&sv=2022-11-02&sr=b&sig=F47ZhNp00LfTDVXN64VMcxB4E4dCgwDankK3AN8GOSM%3D" alt="location pin" />
              <p className="text-[#a2a2a2]">{vendor.location}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img className="h-5 w-5" src="https://storagehomestovedev.blob.core.windows.net/web/route.png?sp=r&st=2024-09-05T23:00:53Z&se=2025-09-06T07:00:53Z&spr=https&sv=2022-11-02&sr=b&sig=oZ1Ns%2FzdpiEBlKCf3mBWBU4pD%2Fc%2F8rbbdJZXTehMhhA%3D" alt="route" />
              <p className="text-[#a2a2a2]">{vendor.distance}</p>
            </div>
          </div>
          <div>
            <p className="text-[#a2a2a2]">{vendor.bio.substring(0, 200)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VendorCards;
