import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ReviewCards from "@/utils/ReviewCards";
import ReviewForm from "@/utils/ReviewForm";

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
  about: `I have been baking professionally for over 10 years, specializing in custom-made cakes and baked goods. From birthdays to weddings, I work with clients across Los Angeles to deliver delicious and visually stunning creations that fit their unique needs.\n\n

  My expertise ranges from multi-tiered wedding cakes to vegan and gluten-free options. Known for my attention to detail and creativity, I bring client visions to life with everything from floral decorations to themed designs.\n\n

  Passionate about staying current with baking trends, I regularly attend workshops to refine my skills. When I'm not baking, I enjoy teaching, experimenting with new ingredients, and spending time with my family.`,
  portfolio: [
    {
      title: "Wedding Cake - Floral Design",
      image:
        "https://storagehomestovedev.blob.core.windows.net/web/demoPortfolioPic01.jpg?sp=r&st=2024-09-23T13:27:25Z&se=2025-09-23T21:27:25Z&spr=https&sv=2022-11-02&sr=b&sig=ix4y1HBMoyVzjXrlDktAl75aaaJNBhYC2hql0Itdo2s%3D",
      description:
        "A 3-tier wedding cake with intricate floral designs made for a summer wedding. Vegan and gluten-free options available.",
    },
    {
      title: "Custom Birthday Cake - Superhero Theme",
      image:
        "https://storagehomestovedev.blob.core.windows.net/web/demoPortfolioPic02.jpg?sp=r&st=2024-09-23T13:29:01Z&se=2025-09-23T21:29:01Z&spr=https&sv=2022-11-02&sr=b&sig=lcvx6zG2KnUvdmUR3aZfaWdZkCvHB3va0cGD%2FVm7Q2E%3D",
      description:
        "A custom superhero-themed birthday cake for a 10-year-old, complete with figurines and edible decorations.",
    },
    {
      title: "Pastry Assortment - Vegan Options",
      image:
        "https://storagehomestovedev.blob.core.windows.net/web/demoPortfolioPic03.jpg?sp=r&st=2024-09-23T13:29:24Z&se=2025-09-23T21:29:24Z&spr=https&sv=2022-11-02&sr=b&sig=O4QCGUfLhrjmrq2sd6bl%2FmFhzS2artaK6Mp2rJICgFE%3D",
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

  const paragraphs: string[] = bakerProfile.about.split("\n\n");

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
          className="px-4 xxs:px-7 md:px-10 xl:px-[4.5rem] 5xl:px-28 md:pr-96 py-7 relative xl:h-80 xl:mx-10 5xl:mx-24 xl:rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, rgba(254,235,229,0.95) 0%, rgba(254,235,221,0.98) 40%, rgba(251,226,195,1) 100%)",
          }}
        >
          {/* The Baker Details */}
          <div className="text-[#0c0c0c]">
            <Avatar className="w-24 h-24 xxxs:h-24 xxxs:w-24 mb-3">
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
        <div className="grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-1 my-9 px-4 xxs:px-7">
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
        <div className="px-4 xxs:px-7 my-9">
          <h2 className="text-xl text-[#0c0c0c] font-semibold">
            About {bakerProfile.name}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm text-[#6b7177] mt-2 leading-7">
              {paragraph}
            </p>
          ))}
          <div className="my-9 border-b w-full"></div>
        </div>
        {/* Portfolio Section */}
        <div className="px-4 xxs:px-7 my-9">
          <h2 className="text-xl text-[#0c0c0c] font-semibold pb-5">
            {bakerProfile.name}'s Portfolio
          </h2>
          <div className="flex flex-col items-center gap-y-11">
            <div>
              <img
                className="h-52 xs:h-56 w-72 xs:w-[23rem] xxxxs:w-80 rounded-lg"
                src={bakerProfile.portfolio[0].image}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-52 xs:h-56 w-72 xs:w-[23rem] xxxxs:w-80 rounded-lg"
                src={bakerProfile.portfolio[1].image}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-52 xs:h-56 w-72 xs:w-[23rem] xxxxs:w-80 rounded-lg"
                src={bakerProfile.portfolio[2].image}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-52 xs:h-56 w-72 xs:w-[23rem] xxxxs:w-80 rounded-lg"
                src="https://storagehomestovedev.blob.core.windows.net/web/demoPortfolioPic04.jpg?sp=r&st=2024-09-23T13:29:44Z&se=2025-09-23T21:29:44Z&spr=https&sv=2022-11-02&sr=b&sig=el0GbdRyYfMktFWsqygCDiRopwj1RVnr9M1u4wb4p3U%3D"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-52 xs:h-56 w-72 xs:w-[23rem] xxxxs:w-80 rounded-lg"
                src="https://storagehomestovedev.blob.core.windows.net/web/demoPortfolioPic05.jpg?sp=r&st=2024-09-23T13:30:04Z&se=2025-09-23T21:30:04Z&spr=https&sv=2022-11-02&sr=b&sig=ohj7rBiDZlZOEAq%2FKBvTxT2RdYe0%2Fj%2BgLXUPDWPhTTA%3D"
                alt=""
              />
            </div>
          </div>
          <div className="my-9 border-b w-full"></div>
        </div>
        {/* Reviews Section */}
        <div className="px-4 xxs:px-7 my-9">
          <h2 className="text-xl text-[#0c0c0c] font-semibold pb-5">
            Recent Reviews
          </h2>
          <ReviewCards reviews={bakerProfile.reviews} />
          <ReviewForm />
          <div className="my-9 border-b w-full"></div>
        </div>
        {/* Contact & Socials Section */}
        <div className="px-4 xxs:px-7 my-9">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#797979"
                  d="M9.366 10.682a10.56 10.56 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296a11.4 11.4 0 0 0 4.583 1.364a1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995Q19.307 21 18.5 21C9.94 21 3 14.06 3 5.5q0-.807.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.4 11.4 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294zm-2.522-.657l1.9-1.357A13.4 13.4 0 0 1 7.647 5H5.01Q5 5.25 5 5.5C5 12.956 11.044 19 18.5 19q.25 0 .5-.01v-2.637a13.4 13.4 0 0 1-3.668-1.097l-1.357 1.9a12.5 12.5 0 0 1-1.588-.75l-.058-.033a12.56 12.56 0 0 1-4.702-4.702l-.033-.058a12.4 12.4 0 0 1-.75-1.588"
                ></path>
              </svg>
              <p className="text-[#6b7177]">{bakerProfile.contact.phone}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#797979"
                  d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"
                ></path>
              </svg>
              <p className="text-[#6b7177]">{bakerProfile.contact.email}</p>
            </div>
          </div>
          {/* Socials */}
          <div>
            <h2 className="text-xl text-[#222222] font-semibold pb-3 pt-5">
              Social Profiles
            </h2>
            <div className="flex gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#797979"
                  d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#797979"
                  d="M16.705 11.108c-.162-2.987-1.794-4.697-4.534-4.714c-1.652-.01-3.033.69-3.879 1.973L9.8 9.4c.634-.961 1.635-1.16 2.36-1.153c.903.006 1.583.268 2.024.78c.32.372.535.887.642 1.536q-1.202-.204-2.59-.125c-2.606.15-4.28 1.67-4.168 3.781c.057 1.071.59 1.993 1.502 2.595c.77.509 1.764.757 2.795.701c1.363-.075 2.432-.594 3.178-1.545c.566-.722.924-1.658 1.082-2.836c.65.392 1.13.907 1.397 1.527c.452 1.054.478 2.786-.935 4.198c-1.238 1.236-2.726 1.772-4.975 1.788c-2.495-.018-4.382-.819-5.608-2.378c-1.15-1.46-1.743-3.57-1.765-6.269c.022-2.7.616-4.809 1.765-6.27c1.226-1.559 3.113-2.359 5.608-2.377c2.513.019 4.432.822 5.706 2.39c.625.768 1.095 1.734 1.406 2.86l1.766-.47c-.377-1.387-.969-2.582-1.774-3.573c-1.633-2.01-4.033-3.039-7.11-3.06c-3.071.021-5.432 1.055-7.019 3.071c-1.411 1.795-2.14 4.306-2.164 7.436c.024 3.13.753 5.627 2.164 7.422c1.587 2.016 3.96 3.05 7.03 3.071c2.731-.019 4.655-.734 6.24-2.317c2.075-2.073 2.012-4.67 1.329-6.264c-.525-1.225-1.57-2.206-2.98-2.81m-4.438 4.557c-1.142.064-2.328-.448-2.387-1.546c-.043-.814.58-1.722 2.457-1.83a9.4 9.4 0 0 1 2.533.174c-.216 2.702-1.485 3.14-2.603 3.202"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#797979"
                  d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.599c0-.784.218-1.319 1.342-1.319h1.434V5.857a19 19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#797979"
                  d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714M7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z"
                ></path>
              </svg>
            </div>
          </div>
          {/* Skills Section */}
          <div>
            <h2 className="text-xl text-[#222222] font-semibold pb-3 pt-5">
              Specialities
            </h2>
            <div className="flex gap-4 max-w-full flex-wrap">
              {bakerProfile.specialities.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#ffede8] h-7 p-2 rounded-3xl flex items-center justify-center"
                >
                  <span className="text-xs p-3">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Contact Me */}
          <div className="mt-9">
            <button className="flex items-center justify-center w-full py-2 px-4 border-[#5bbb7b] border-2 rounded-lg">
              <span className="text-[#26ae61] text-md font-semibold">
                Contact Me
              </span>
              <svg
                className="translate-y-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="2em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#26ae61"
                  d="M198 64v104a6 6 0 0 1-12 0V78.48L68.24 196.24a6 6 0 0 1-8.48-8.48L177.52 70H88a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6"
                ></path>
              </svg>
            </button>
          </div>
          <div className="my-9 border-b w-full"></div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default VendorDetails;
