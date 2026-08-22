import { BsCart4 } from "react-icons/bs";

export default function HeroSection() {
  const data = {
    title: `Your Prescription for
     Affordable Health
     Solutions!`,
    desc: `Elevate your health journey with exclusive discounts and unparalleled
     convenience. Your path to well-being starts here, where every purchase
      is a prescription for savings.`,
    btnText: "Start Shopping",
    img: "../../public/images/doctor.png",
  };
  return (
    <>
      <div className="bg-[#304D30] h-122.5 flex relative">
        <div className="pl-15 pt-12 space-y-6">
          <h1 className="text-[#FFFFFF] font-extrabold whitespace-pre-line text-6xl leading-tight">
            {data.title}
          </h1>
          <p className="text-[#CCE5FF] font-normal text-[16px] whitespace-pre-line">
            {data.desc}
          </p>
          <button className="bg-[#FFFFFF] rounded-lg w-43 h-11 flex justify-center items-center space-x-4 transition-all duration-500 hover:scale-103 hover:cursor-pointer ">
            <p className="text-[#28A745] text-[16px] font-semibold ">
              {data.btnText}
            </p>

            <BsCart4 className="text-[#28A745] rotate-y-180 h-6 w-5" />
          </button>
        </div>

        <img
          className="h-122.5 w-130 absolute rotate-y-180 left-168"
          src={data.img}
        />
      </div>
    </>
  );
}
