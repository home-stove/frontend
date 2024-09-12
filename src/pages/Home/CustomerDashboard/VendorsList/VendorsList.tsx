import { SortByCombobox } from "@/components/ui/combobox";
import Footer from "@/utils/Footer";
import Header from "@/utils/Header";
import VendorCards from "@/utils/VendorCards";
import VendorsFilterSection from "@/utils/VendorsFilterSection";
import { useState } from "react";

type Props = {};

function VendorsList({}: Props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  return (
    <section className="relative font-montserrat text-[#0c0c0c]">
      <div>
        <Header />
      </div>
      <main className="py-5 lg:pt-24">
        {/* The route for this page */}
        <div className="px-4 md:px-10 pb-5">
          <p className="text-sm text-[#0c0c0c]">
            Home <span className="text-[#a2a2a2]">/ Vendors</span>
          </p>
        </div>
        {/* The Hero Section */}
        <div
          className="px-4 md:px-10 xl:px-[4.5rem] 5xl:px-28 md:pr-96 py-9 relative xl:h-80 xl:mx-10 5xl:mx-24 xl:rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, rgba(254,235,229,0.95) 0%, rgba(254,235,221,0.98) 40%, rgba(251,226,195,1) 100%)",
          }}
        >
          {!isMobile && (
            <img
              className="md:absolute md:bottom-0 md:right-10 md:w-80 md:h-full"
              src="https://storagehomestovedev.blob.core.windows.net/web/chef-illustration-vendors.svg?sp=r&st=2024-09-06T17:23:35Z&se=2025-09-07T01:23:35Z&spr=https&sv=2022-11-02&sr=b&sig=t9fsrzpX443exYuWSxBGVUvV%2FX3pLx2dBakpYwQDvjE%3D"
              alt="chef illustration"
            />
          )}
          <div className="xl:flex xl:flex-col xl:justify-center xl:h-full">
            <div className="pb-3">
              <h1 className="text-[1.3rem] xxxxs:text-[1.45rem] lg:text-3xl 5xl:text-4xl font-semibold">
                Discover the Best Bakers in Your Area
              </h1>
            </div>
            <div className="pb-3 xl:pb-7">
              <p className="text-sm leading-6">
                From custom cakes to freshly baked treats, find the perfect
                baker for your needs.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="scale-75"
                src="https://storagehomestovedev.blob.core.windows.net/web/location.png?sp=r&st=2024-09-05T15:59:45Z&se=2025-09-05T23:59:45Z&spr=https&sv=2022-11-02&sr=b&sig=%2FWyXIW82fuqx4Q%2FB%2FLYbDosYOkDS%2BZQL9xcYk3TrVIk%3D"
                alt="location pin icon"
              />
              <p className="text-sm">Find Bakers Near Me</p>
            </div>
          </div>
        </div>
        {/* The Bakers list section */}
        <div className="px-4 md:px-10 py-7 lg:py-14 xl:py-20 5xl:py-24 5xl:px-52 xl:px-28 lg:flex lg:gap-x-14">
          {isDesktop ? (
            <div className="pb-4 lg:w-1/4">
              <VendorsFilterSection />
            </div>
          ) : (
            <div className="pb-4">
              <button className="border border-[#e9e9e9] bg-[#f2fcfb] rounded-lg flex items-center justify-center gap-x-1 w-28 h-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#0c0c0c"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={1.5}
                    d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
                  ></path>
                </svg>
                <span className="text-sm">Filter</span>
              </button>
            </div>
          )}
          <div className="lg:w-3/4">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="pb-4 lg:pb-0 lg:h-full">
                <p className="text-sm">Showing all 8 reults</p>
              </div>
              <div className="w-48 h-11 border border-[#e9e9e9] rounded-lg">
                <SortByCombobox />
              </div>
            </div>
            <div className="lg:-mt-7">
              <VendorCards />
            </div>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default VendorsList;
