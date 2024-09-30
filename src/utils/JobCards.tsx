import { Link } from "react-router-dom";

type Props = {};

const jobs = [
  {
    id: 1,
    title: "Wedding Cake for 150 Guests",
    description:
      "Looking for a custom wedding cake with floral designs for a wedding. Must be able to deliver on-site.",
    location: "New York, NY",
    bids: 8,
    specialities: [
      "Wedding Cakes",
      "Custom Designs",
      "Fondant",
      "Tiered Cakes",
    ],
    postedOn: "2024-09-01", // date it was posted
    deadline: "2024-09-30", // deadline for job completion
    budget: {
      min: 300,
      max: 500,
    },
    minBid: 250, // minimum bid amount
    distance: 5, // in miles or kilometers
    posterName: "John Doe",
    isUrgent: true, // add urgency flag if needed
  },
  {
    id: 2,
    title: "50 Artisan Bread Loaves",
    description:
      "Need freshly baked artisan bread loaves for a local market event. Whole grain and gluten-free options preferred.",
    location: "Brooklyn, NY",
    bids: 5,
    specialities: ["Artisan Bread", "Whole Grain", "Gluten-Free"],
    postedOn: "2024-09-05",
    deadline: "2024-09-20",
    budget: {
      min: 100,
      max: 200,
    },
    minBid: 90,
    distance: 10,
    posterName: "Jane Smith",
  },
  {
    id: 3,
    title: "Custom Cupcakes for Baby Shower",
    description:
      "Looking for 75 cupcakes with baby shower-themed designs. Preferred flavors: vanilla, chocolate, and red velvet.",
    location: "Queens, NY",
    bids: 12,
    specialities: ["Cupcakes", "Custom Designs", "Fondant"],
    postedOn: "2024-09-10",
    deadline: "2024-09-22",
    budget: {
      min: 150,
      max: 300,
    },
    minBid: 120,
    distance: 7,
    posterName: "Emily Johnson",
  },
  {
    id: 4,
    title: "Brownies for Charity Bake Sale",
    description:
      "Looking for 100 brownies for a charity bake sale. Prefer classic chocolate brownies with optional add-ins like nuts.",
    location: "Manhattan, NY",
    bids: 4,
    specialities: ["Brownies", "Nut-Free Options", "Classic Bakes"],
    postedOn: "2024-09-03",
    deadline: "2024-09-15",
    budget: {
      min: 50,
      max: 100,
    },
    minBid: 40,
    distance: 3,
    posterName: "Mark Lee",
  },
  {
    id: 5,
    title: "Pastries for Office Party",
    description:
      "Looking for a variety of pastries (croissants, danishes, etc.) for an office party with 50 people.",
    location: "Staten Island, NY",
    bids: 9,
    specialities: ["Pastries", "Croissants", "Danishes", "Office Catering"],
    postedOn: "2024-09-07",
    deadline: "2024-09-18",
    budget: {
      min: 200,
      max: 400,
    },
    minBid: 180,
    distance: 15,
    posterName: "Samantha Green",
  },
];

function JobCards({}: Props) {
  function getDaysAgo(postedOn: string | Date): string {
    // Get current date
    const now: Date = new Date();

    // Parse the postedOn date, it could be either a string or Date
    const postedDate: Date =
      typeof postedOn === "string" ? new Date(postedOn) : postedOn;

    // Calculate the difference in milliseconds
    const diffInMs: number = now.getTime() - postedDate.getTime();

    // Convert milliseconds to days
    const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    // Return the number of days ago
    return diffInDays === 0 ? "Posted today" : `Posted ${diffInDays} days ago`;
  }

  function getDaysLeft(deadlineDate: string | Date): string {
    // Get current date
    const now: Date = new Date();

    // Parse the deadlineDate, it could be either a string or Date
    const deadline: Date =
      typeof deadlineDate === "string" ? new Date(deadlineDate) : deadlineDate;

    // Calculate the difference in milliseconds
    const diffInMs: number = deadline.getTime() - now.getTime();

    // Convert milliseconds to days
    const diffInDays: number = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    // Return the number of days left
    return diffInDays < 0
      ? "Deadline passed"
      : `Deadline in ${diffInDays} days`;
  }

  return (
    <div className="text-[#0c0c0c] my-9">
      {jobs.map((job) => (
        <div
          className="relative text-sm my-7 px-4 py-7 lg:p-8 border border-[#e9e9e9]"
          key={job.id}
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
          {/* Job Details */}
          <div className="">
            {/* Job Title */}
            <div className="pb-1">
              <h1 className="text-lg md:text-2xl font-semibold">{job.title}</h1>
            </div>
            {/* Posted by / when / bids */}
            <div className="flex gap-x-5 pb-7">
              <p className="text-[#26ae61] text-xs md:text-sm">
                {job.posterName}
              </p>
              <p className="text-[#26ae61] text-xs md:text-sm">
                {getDaysAgo(job.postedOn)}
              </p>
              <p className="text-[#26ae61] text-xs md:text-sm">
                {job.bids} Bids
              </p>
            </div>
            {/* Icons Container */}
            <div className="flex flex-col gap-y-2 pb-5 md:grid md:grid-rows-2 md:grid-cols-2">
              <div className="flex items-center gap-x-2">
                <img
                  className="h-5 w-5"
                  src="https://storagehomestovedev.blob.core.windows.net/web/pin%20(1).png?sp=r&st=2024-09-18T17:12:19Z&se=2025-09-19T01:12:19Z&spr=https&sv=2022-11-02&sr=b&sig=EmWpJMF7UMkaXJzeAgs6rY31WGPEgrJtEHV86a6K7xY%3D"
                  alt="location pin"
                />
                <p className="text-[#797979]">{job.location}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <img
                  className="h-5 w-5"
                  src="https://storagehomestovedev.blob.core.windows.net/web/routing.png?sp=r&st=2024-09-18T17:08:36Z&se=2025-09-19T01:08:36Z&spr=https&sv=2022-11-02&sr=b&sig=Kgwx2XHO5ow94CFQaktUDxeyxm%2Bh2%2FQHy%2BUrQfxa5Aw%3D"
                  alt="route"
                />
                <p className="text-[#797979]">{job.distance} miles</p>
              </div>

              <div className="flex items-center gap-x-2">
                <img
                  className="h-5 w-5"
                  src="https://storagehomestovedev.blob.core.windows.net/web/deadline%20(1).png?sp=r&st=2024-09-18T16:59:03Z&se=2025-09-19T00:59:03Z&spr=https&sv=2022-11-02&sr=b&sig=59PZb2JS9KP6OGYI9cm2QkZmEiKQztN%2BnvDXR9wZhEw%3D"
                  alt="sand flask"
                />
                <p className="text-[#797979]">{getDaysLeft(job.deadline)}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <img
                  className="h-5 w-5"
                  src="https://storagehomestovedev.blob.core.windows.net/web/money.png?sp=r&st=2024-09-18T17:22:36Z&se=2025-09-19T01:22:36Z&spr=https&sv=2022-11-02&sr=b&sig=%2BoRvPIXvmAt29tpoQHe0SylnNWEmH8zVp0Nu3api1zE%3D"
                  alt="cash"
                />
                <p className="text-[#797979]">${job.budget.min}</p>
                <p className="text-[#797979]">to</p>
                <p className="text-[#797979]">${job.budget.max}</p>
              </div>
            </div>
            {/* Description */}
            <div className="pb-5">
              <p className="text-[#797979] leading-7">{job.description}</p>
            </div>
            {/* Skills Pills */}
            <div className="flex gap-2 flex-wrap pb-5">
              {job.specialities.map((speciality) => (
                <div
                  key={job.id}
                  className="bg-[#ffede8] h-7 px-2 rounded-3xl flex items-center justify-center"
                >
                  <span className="text-xs">{speciality}</span>
                </div>
              ))}
            </div>
            {/* Bid Button */}
            <div>
              <Link
                to={`/baker-dashboard/explore-jobs/${job.id}`}
                className="transition-all w-36 h-11 bg-[#5bbb7b] bg-opacity-15 hover:bg-opacity-100 hover:text-white flex items-center justify-center text-[#26ae61] font-semibold rounded-lg"
              >
                Bid Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobCards;
