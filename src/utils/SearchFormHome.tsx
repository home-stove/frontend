type Props = {};

// Search Form Home
function SearchFormHome({}: Props) {
  return (
    <div className="h-44 bg-white mb-4 p-3 opacity-[.99] rounded">
      <div className="flex justify-start items-center pt-5 border-b border-b-[#ededed] pb-3 mb-2">
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.25em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          >
            <circle cx={11} cy={11} r={8}></circle>
            <path d="m21 21l-4.3-4.3"></path>
          </g>
        </svg>
        <input
          className="ml-1 bg-white h-full outline-none text-black placeholder:text-black placeholder:text-sm"
          type="text"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="relative flex items-center px-5 h-9 mb-2">
        <p className="text-black text-sm">Categories</p>
        <svg
          className="absolute right-0"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path fill="black" d="m7 10l5 5l5-5z"></path>
        </svg>
      </div>
      <div>
        <button className="w-full text-white text-sm font-semibold bg-[#5bbb7b] h-[3.25rem] rounded">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchFormHome;
