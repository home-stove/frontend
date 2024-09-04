type Props = {};

const jobsByCategorys = [
  {
    id: 1,
    heading: "Custom Cakes & Pastries",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/custom-cakes-and-pastries.jpg?sp=r&st=2024-08-22T15:05:09Z&se=2025-08-22T23:05:09Z&spr=https&sv=2022-11-02&sr=b&sig=1LflP%2FLl%2FOAwc5Wx8SWxcY6I4Jm6nckosIi8fdN1%2FHQ%3D",
    numberOfListings: 12,
  },
  {
    id: 2,
    heading: "Bread & Artisan Loaves",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/bread-and-artisan-loaves.jpg?sp=r&st=2024-08-22T15:05:58Z&se=2025-08-22T23:05:58Z&spr=https&sv=2022-11-02&sr=b&sig=%2FWny9gYMsVkPDk%2B6%2FwSgAZOkGt4FQvbI61F8func1eM%3D",
    numberOfListings: 13,
  },
  {
    id: 3,
    heading: "Cookies & Biscuits",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/cookies-and-biscuits.jpg?sp=r&st=2024-08-22T15:06:42Z&se=2025-08-22T23:06:42Z&spr=https&sv=2022-11-02&sr=b&sig=ekIQmhMDOqTyS1NrP1%2BaPUCvwxBf%2Bzys7tFKKXS1CqE%3D",
    numberOfListings: 14,
  },
  {
    id: 4,
    heading: "Pies & Tarts",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/pie-and-tarts.jpg?sp=r&st=2024-08-22T15:07:09Z&se=2025-08-22T23:07:09Z&spr=https&sv=2022-11-02&sr=b&sig=cMSoR2tqm4DreUEpiQ5Iw%2BwHLLTpdFtU99kJp1ezc%2Bw%3D",
    numberOfListings: 1,
  },
  {
    id: 5,
    heading: "Gluten-Free Baking",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/gluten-free-baking.jpg?sp=r&st=2024-08-22T15:58:19Z&se=2025-08-22T23:58:19Z&spr=https&sv=2022-11-02&sr=b&sig=CDUtQXanx20uQn%2Fmjp2v25VS%2B7s0Hhn8aU2zCq1uKjA%3D",
    numberOfListings: 2,
  },
  {
    id: 6,
    heading: "Desserts & Sweets",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/desserts-and-sweets.jpg?sp=r&st=2024-08-22T16:14:32Z&se=2025-08-23T00:14:32Z&spr=https&sv=2022-11-02&sr=b&sig=fI6cuCHzbpYpauSrYdElS%2F7WXsTmUHcPnOZoHy6heis%3D",
    numberOfListings: 3,
  },
  {
    id: 7,
    heading: "Holiday & Seasonal Baking",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/holiday-baking.jpg?sp=r&st=2024-08-22T16:19:33Z&se=2025-08-23T00:19:33Z&spr=https&sv=2022-11-02&sr=b&sig=VZZrHT9PFum4KTzMeTyfhiByuYEi2YDzuDJCOd6P0c4%3D",
    numberOfListings: 121,
  },
  {
    id: 8,
    heading: "Cupcakes & Mini Treats",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/cupcakes-and-minitreats.jpg?sp=r&st=2024-08-22T16:22:11Z&se=2025-08-23T00:22:11Z&spr=https&sv=2022-11-02&sr=b&sig=J65wnp1061W4E7u5G22HhnrYChH2EyhjTFqnGEgRN9w%3D",
    numberOfListings: 13,
  },
];

function JobsByCategorySectionHome({}: Props) {
  return (
    <section className="relative font-montserrat">
      <div className="flex xl:block flex-col items-center justify-center py-9 md:py-11">
        <div className="mb-12">
          <h1 className="text-[#0c0c0c] text-[1.3rem] xxxxs:text-[1.45rem] lg:text-3xl 5xl:text-4xl font-semibold xl:text-center">Browse Jobs by Categories</h1>
        </div>
        <div style={{}} className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-x-4 lg:gap-x-[1.33rem] xl:gap-x-6 2xl:gap-x-0 3xl:gap-x-4 4xl:gap-x-0 md:px-4 lg:px-0 xl:px-28 4xl:px-36 5xl:px-80 xl:place-items-center">
          {jobsByCategorys.map((category) => (
            <div
              key={category.id}
              className={`relative overflow-hidden zoom-background cursor-pointer bg-cover bg-center h-52 xs:h-56 md:min-h-60 xl:min-h-52 w-72 xxxxs:w-80 xs:w-[23rem] md:max-w-44 xl:max-w-64 3xl:min-w-72 mb-12 xl:mb-6 rounded-lg`}
              style={{
                '--bg-image': `url(${category.imageUrl})`,
              } as React.CSSProperties}
            >
              <div
                className="absolute left-1/2 bottom-0 w-64 xxxxs:w-72 xs:w-80 md:max-w-40 xl:max-w-60 3xl:min-w-64 h-16 md:h-20 xl:h-16 -translate-x-1/2 mb-5 text-white backdrop-blur-[0.3rem] rounded px-3.5 py-2.5 md:py-1.5 xl:py-2.5"
                style={{ background: `rgba(0,0,0,0.2)` }}
              >
                <h2 className="font-semibold">{category.heading}</h2>
                <p className="text-sm">{category.numberOfListings} Listings</p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-11 w-52 -mt-3 xl:mt-4 xl:mx-auto">
          <button className="w-full h-full text-white font-semibold bg-[#26ae61] rounded">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
}

export default JobsByCategorySectionHome;
