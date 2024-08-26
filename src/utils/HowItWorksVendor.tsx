import StepsCards from "./StepsCards";

type Props = {};

function HowItWorksVendor({}: Props) {
  return (
    <div className="relative text-[#0c0c0c] overflow-hidden">
      <div className="absolute w-full h-full -left-[90%] top-[2.5%]">
        <img className="h-[95%] w-full object-cover object-center rounded-3xl" src="https://storagehomestovedev.blob.core.windows.net/web/VendorHome/how-to-use-vendor.jpg?sp=r&st=2024-08-26T13:45:07Z&se=2025-08-26T21:45:07Z&spr=https&sv=2022-11-02&sr=b&sig=Puye4f3qP3uDJhghAhEOUL6785u46D1SB1nmplISG00%3D" alt="" />
      </div>
      <section className="bg-[#f2fcfb] p-4">
        <div className="flex flex-col items-center font-montserrat z-10 relative">
          <div className="py-3">
            <h1 className="text-xl font-semibold">Ready to Bake Up Success?</h1>
          </div>
          <div className="px-3 pb-3">
            <p className="text-sm text-center">Find Your Next Baking Gig and Get Paid for What You Love</p>
          </div>
        </div>
        <div className="font-montserrat z-10 relative">
          <StepsCards />
        </div>
      </section>
    </div>
  );
}

export default HowItWorksVendor;
