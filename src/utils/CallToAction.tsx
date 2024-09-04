import { useState } from "react";

type Props = {};

function CallToAction({}: Props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  return (
    <section className="relative font-montserrat">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(254,235,229,0.95) 0%, rgba(254,235,221,0.98) 40%, rgba(251,226,195,1) 100%)",
        }}
        className="relative md:h-96 lg:mx-2 py-9 md:py-11 px-4 xl:px-28 4xl:px-40 5xl:px-60 5xl:mx-24 5xl:rounded-t-3xl md:flex md:justify-center md:items-center"
      >
        <div className="md:pr-96">
          <div className="mb-3">
            <h1 className="text-[1.3rem] xxxxs:text-[1.45rem] lg:text-3xl 5xl:text-4xl leading-8 font-semibold md:font-bold text-[#0c0c0c]">
              Join the Bakers' Revolution Today
            </h1>
          </div>
          <div className="mb-6">
            <p className="text-sm text-[#0c0c0c] leading-8">
              Turn your passion into profit. Sign up now and connect with
              customers who appreciate your craft. Your next opportunity is just
              a click away.
            </p>
          </div>
          <div>
            <button className="w-[10.25rem] h-14 bg-[#0c0c0c] flex justify-center items-center gap-2 px-5 py-3 rounded-lg">
              <span className="text-white text-sm font-semibold">
                Get Started
              </span>
              <svg
                className="translate-y-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="2em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="white"
                  d="M198 64v104a6 6 0 0 1-12 0V78.48L68.24 196.24a6 6 0 0 1-8.48-8.48L177.52 70H88a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {!isMobile && <div className="md:absolute md:w-1/2 xl:w-2/5 4xl:w-1/3 5xl:w-[30%] md:right-0 md:bottom-0">
          <img
            src="https://storagehomestovedev.blob.core.windows.net/web/VendorHome/chef-CTA-section.png?sp=r&st=2024-09-04T14:52:33Z&se=2025-09-04T22:52:33Z&spr=https&sv=2022-11-02&sr=b&sig=lStm3XEf04TDtXdJfBgEpVFnya72j6V4vhkHCUGAwcI%3D"
            alt="chef"
          />
        </div>}
      </div>
    </section>
  );
}

export default CallToAction;
