import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "@/reducers/menuSlice";
import SlidingMenu from "./SlidingMenu";

type Props = {};

export default function Header({}: Props) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.menu.isOpen);
  const [isDesktop] = useState(window.innerWidth >= 900);
  const { pathname } = useLocation();
  return (
    <>
      <header
        className={`relative h-20 ${
          pathname === "/" ? "bg-white lg:bg-transparent" : "bg-[#222222]"
        } lg:absolute lg:z-10 lg:w-full lg:max-w-none font-montserrat lg:border-b lg:border-b-[#353535] border-b-[#e9e9e9] border-b`}
      >
        <div className="flex items-center justify-between px-4 pt-5">
          <div>
            <Link to={"/"}>
              <img
                src={
                  isDesktop
                    ? "https://demoapus1.com/freeio/wp-content/uploads/2022/09/logo-white2.png"
                    : "https://demoapus1.com/freeio/wp-content/themes/freeio/images/logo.svg"
                }
                alt="Home Stove Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="mr-2.5">
              <Link to="/login">
                <h1 className="text-sm lg:text-white">Login</h1>
              </Link>
            </div>
            <div className="ml-2.5">
              <svg
                onClick={() => dispatch(toggleMenu())}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill={isDesktop ? "white" : "black"}
                  stroke={isDesktop ? "white" : "black"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 17h7M5 12h14M5 7h14"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
