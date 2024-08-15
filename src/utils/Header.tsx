import { Link } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="relative h-20 bg-white font-montserrat">
      <div className="flex items-center justify-between px-4 pt-5">
        <div>
          <Link to={"/"}>
            <img
              src="https://demoapus1.com/freeio/wp-content/themes/freeio/images/logo.svg"
              alt="Home Stove Logo"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="mr-2.5">
            <Link to="/login">
              <h1 className="text-sm">Login</h1>
            </Link>
          </div>
          <div className="ml-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="black"
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
  );
}
