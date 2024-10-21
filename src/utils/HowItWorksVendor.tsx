import { motion } from "framer-motion";
import StepsCards from "./StepsCards";

type Props = {};

function HowItWorksVendor({}: Props) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 0.99 }}
      transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
    >
      <section className="relative text-[#0c0c0c] overflow-hidden xl:h-screen 3xl:h-[90vh] 5xl:h-[80vh] 5xl:mx-24">
        <div className="absolute w-full xl:w-auto h-full -left-[90%] md:-left-[65%] xl:-left-[5%] 2xl:-left-[2%] 5xl:-left-0 top-[2.5%] md:top-0 xl:top-[5%] xl:overflow-hidden">
          <img
            className="h-[95%] md:h-full xl:h-[90%] w-full object-cover xl:object-contain object-center rounded-3xl md:rounded-none xl:rounded-3xl"
            src="https://storagehomestovedev.blob.core.windows.net/web/VendorHome/how-to-use-vendor.jpg?sp=r&st=2024-08-26T13:45:07Z&se=2025-08-26T21:45:07Z&spr=https&sv=2022-11-02&sr=b&sig=Puye4f3qP3uDJhghAhEOUL6785u46D1SB1nmplISG00%3D"
            alt=""
          />
        </div>
        <section
          className="bg-[#f2fcfb] px-4 py-9 md:py-11 lg:py-14 xl:py-20 5xl:py-24 xl:px-28 xl:h-full xl:flex xl:flex-col xl:justify-center xl:items-end 5xl:items-end 5xl:rounded-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(242,252,251,1) 35%)",
          }}
        >
          <div className="flex flex-col items-center font-montserrat z-10 relative xl:self-center">
            <div className="py-3 ">
              <h1 className="text-[#0c0c0c] text-[1.3rem] xxxxs:text-[1.45rem] lg:text-3xl 5xl:text-4xl font-semibold">
                Ready to Bake Up Success?
              </h1>
            </div>
            <div className="px-3 pb-5 xl:mb-8">
              <p className="text-sm text-center">
                Find Your Next Baking Gig and Get Paid for What You Love
              </p>
            </div>
          </div>
          <div className="font-montserrat z-10 relative flex flex-col items-center">
            <StepsCards />
          </div>
        </section>
      </section>
    </motion.div>
  );
}

export default HowItWorksVendor;
