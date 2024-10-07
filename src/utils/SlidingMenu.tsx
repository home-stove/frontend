import { toggleMenu } from "@/reducers/menuSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

type Props = {};

function SlidingMenu({}: Props) {
  const isOpen = useSelector((state: any) => state.menu.isOpen);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      <motion.div
        style={{ top: `${window.scrollY}px` }}
        className={`absolute left-0 z-[35] w-full overflow-hidden font-montserrat`}
        animate={{
          x: isOpen ? 0 : "-100%",
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        initial={{
          x: "-100%",
        }}
      >
        <main className="bg-white h-screen w-full">
          <div className="flex justify-between items-center border-b pl-7 pr-4 py-5">
            <div>
              <h1 className="font-semibold">Menu</h1>
            </div>
            <div className="cursor-pointer" onClick={() => dispatch(toggleMenu())}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
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
          <div className="border-b flex flex-col gap-y-4 pl-7 pr-4 py-7">
            <div>
              <Link to="/">
                <h1 className="">Home</h1>
              </Link>
            </div>
            <div>
              <Link to="/baker-dashboard/explore-jobs">
                <h1 className="">Explore Jobs</h1>
              </Link>
            </div>
            <div>
            <Link to="/customer-dashboard/explore-vendors">
                <h1 className="">Explore Vendors</h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 pl-7 pr-4 py-7">
            <div>
              <Link to="/login">
                <h1 className="">Login</h1>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <h1 className="">Register</h1>
              </Link>
            </div>
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default SlidingMenu;
