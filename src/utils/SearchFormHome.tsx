import { SearchFormCombobox } from "@/components/ui/combobox";

type Props = {};

// Search Form Home
function SearchFormHome({}: Props) {
  return (
    <div className="h-44 md:h-[4.5rem] bg-white mb-4 lg:mb-8 p-3 md:pl-7 opacity-[.99] rounded md:flex md:items-center md:justify-between lg:min-w-[48rem]">
      <div className="md:w-1/2 flex justify-start items-center pt-5 xxs:pt-2 md:pt-0 border-b md:border-none border-b-[#ededed] pb-3 md:pb-0 mb-2 md:mb-0">
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
          className="ml-1 bg-white h-full md:w-4/5 outline-none text-black placeholder:text-black placeholder:text-sm"
          type="text"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="md:w-1/3 md:border-l md:border-l-[#ededed] relative flex items-center h-9 mb-2 md:mb-0">
        <SearchFormCombobox />
      </div>
      <div className="md:w-1/6 relative">
        <button className="w-full text-white text-sm font-semibold bg-[#5bbb7b] h-[3.25rem] rounded">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchFormHome;
