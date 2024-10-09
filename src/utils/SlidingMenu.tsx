import { toggleMenu } from "@/reducers/menuSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Overlay from "./Overlay";

type Props = {};

function SlidingMenu({}: Props) {
  const isOpen = useSelector((state: any) => state.menu.isOpen);
  const dispatch = useDispatch();

  // Effect to manage body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && <Overlay onClick={() => dispatch(toggleMenu())} />}
      <AnimatePresence>
        <motion.div
          style={{ top: `${window.scrollY}px` }}
          className={`absolute left-0 z-[50] w-full xs:w-[96%] md:w-1/2 xl:w-1/3 5xl:w-1/4 overflow-hidden font-montserrat`}
          animate={{
            x: isOpen ? 0 : "-100%",
            opacity: isOpen ? 1 : 0,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          initial={{
            x: "-100%",
          }}
        >
          <main className="bg-white h-screen w-full text-[#0c0c0c]">
            <div className="flex justify-between items-center border-b pl-7 pr-4 py-5 h-16">
              <div>
                <h1 className="font-semibold">Menu</h1>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => dispatch(toggleMenu())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="2em"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="#797979"
                    d="m37.304 11.282l1.414 1.414l-26.022 26.02l-1.414-1.413z"
                  ></path>
                  <path
                    fill="#797979"
                    d="m12.696 11.282l26.022 26.02l-1.414 1.415l-26.022-26.02z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="border-b flex flex-col gap-y-6 pl-7 pr-4 pt-10 pb-7">
              <div>
                <Link to="/">
                  <h1 className="text-sm">Home</h1>
                </Link>
              </div>
              <div>
                <Link to="/baker-dashboard/explore-jobs">
                  <h1 className="text-sm">Explore Jobs</h1>
                </Link>
              </div>
              <div>
                <Link to="/customer-dashboard/explore-vendors">
                  <h1 className="text-sm">Explore Vendors</h1>
                </Link>
              </div>
              <div>
                <Link to="/customer-dashboard/post-a-job">
                  <h1 className="text-sm">Post a Job</h1>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 pl-7 pr-4 py-7">
              <div>
                <Link to="/login">
                  <h1 className="text-sm">Login</h1>
                </Link>
              </div>
              <div>
                <Link to="/register">
                  <h1 className="text-sm">Register</h1>
                </Link>
              </div>
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default SlidingMenu;
