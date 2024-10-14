import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import BidForm from "@/utils/BidForm";

const jobDetails = {
  jobTitle: "Custom Wedding Cake for 50 Guests",
  description: `
    We are looking for a custom wedding cake for a beach-themed wedding. The cake should have three tiers with floral decorations matching the wedding colors. The design should be elegant yet simple, and we are looking for a vegan option for some of the guests.\n
    
    The cake will be served during a beachfront reception, and we would like it to reflect the coastal vibe with subtle seashell or floral designs. We prefer buttercream over fondant and would like to have a lemon and raspberry filling.\n
    
    We need the cake to be delivered to our venue on the wedding day, fresh and ready for display. Timeliness and attention to detail are crucial for this project.
  `,
  category: "Wedding Cakes",
  quantity: 50,
  deliveryDate: "24th November 2024",
  deliveryLocation: {
    street: "123 Beachside Drive",
    city: "Santa Monica",
    state: "CA",
    zip: "90401",
  },
  budgetRange: {
    min: 200,
    max: 400,
  },
  contactEmail: "customer@example.com",
  referenceImages: [
    {
      url: "https://storagehomestovedev.blob.core.windows.net/web/demoPortfolioPic01.jpg?sp=r&st=2024-09-23T13:27:25Z&se=2025-09-23T21:27:25Z&spr=https&sv=2022-11-02&sr=b&sig=ix4y1HBMoyVzjXrlDktAl75aaaJNBhYC2hql0Itdo2s%3D",
      alt: "Reference Image 1",
    },
    {
      url: "https://storagehomestovedev.blob.core.windows.net/web/demoPortfolioPic02.jpg?sp=r&st=2024-09-23T13:29:01Z&se=2025-09-23T21:29:01Z&spr=https&sv=2022-11-02&sr=b&sig=lcvx6zG2KnUvdmUR3aZfaWdZkCvHB3va0cGD%2FVm7Q2E%3D",
      alt: "Reference Image 2",
    },
    {
      url: "https://storagehomestovedev.blob.core.windows.net/web/demoPortfolioPic03.jpg?sp=r&st=2024-09-23T13:29:24Z&se=2025-09-23T21:29:24Z&spr=https&sv=2022-11-02&sr=b&sig=O4QCGUfLhrjmrq2sd6bl%2FmFhzS2artaK6Mp2rJICgFE%3D",
      alt: "Reference Image 3",
    },
  ],
  allergyPreferences: "No nuts, please.",
  additionalAttachments: [
    {
      name: "Design_Sketch.pdf",
      url: "https://example.com/files/design_sketch.pdf",
    },
  ],
  specialNotes:
    "All guests are vegan, so please ensure all ingredients are plant-based.",
  viewedBy: 94,
  postedOn: "21st November 2024",
};

type Props = {};

function JobDetails({}: Props) {
  function calculateAccountAge(joiningDate: string | Date) {
    const now: Date = new Date();
    const joinDate: Date = new Date(joiningDate);
    const diffInMs: number = now.getTime() - joinDate.getTime();
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
    return diffInYears === 0 ? "Less than a year" : `${diffInYears} years`;
  }

  const paragraphs: string[] = jobDetails.description.split("\n\n");

  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="relative font-montserrat lg:pt-20 xl:flex">
        {/* The route for this page */}
        <div className="px-4 md:px-10 py-5">
          <p className="text-sm text-[#0c0c0c]">
            Home / Vendors
            <span className="text-[#a2a2a2]"> / {jobDetails.jobTitle}</span>
          </p>
        </div>
        {/* The Hero Section */}
        <div
          className="px-4 xxs:px-7 md:px-10 xl:px-[4.5rem] 5xl:px-28 py-7 relative md:h-56 xl:h-64 xl:mx-10 5xl:ml-24 xl:rounded-lg md:flex md:items-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(254,235,229,0.95) 0%, rgba(254,235,221,0.98) 40%, rgba(251,226,195,1) 100%)",
          }}
        >
          {/* The Baker Details */}
          <div>
            <div className="pb-9">
              <h1 className="font-semibold text-xl mb-0.5">
                {jobDetails.jobTitle}
              </h1>
              <p className="text-sm">{jobDetails.category}</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center col-span-2 gap-x-2">
                <img
                  className="h-5 w-5"
                  src="https://storagehomestovedev.blob.core.windows.net/web/pin%20(2).png?sp=r&st=2024-09-20T15:19:45Z&se=2025-09-20T23:19:45Z&spr=https&sv=2022-11-02&sr=b&sig=oNWzdfb8HPWnJT1YvWtqqUaFg%2Fzd0WLWwPODJMgP54Y%3D"
                  alt="location pin"
                />
                <p className="text-sm">
                  {jobDetails.deliveryLocation.city},{" "}
                  {jobDetails.deliveryLocation.state}
                </p>
              </div>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="#0c0c0c"
                      fillRule="evenodd"
                      d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5M10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3zM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zm5 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M9.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M9 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M3 11.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="text-sm">{jobDetails.postedOn}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <img
                    className="h-5 w-5"
                    src="https://storagehomestovedev.blob.core.windows.net/web/website.png?sp=r&st=2024-10-14T13:23:04Z&se=2025-10-14T21:23:04Z&spr=https&sv=2022-11-02&sr=b&sig=okakPiammKm8OcN5zOMj7eqDXMhuwGlEmaq1a4kHykQ%3D"
                    alt=""
                  />
                  <p className="text-sm">{jobDetails.viewedBy} Views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* The Icons Section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-y-4 md:gap-6 gap-x-1 my-9 px-4 xxs:px-7 lg:px-10 5xl:px-24">
          <div className="flex gap-x-2 items-center">
            <img
              className="h-8 w-8"
              src="https://storagehomestovedev.blob.core.windows.net/web/dollar.png?sp=r&st=2024-10-14T17:29:52Z&se=2025-10-15T01:29:52Z&spr=https&sv=2022-11-02&sr=b&sig=DMxGiS3IINiWYTSPqw7hEqb54X9GkXVqU8Q3knAwpM4%3D"
              alt="location pin"
            />
            <div>
              <h3 className="text-xs ">Bid Range</h3>
              <p className="text-xs ">
                ${jobDetails.budgetRange.min} - ${jobDetails.budgetRange.max}
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0c0c0c"
                d="M9 8.25c-.19 0-.38-.07-.53-.22L6.5 6.06L4.53 8.03c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l2.5-2.5c.29-.29.77-.29 1.06 0l2.5 2.5c.29.29.29.77 0 1.06c-.15.15-.34.22-.53.22"
              ></path>
              <path
                fill="#0c0c0c"
                d="M6.5 19.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.34.75-.75.75M20 8.25h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m-4 6h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m-2 3h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m4-6h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
              ></path>
            </svg>
            <div>
              <h3 className="text-xs ">Quantity / Serving</h3>
              <p className="text-xs ">{jobDetails.quantity}</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <img
              className="h-8 w-8"
              src="https://storagehomestovedev.blob.core.windows.net/web/pin%20(2).png?sp=r&st=2024-09-20T15:19:45Z&se=2025-09-20T23:19:45Z&spr=https&sv=2022-11-02&sr=b&sig=oNWzdfb8HPWnJT1YvWtqqUaFg%2Fzd0WLWwPODJMgP54Y%3D"
              alt="location pin"
            />
            <div>
              <h3 className="text-xs ">Delivery Address</h3>
              <p className="text-xs ">
                {jobDetails.deliveryLocation.street},{" "}
                {jobDetails.deliveryLocation.city},{" "}
                {jobDetails.deliveryLocation.state}
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 15 15"
            >
              <path
                fill="#0c0c0c"
                fillRule="evenodd"
                d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5M10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3zM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zm5 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M9.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M9 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M3 11.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <h3 className="text-xs ">Delivery Date</h3>
              <p className="text-xs ">{jobDetails.deliveryDate}</p>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="px-4 xxs:px-7 my-9 lg:px-10 5xl:px-24">
          <h2 className="text-xl text-[#0c0c0c] font-semibold">
            About the Baking Job
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm text-[#6b7177] mt-2 leading-7">
              {paragraph}
            </p>
          ))}
          <div className="my-9 border-b w-full"></div>
        </div>
        {/* Portfolio Section */}
        <div className="px-4 xxs:px-7 my-9 lg:px-10 5xl:px-24">
          <h2 className="text-xl text-[#0c0c0c] font-semibold pb-5">
            Reference Images
          </h2>
          <div className="flex flex-col items-center gap-y-11  md:grid md:grid-cols-3 md:gap-x-6">
            <div>
              <img
                className="h-52 xs:h-56 w-72 xs:w-[23rem] xxxxs:w-80 rounded-lg"
                src={jobDetails.referenceImages[0].url}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-52 xs:h-56 w-72 xs:w-[23rem] xxxxs:w-80 rounded-lg"
                src={jobDetails.referenceImages[1].url}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-52 xs:h-56 w-72 xs:w-[23rem] xxxxs:w-80 rounded-lg"
                src={jobDetails.referenceImages[2].url}
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
        {/* Attachmets Section */}
        <div className="px-4 xxs:px-7 my-9 lg:px-10 5xl:px-24">
          <h2 className="text-xl text-[#0c0c0c] font-semibold pb-5">
            Attachments
          </h2>
          <div className="flex items-center h-20 w-52 bg-[#5bbb7b] bg-opacity-15 rounded-lg p-4">
            <p className="text-sm">
              {jobDetails.additionalAttachments[0].name}
            </p>
            <svg
              className="opacity-35"
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#26ae61"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.478 3H7.25A2.25 2.25 0 0 0 5 5.25v13.5A2.25 2.25 0 0 0 7.25 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.478 3c1.243 0 2.272 1.007 2.272 2.25V7.5A2.25 2.25 0 0 0 14 9.75h2.25A2.25 2.25 0 0 1 18.5 12M9.478 3c3.69 0 9.022 5.36 9.022 9M9 16.5h6m-6-3h4"
              ></path>
            </svg>
          </div>
          <div className="my-9 border-b w-full"></div>
        </div>
        <div className="px-4 xxs:px-7 my-9 lg:px-10 5xl:px-24">
          <BidForm min={jobDetails.budgetRange.min} max={jobDetails.budgetRange.max} />
          <div className="my-9 border-b w-full"></div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default JobDetails;
