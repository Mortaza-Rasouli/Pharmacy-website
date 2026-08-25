import { BsCart4 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="w-full border-b sticky top-0 left-0 z-50 border-[#E2E7EC] bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center w-full">
        <div className="flex items-center justify-between lg:justify-center w-full lg:w-auto">
          <div className="flex items-center text-[#28A745] pl-4 min-[330px]:pl-5 lg:pl-16 py-4 min-[330px]:py-5 lg:py-10">
            <img
              src="/images/logo.png"
              alt="Medico Store"
              className="h-9 min-[330px]:h-10 lg:h-15 pr-2"
            />
            <div className="flex flex-col">
              <h1 className="mt-1 p-0 font-extrabold text-xl min-[330px]:text-2xl lg:text-4xl leading-none">
                Medico
              </h1>
              <h1 className="m-0 p-0 font-bold text-xs min-[330px]:text-sm lg:text-xl leading-none">
                Store
              </h1>
            </div>
          </div>
          <div className="flex lg:hidden items-center gap-3 min-[330px]:gap-4 pr-3 min-[330px]:pr-5">
            <div className="relative">
              <GoHeart className="text-[#666666] w-5 h-5 min-[330px]:w-6 min-[330px]:h-6" />
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-red-500 text-white text-[9px] font-bold">
                0
              </span>
            </div>

            <div className="relative">
              <BsCart4 className="text-[#666666] w-5 h-6" />
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-red-500 text-white text-[9px] font-bold">
                0
              </span>
            </div>

            <img
              className="w-8 h-8 min-[330px]:w-9 min-[330px]:h-9 rounded-full border border-[#6666666E]"
              src="/images/userDefault.png"
              alt="User profile"
            />
          </div>
        </div>
        <div className="w-full px-3 min-[330px]:px-4 sm:px-5 pb-4 sm:pb-5 lg:px-0 lg:pb-0 lg:flex-1">
          <SearchBar />
        </div>
        <div className="hidden lg:flex items-center justify-center gap-5 mr-8">
          <div className="relative">
            <GoHeart className="text-[#666666] w-5 h-5 min-[330px]:w-6 min-[330px]:h-6 hover:cursor-pointer transition-all duration-300 ease-linear hover:scale-103" />
            <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-red-500 text-white text-[9px] font-bold">
              0
            </span>
          </div>
          <div className="relative">
            <BsCart4 className="text-[#666666] w-5 h-6 hover:cursor-pointer transition-all duration-300 ease-linear hover:scale-105" />
            <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-red-500 text-white text-[9px] font-bold">
              0
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img
              className="w-11 h-11 rounded-full border border-[#6666666E]"
              src="/images/userDefault.png"
              alt="User profile"
            />
            <span className="text-[#666666]">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
}
