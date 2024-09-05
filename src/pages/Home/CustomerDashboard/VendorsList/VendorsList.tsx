import { SortByCombobox } from "@/components/ui/combobox";
import Footer from "@/utils/Footer";
import Header from "@/utils/Header";
import VendorCards from "@/utils/VendorCards";


type Props = {};

function VendorsList({}: Props) {
  return (
    <section className="relative font-montserrat text-[#0c0c0c]">
      <div>
        <Header />
      </div>
      <main className="py-5">
        {/* The route for this page */}
        <div className="px-4 pb-5">
          <p className="text-sm text-[#0c0c0c]">
            Home <span className="text-[#a2a2a2]">/ Vendors</span>
          </p>
        </div>
        {/* The Hero Section */}
        <div
          className="px-4 py-9"
          style={{
            background:
              "linear-gradient(90deg, rgba(254,235,229,0.95) 0%, rgba(254,235,221,0.98) 40%, rgba(251,226,195,1) 100%)",
          }}
        >
          <div className="pb-3">
            <h1 className="text-[1.3rem] xxxxs:text-[1.45rem] lg:text-3xl 5xl:text-4xl font-semibold">
              Discover the Best Bakers in Your Area
            </h1>
          </div>
          <div className="pb-3">
            <p className="text-sm leading-6">
              From custom cakes to freshly baked treats, find the perfect baker
              for your needs.
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
        {/* The Bakers list section */}
        <div className="px-4 py-7">
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
          <div>
            <div className="">
                <div className="pb-4">
                    <p className="text-sm">Showing all 8 reults</p>
                </div>
                <div className="w-48 h-11 border border-[#e9e9e9] rounded-lg">
                    <SortByCombobox />
                </div>
            </div>
            <div>
                <VendorCards />
            </div>
          </div>
        </div>
      </main>
      {/* <div>
            <Footer />
        </div> */}
    </section>
  );
}

export default VendorsList;
