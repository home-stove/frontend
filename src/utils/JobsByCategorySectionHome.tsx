type Props = {};

const jobsByCategorys = [
  {
    id: 1,
    heading: "Custom Cakes & Pastries",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 12,
  },
  {
    id: 2,
    heading: "Bread & Artisan Loaves",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 13,
  },
  {
    id: 3,
    heading: "Cookies & Biscuits",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 14,
  },
  {
    id: 4,
    heading: "Pies & Tarts",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 1,
  },
  {
    id: 5,
    heading: "Vegan & Gluten-Free Baking",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 2,
  },
  {
    id: 6,
    heading: "Desserts & Sweets",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 3,
  },
  {
    id: 7,
    heading: "Breakfast Pastries",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 21,
  },
  {
    id: 8,
    heading: "Holiday & Seasonal Baking",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 121,
  },
  {
    id: 9,
    heading: "Cupcakes & Mini Treats",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 13,
  },
  {
    id: 10,
    heading: "Baking Kits & DIY Orders",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 0,
  },
  {
    id: 11,
    heading: "Healthy Bakes",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 7,
  },
  {
    id: 12,
    heading: "Decorating Services",
    imageUrl:
      "https://storagehomestovedev.blob.core.windows.net/web/category-placeholder.jpg?sp=r&st=2024-08-20T12:34:15Z&se=2025-08-20T20:34:15Z&spr=https&sv=2022-11-02&sr=b&sig=FP7a1jTeI17akZs8KUE%2FnUAjIbV91Zd%2Fh1JxJRHQ5Xk%3D",
    numberOfListings: 9,
  },
];

function JobsByCategorySectionHome({}: Props) {
  return (
    <div className="relative font-montserrat">
      <div className="flex flex-col items-center justify-center py-16">
        <div className="mb-12">
          <h1 className="text-xl font-semibold">Browse Jobs by Categories</h1>
        </div>
        <div>
          {jobsByCategorys.map((category) => (
            <div
              className="relative bg-cover bg-center h-56 w-72 mb-12 rounded"
              style={{ backgroundImage: `url(${category.imageUrl})`, transitionProperty: "background-size", transitionDuration: "0.8", transitionTimingFunction: "ease-out" }}
              key={category.id}
            >
              <div className="absolute left-1/2 bottom-0 w-64 h-16 -translate-x-1/2 mb-5 text-white backdrop-blur-[0.2rem] rounded px-3.5 py-2.5" style={{background: `rgba(0,0,0,0.3)`}}>
                <h2 className="font-semibold">{category.heading}</h2>
                <p className="text-sm">{category.numberOfListings} Listings</p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-11 w-52 ">
        <button className="w-full h-full text-white font-semibold bg-[#26ae61] rounded">
          View All Listings
        </button>
        </div>
      </div>
    </div>
  );
}

export default JobsByCategorySectionHome;
