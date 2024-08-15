import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

function Login() {
  const [isNotMobile, setIsNotMobile] = useState(window.innerWidth >= 900);

  useEffect(() => {
    setIsNotMobile(window.innerWidth >= 900);
  }, [window.innerWidth]);

  return (
    <div className="relative w-full h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="lg:w-1/2">
        <div
          style={{
            backgroundImage: `url(${"/src/assets/pexels-kseniachernaya-3952094.jpg"})`,
          }}
          className="relative px-5 md:px-12 lg:px-5 5xl:px-8 h-[41vh] md:h-[42vh] lg:h-full lg:w-full bg-right bg-cover"
        >
          <div
            className="absolute w-full h-full top-0 left-0"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          ></div>
          <div className="flex items-center justify-between pt-3 md:pt-6 lg:pt-3 5xl:pt-4">
            <Link to={"/"}>
              <img
                className="h-16 opacity-90"
                src="/home-stove-favicon.png"
                alt="home stove logo"
              />
            </Link>
            <div className="flex justify-between items-center">
              <svg
                className="opacity-90 hover:-translate-y-1 transition-transform cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.75em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z"
                ></path>
              </svg>
              <svg
                className="mx-4 opacity-90 hover:-translate-y-1 transition-transform cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.75em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="white"
                  d="M28 8.559a9.8 9.8 0 0 1-2.828.773a4.94 4.94 0 0 0 2.164-2.723a9.9 9.9 0 0 1-3.125 1.196a4.924 4.924 0 0 0-8.52 3.367q0 .582.13 1.121A13.96 13.96 0 0 1 5.67 7.148a4.9 4.9 0 0 0-.667 2.477c0 1.707.867 3.215 2.191 4.098a4.9 4.9 0 0 1-2.23-.618v.063a4.92 4.92 0 0 0 3.95 4.828a4.9 4.9 0 0 1-2.224.086a4.93 4.93 0 0 0 4.598 3.422A9.88 9.88 0 0 1 4 23.539a13.9 13.9 0 0 0 7.547 2.215c9.058 0 14.012-7.504 14.012-14.012c0-.21-.008-.426-.016-.637A10.1 10.1 0 0 0 28 8.56z"
                ></path>
              </svg>
              <svg
                className="opacity-90 hover:-translate-y-1 transition-transform cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.75em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2M9.984 15.523a5.539 5.539 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539M6.523 9.984a3.461 3.461 0 1 1 6.922 0a3.461 3.461 0 0 1-6.922 0M16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693"
                ></path>
              </svg>
            </div>
          </div>
          <div className="font-montserrat h-4/5 flex flex-col justify-center xl:px-20 5xl:px-36">
            <h1
              style={{
                animation:
                  "typing 3s steps(30), cursor 0.4s step-end infinite alternate",
              }}
              className="text-white opacity-80 md:opacity-70 font-bold w-full whitespace-nowrap overflow-hidden border-r border-white md:text-lg"
            >
              WELCOME BACK
            </h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.95 }}
              transition={{
                type: "tween",
                duration: 0.7,
                delay: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white text-2xl md:text-3xl leading-7 font-bold opacity-95 mt-3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit, quisquam
              ducimus molestia.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full lg:w-1/2 px-6 md:px-16 lg:px-12 xl:px-36 2xl:px-44 5xl:px-60 pt-24 xxxxs:pt-14 xxxs:pt-4 xxs:pt-20 xs:pt-28 lg:pt-0 md:mt-10 lg:mt-0 xl:mt-auto font-montserrat">
        <h1 className="text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl font-semibold lg:mt-auto">
          Login
        </h1>
        <input
          className="mt-8 text-[0.8125rem] md:text-base xl:text-[0.8125rem] 2xl:text-base border-b pb-1 outline-none focus:border-b-[#434bdf] transition-colors duration-500"
          placeholder="Email"
          type="email"
          name="email"
          id="email"
        />
        <input
          className="mt-8 text-[0.8125rem] md:text-base xl:text-[0.8125rem] 2xl:text-base border-b pb-1 outline-none focus:border-b-[#434bdf] transition-colors duration-500"
          placeholder="Password"
          type="password"
          name="password"
          id="password"
        />
        <div className="mt-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              className="text-[0.8125rem] md:text-base xl:text-[0.8125rem] 2xl:text-base"
              htmlFor="remember-me"
            >
              Remember Me
            </label>
          </div>
          <p className="text-[0.8125rem] md:text-base xl:text-[0.8125rem] 2xl:text-base text-[#434bdf] hover:cursor-pointer">
            Forgot Password?
          </p>
        </div>
        <button className="mt-8 bg-[#434bdf] md:text-lg xl:text-base 2xl:text-lg text-white font-bold h-11 rounded-[0.125rem] hover:opacity-95 focus:opacity-95 active:scale-[.99] transition-transform">
          <span>Login</span>
        </button>
        <div className="mt-5 flex justify-evenly text-[0.8125rem] md:text-base xl:text-[0.8125rem] 2xl:text-base">
          <p>
            Don't have an account? <span> </span>
            <Link
              className="text-[#434bdf] hover:cursor-pointer"
              to={"/register"}
            >
              Sign Up
            </Link>
          </p>
        </div>
        {isNotMobile && (
          <p className="text-xs md:text-sm xl:text-xs 2xl:text-sm self-center p-5 font-montserrat lg:mt-auto">
            &copy; <Link to={"/"}>Home Stove</Link> - All Rights Reserved.
          </p>
        )}
      </div>
      {!isNotMobile && (
        <p className="text-xs md:text-sm xl:text-xs 2xl:text-sm self-center p-5 font-montserrat">
          &copy; <Link to={"/"}>Home Stove</Link> - All Rights Reserved.
        </p>
      )}
    </div>
  );
}

export default Login;
