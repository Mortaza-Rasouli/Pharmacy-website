import { BsCart4 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center border border-b border-[#E2E7EC]">
          {/* name web and logo */}

          <div className="flex text-[#28A745] pl-16 py-10 ">
            <img src="../../public/Mask group.png" className="h-15 pr-2" />
            <div className="flex flex-col">
              <h1 className="mt-1 p-0 font-extrabold text-4xl leading-none">
                Medico
              </h1>

              <h1 className="-mt-0.5 m-0 p-0 font-bold text-xl leading-none">
                Store
              </h1>
            </div>
          </div>

          <SearchBar />

          <div className="flex flex-1 justify-center items-center space-x-5">
            <GoHeart className="text-[#666666] w-6 h-6 " />
            <BsCart4 className="text-[#666666] w-5 h-6 rotate-y-180 " />
            <div className="flex justify-center items-center space-x-1">
              <img
                className="w-11.5 h-11.5 rounded-3xl border border-[#6666666E]"
                src="../../public/userDefault.png"
                alt=""
              />
              <span className="text-[#666666]">▼</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
