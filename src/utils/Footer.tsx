import { useState } from "react";

type Props = {};

function Footer({}: Props) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);
  return (
    <footer className="relative font-montserrat bg-[#222222] text-white">
      <div className="px-4 lg:px-8 xl:px-28 4xl:px-40 5xl:px-60 pt-9 pb-5 xl:py-9 5xl:mx-24">
        <div className="border-b xxs:border-b-2 border-b-[#3f3f3f] md:flex md:justify-between md:items-start md:h-[4.5rem]">
          <div className="md:w-2/3 flex flex-wrap xxxxs:flex-nowrap text-sm md:text-base font-semibold mb-5 gap-y-2 xxxxs:gap-x-4 md:gap-x-6">
            <p>Terms of Service</p>
            <p className="ml-5 xxxxs:ml-0">Privacy Policy</p>
            <p className="w-1/3 xxxxs:w-auto">Site Map</p>
          </div>
          <div className="md:w-1/3 md:gap-x-6 flex items-center mb-7">
            <div className="w-1/3 xxs:w-auto mt-auto">
              <p className="font-semibold">Follow Us</p>
            </div>
            <div className="w-1/2 flex justify-evenly md:justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.1em"
                height="1.1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M15.12 5.32H17V2.14A26 26 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.1em"
                height="1.1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.1em"
                height="1.1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.1em"
                height="1.1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-10 md:grid md:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 md:justify-items-center lg:justify-items-start lg:border-b-2 lg:border-b-[#3f3f3f]">
          <div className="mb-9">
            <ul className="leading-8 xxxxs:leading-9">
              <li className="font-semibold">About</li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">About Us</li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Become a Baker
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Jobs on Home Stove
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Services Home Stove
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Terms of Service
              </li>
            </ul>
          </div>
          <div className="mb-9">
            <ul className="leading-8 xxxxs:leading-9">
              <li className="font-semibold">Categories</li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Custom Cakes & Pastries
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Bread & Artisan Loaves
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Cookies & Biscuits
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">Pies & Tarts</li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Gluten-Free Baking
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Desserts & Sweets
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Holiday & Seasonal Baking
              </li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">
                Cupcakes & Mini Treats
              </li>
            </ul>
          </div>
          <div className="mb-9">
            <ul className="leading-8 xxxxs:leading-9">
              <li className="font-semibold">Support</li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">Help Center</li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">FAQ</li>
              <li className="text-sm leading-8 xxxxs:leading-9 text-[#a2a2a2]">Contact Us</li>
            </ul>
          </div>
          {isDesktop && <div className="pb-10 border-b xxs:border-b-2 lg:border-b-0 border-b-[#3f3f3f] md:flex lg:block md:justify-around">
            <div>
              <h6 className="font-semibold mb-5">Subscribe</h6>
              <div className="bg-[#3f3f3f] rounded-lg flex justify-evenly h-14 mb-8">
                <input
                  className="bg-[#3f3f3f] w-3/4 h-full outline-none text-white text-sm placeholder:text-sm placeholder:text-[#a2a2a2] px-4 rounded-lg"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="w-1/4 text-sm font-semibold">Send</button>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-5">Apps</h6>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.1em"
                  height="1.1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#a2a2a2"
                    d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52a4.17 4.17 0 0 0-1 3.09a3.69 3.69 0 0 0 2.94-1.42m2.52 7.44a4.51 4.51 0 0 1 2.16-3.81a4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82s2 .82 3.3.79s2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85a4.41 4.41 0 0 1-2.68-4.04"
                  ></path>
                </svg>
                <p className="text-sm text-[#a2a2a2] leading-8 ml-2">iOS App</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.1em"
                  height="1.1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#a2a2a2"
                    d="M6.382 3.968A8.96 8.96 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A8.96 8.96 0 0 1 21 11v1H3v-1c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414zM3 14h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm6-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                  ></path>
                </svg>
                <p className="text-sm text-[#a2a2a2] leading-8 ml-2">
                  Android App
                </p>
              </div>
            </div>
          </div>}
        </div>
        {!isDesktop && <div className="pb-10 border-b xxs:border-b-2 border-b-[#3f3f3f] md:flex md:justify-around">
            <div>
              <h6 className="font-semibold mb-5">Subscribe</h6>
              <div className="bg-[#3f3f3f] rounded-lg flex justify-evenly h-14 mb-8">
                <input
                  className="bg-[#3f3f3f] w-3/4 h-full outline-none text-white text-sm placeholder:text-sm placeholder:text-[#a2a2a2] px-4 rounded-lg"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="w-1/4 text-sm font-semibold">Send</button>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-5">Apps</h6>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.1em"
                  height="1.1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#a2a2a2"
                    d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52a4.17 4.17 0 0 0-1 3.09a3.69 3.69 0 0 0 2.94-1.42m2.52 7.44a4.51 4.51 0 0 1 2.16-3.81a4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82s2 .82 3.3.79s2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85a4.41 4.41 0 0 1-2.68-4.04"
                  ></path>
                </svg>
                <p className="text-sm text-[#a2a2a2] leading-8 ml-2">iOS App</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.1em"
                  height="1.1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#a2a2a2"
                    d="M6.382 3.968A8.96 8.96 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A8.96 8.96 0 0 1 21 11v1H3v-1c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414zM3 14h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm6-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                  ></path>
                </svg>
                <p className="text-sm text-[#a2a2a2] leading-8 ml-2">
                  Android App
                </p>
              </div>
            </div>
          </div>}
        <div className="mt-5">
          <p className="text-xs text-center text-[#a2a2a2]">
            &copy; 2024 Home Stove. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
