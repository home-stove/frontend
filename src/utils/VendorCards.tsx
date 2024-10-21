import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <div className="text-[#0c0c0c] my-9">
      {vendors.map((vendor, index) => (
         <motion.div 
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 0.99 }}
         transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
         viewport={{ once: true }}
         key={index}>
        <div
          className="relative text-sm my-7 px-4 py-7 lg:p-8 border border-[#e9e9e9]"
          key={index}
          style={{
            boxShadow:
              "0px 6px 15px 0px rgba(64.00000000000001, 79.00000000000006, 104.00000000000004, 0.09)",
          }}
        >
          {/* Favorite Heart */}
          <div
            className="group hover:bg-[#5bbb7b] absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              boxShadow:
                "0px 6px 15px 0px rgba(64.00000000000001, 79.00000000000006, 104.00000000000004, 0.09)",
            }}
          >
            <svg
              className="hover:text-white text-[#0c0c0c] group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2m-3.566 15.604a27 27 0 0 0 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4c-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.657 4 9c0 2.944 1.666 5.533 4.645 7.903c.745.593 1.54 1.146 2.421 1.7c.299.189.595.37.934.572c.339-.202.635-.383.934-.571"
              ></path>
            </svg>
          </div>
          {/* Vendor Details */}
          <div className="flex gap-x-3 xxxs:gap-x-7 items-center pb-7">
            <Avatar className="w-20 h-20 xxxs:h-24 xxxs:w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-y-1">
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
                <p className="text-[#797979]">
                  &nbsp;({vendor.totalReviews} Reviews)
                </p>
              </div>
            </div>
          </div>
          {/* Icons */}
          <div className="flex flex-col gap-y-2 pb-5">
            <div className="flex items-center gap-x-2">
              <img
                className="h-5 w-5"
                src="https://storagehomestovedev.blob.core.windows.net/web/pin%20(1).png?sp=r&st=2024-09-18T17:12:19Z&se=2025-09-19T01:12:19Z&spr=https&sv=2022-11-02&sr=b&sig=EmWpJMF7UMkaXJzeAgs6rY31WGPEgrJtEHV86a6K7xY%3D"
                alt="location pin"
              />
              <p className="text-[#797979]">{vendor.location}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img
                className="h-5 w-5"
                src="https://storagehomestovedev.blob.core.windows.net/web/routing.png?sp=r&st=2024-09-18T17:08:36Z&se=2025-09-19T01:08:36Z&spr=https&sv=2022-11-02&sr=b&sig=Kgwx2XHO5ow94CFQaktUDxeyxm%2Bh2%2FQHy%2BUrQfxa5Aw%3D"
                alt="route"
              />
              <p className="text-[#797979]">{vendor.distance}</p>
            </div>
          </div>
          {/* Bio */}
          <div className="pb-5">
            <p className="text-[#797979] leading-7">
              {vendor.bio.substring(0, 175)}. . .
            </p>
          </div>
          {/* Skills Pills */}
          <div className="flex gap-x-3 pb-5">
            {vendor.specialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-[#ffede8] h-7 px-2 rounded-3xl flex items-center justify-center"
              >
                <span className="text-xs">{specialty}</span>
              </div>
            ))}
          </div>
          {/* View Profile */}
          <div>
            <Link
              to={`/customer-dashboard/explore-vendors/${vendor.id}`}
              className="transition-all w-36 h-11 bg-[#5bbb7b] bg-opacity-15 hover:bg-opacity-100 hover:text-white flex items-center justify-center text-[#26ae61] font-semibold rounded-lg"
            >
              View Profile
            </Link>
          </div>
        </div>
        </motion.div>
      ))}
    </div>
  );
}

export default VendorCards;
