import { HiMagnifyingGlass } from "react-icons/hi2";
import Categories from "./Categories";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-[#CECECE]/40 w-full max-w-180 h-11 min-[330px]:h-12 sm:h-14 lg:h-16 border border-gray-200 ml-0 lg:ml-7 rounded-lg overflow-hidden">
      <div className="shrink-0">
        <Categories />
      </div>
      <div className="flex flex-1 items-center min-w-0 overflow-hidden">
        <span className="shrink-0 text-[#666666] pl-1 min-[330px]:pl-2 sm:pl-3 lg:pl-7 pr-1 min-[330px]:pr-2">
          |
        </span>
        <input
          type="text"
          placeholder="Search medicine, medical products"
          className="flex-1 min-w-0 w-0 overflow-hidden text-ellipsis whitespace-nowrap outline-none border-none bg-transparent text-[10px] min-[330px]:text-[11px] sm:text-[13px] lg:text-[14px] placeholder:text-[#666666]"
        />
        <button
          type="button"
          aria-label="Search"
          className="shrink-0 flex items-center justify-center bg-[#28A745] text-white h-11 w-11
           min-[330px]:h-12 min-[330px]:w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-lg min-[330px]:text-xl 
           sm:text-2xl rounded-lg hover:cursor-pointer transition-all duration-300 ease-linear hover:scale-102 hover:bg-[#26c74c]"
        >
          <HiMagnifyingGlass />
        </button>
      </div>
    </div>
  );
}
