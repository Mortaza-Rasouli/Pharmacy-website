import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center border border-b border-[#E2E7EC]">
        {/* name and logo */}
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
        {/*Search bar*/}
        <div className="flex items-center w-full max-w-170 h-16 border border-gray-200 rounded-lg">
          {/* Category */}
          <div className="flex items-center justify-between w-35 px-4">
            <span className="text-[15px] font-medium text-[#666666]">
              All Categories
            </span>

            <span className="text-xl text-[#666666]">⌄</span>
            <span className="text-[#666666]">|</span>
          </div>

          {/* Search */}
          <div className="flex flex-1 items-center  ">
            <input
              type="text"
              placeholder="Search medicine, medical products"
              className="flex-1 outline-none border-none px-5 text-[14px]  placeholder:text-[#666666]"
            />
            <span className="bg-[#28A745] p-5  text-white text-2xl rounded-lg">
              <HiMagnifyingGlass />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
