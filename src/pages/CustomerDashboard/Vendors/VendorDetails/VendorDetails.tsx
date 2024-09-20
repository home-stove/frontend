import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const bakerProfile = {
  id: 1,
  name: "Sarah Johnson",
  profession: "Custom Cake Designer & Baker",
  avatar: "https://example.com/avatar.jpg", // URL to profile picture
  rating: 4.8, // Out of 5
  numberOfReviews: 125, // Total number of reviews
  location: "Los Angeles, CA",
  contact: {
    email: "sarah.johnson@example.com",
    phone: "+1 234 567 890",
  },
  joiningDate: "2019-05-15", // Date when the vendor created the account (YYYY-MM-DD)
  jobsCompleted: 85, // Total number of jobs completed
  ongoingJobs: 3, // Number of jobs currently in progress
  socialProfiles: {
    facebook: "https://facebook.com/sarahsCakes",
    instagram: "https://instagram.com/sarahsCakes",
    threads: "https://threads.net/sarahsCakes",
    linkedin: "https://linkedin.com/in/sarah-johnson-baker",
  },
  specialities: [
    "Wedding Cakes",
    "Vegan Desserts",
    "Gluten-Free Bakes",
    "Custom Birthday Cakes",
  ],
  about: `
    I have been baking professionally for over 10 years, specializing in custom-made cakes and baked goods. My journey started in a small kitchen, driven by a passion for creating delicious and visually stunning cakes. Today, I run a full-time baking business that serves a variety of customers across Los Angeles, from families celebrating birthdays to couples tying the knot.
    
    My expertise ranges from crafting elaborate multi-tiered wedding cakes to offering vegan and gluten-free alternatives for those with dietary restrictions. I love working closely with my clients to bring their visions to life, ensuring that every detail is perfect, from flavor to design.
    
    Over the years, I’ve built a reputation for my attention to detail, creativity, and customer satisfaction. My portfolio includes everything from whimsical children’s cakes to elegant, classic designs for formal occasions. I am particularly known for my floral decorations and themed cakes that showcase a high level of skill and artistry.
    
    I’m also passionate about staying current with trends in the baking world, attending workshops and learning new techniques to keep my offerings fresh and exciting. If you’re looking for a baker who can transform your ideas into reality while ensuring a smooth and professional experience, I’m the one for the job.
    
    When I’m not in the kitchen, I enjoy teaching baking classes, exploring new ingredients, and spending time with my family. I look forward to working with you on your next big event!`,
  portfolio: [
    {
      title: "Wedding Cake - Floral Design",
      image: "https://example.com/portfolio/wedding_cake.jpg",
      description:
        "A 3-tier wedding cake with intricate floral designs made for a summer wedding. Vegan and gluten-free options available.",
    },
    {
      title: "Custom Birthday Cake - Superhero Theme",
      image: "https://example.com/portfolio/birthday_cake.jpg",
      description:
        "A custom superhero-themed birthday cake for a 10-year-old, complete with figurines and edible decorations.",
    },
    {
      title: "Pastry Assortment - Vegan Options",
      image: "https://example.com/portfolio/pastries.jpg",
      description:
        "An assortment of vegan pastries for a corporate event, including croissants, tarts, and muffins.",
    },
  ],
  reviews: [
    {
      reviewer: "John Doe",
      rating: 5,
      review:
        "Sarah did an amazing job with our wedding cake! Everyone loved it, and she was very accommodating with our requests.",
      date: "2024-08-12",
    },
    {
      reviewer: "Emily Smith",
      rating: 4.5,
      review:
        "Great experience! The vegan cake she made for my birthday was delicious and beautifully crafted.",
      date: "2024-07-22",
    },
  ],
  availability: {
    nextAvailableDate: "2024-09-25", // The next date the baker is available for new jobs
  },
  stats: {
    responseRate: "Typically responds within 2 hours", // Response rate to inquiries
    averageDeliveryTime: "5 days", // Average time to complete a job
  },
};

type Props = {};

function VendorDetails({}: Props) {
  // Helper function to calculate the account age
  function calculateAccountAge(joiningDate: string | Date) {
    const now: Date = new Date();
    const joinDate: Date = new Date(joiningDate);
    const diffInMs: number = now.getTime() - joinDate.getTime();
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
    return diffInYears === 0 ? "Less than a year" : `${diffInYears} years`;
  }
  
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="relative font-montserrat">
        {/* The route for this page */}
        <div className="px-4 md:px-10 py-5">
          <p className="text-sm text-[#0c0c0c]">
            Home / Vendors
            <span className="text-[#a2a2a2]"> / {bakerProfile.name}</span>
          </p>
        </div>
        {/* The Hero Section */}
        <div
          className="px-4 md:px-10 xl:px-[4.5rem] 5xl:px-28 md:pr-96 py-7 relative xl:h-80 xl:mx-10 5xl:mx-24 xl:rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, rgba(254,235,229,0.95) 0%, rgba(254,235,221,0.98) 40%, rgba(251,226,195,1) 100%)",
          }}
        >
          {/* The Baker Details */}
          <div className="text-[#0c0c0c]">
            <Avatar className="w-20 h-20 xxxs:h-24 xxxs:w-24 mb-3">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <h2 className="font-semibold text-xl mb-0.5">
              {bakerProfile.name}
            </h2>
            <h3 className="text-sm mb-7">{bakerProfile.profession}</h3>

            <div className="grid grid-cols-2 grid-rows-2 gap-y-3 gap-x-2">
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
                <p className="font-semibold text-sm">
                  &nbsp;{bakerProfile.rating}
                </p>
                <p className="text-[#797979] text-sm">
                  &nbsp;({bakerProfile.numberOfReviews} Reviews)
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img
                  className="h-5 w-5"
                  src="https://storagehomestovedev.blob.core.windows.net/web/pin%20(2).png?sp=r&st=2024-09-20T15:19:45Z&se=2025-09-20T23:19:45Z&spr=https&sv=2022-11-02&sr=b&sig=oNWzdfb8HPWnJT1YvWtqqUaFg%2Fzd0WLWwPODJMgP54Y%3D"
                  alt="location pin"
                />
                <p className="text-[#797979] text-sm">
                  {bakerProfile.location}
                </p>
              </div>
              <div className="flex items-center gap-x-2 col-span-2">
                <img
                  className="h-5 w-5"
                  src="https://storagehomestovedev.blob.core.windows.net/web/calendar.png?sp=r&st=2024-09-20T15:56:21Z&se=2025-09-20T23:56:21Z&spr=https&sv=2022-11-02&sr=b&sig=RS6laxNyjjG%2FEA1nGzZfRWJihIdSariXbwOyKVNoizE%3D"
                  alt="location pin"
                />
                <p className="text-[#797979] text-sm">
                  Joined {calculateAccountAge(bakerProfile.joiningDate)} ago
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* The Icons Section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-1 my-9 px-4">
          <div className="flex gap-x-2 items-center">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="#0c0c0c"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7"></path>
                <path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z"></path>
              </g>
            </svg>
            <div>
              <h3 className="text-xs ">Jobs Completed</h3>
              <p className="text-xs ">{bakerProfile.jobsCompleted}</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 32 32"
            >
              <path
                fill="#0c0c0c"
                d="M10.28 5.28L7 8.563l-1.28-1.28L4.28 8.72l2 2l.72.686l.72-.687l4-4zM15 7v2h13V7zm-4.72 6.28L7 16.564L5.72 15.28l-1.44 1.44l2 2l.72.686l.72-.687l4-4l-1.44-1.44zM15 15v2h13v-2zm-4.72 6.28L7 24.563l-1.28-1.28l-1.44 1.437l2 2l.72.686l.72-.687l4-4l-1.44-1.44zM15 23v2h13v-2z"
              ></path>
            </svg>
            <div>
              <h3 className="text-xs ">Onging Jobs</h3>
              <p className="text-xs ">{bakerProfile.ongoingJobs}</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#0c0c0c"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                color="#0c0c0c"
              >
                <path d="M19.5 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path>
                <path d="M2 12v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201m10 0h-5m5.5-2V9c0-1.414 0-2.121-.44-2.56C14.122 6 13.415 6 12 6h-1m4.5 2.5h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V17c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M7.85 7.85l-1.35-.9V4.7M2 6.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0"></path>
              </g>
            </svg>
            <div>
              <h3 className="text-xs ">Average Delivery Time</h3>
              <p className="text-xs ">
                {bakerProfile.stats.averageDeliveryTime}
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="#0c0c0c"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.002 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-2.75.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m5.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path>
                <path d="M6.998.56a6.44 6.44 0 0 0-5.36 10.007L.558 13.44l3.617-.654A6.44 6.44 0 1 0 6.998.56"></path>
              </g>
            </svg>
            <div>
              <p className="text-xs ">{bakerProfile.stats.responseRate}</p>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="px-4 my-9">
          <h2 className="text-2xl font-bold text-center">About {bakerProfile.name}</h2>
          <p className="text-sm text-[#6b7177] mt-2 leading-7">
            {bakerProfile.about}
          </p>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default VendorDetails;
