import { HiMagnifyingGlass } from "react-icons/hi2";
import Categories from "./Categories";

export default function SearchBar() {
  return (
    <>
      <div className="flex items-center bg-[#CECECE]/40 w-full max-w-180 h-16 border border-gray-200 ml-7 rounded-lg">
        <Categories />

        {/* Search */}
        <div className="flex flex-1 items-center  ">
          <span className="text-[#666666] pl-7 pr-2 pb-1 ">|</span>
          <input
            type="text"
            placeholder="Search medicine, medical products"
            className="flex-1 outline-none border-none  text-[14px]  placeholder:text-[#666666]"
          />
          <span className="bg-[#28A745] p-5  text-white text-2xl rounded-lg">
            <HiMagnifyingGlass />
          </span>
        </div>
      </div>
    </>
  );
}
