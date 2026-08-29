import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const data = {
    title: `Your Prescription for
Affordable Health
Solutions!`,
    desc: `Elevate your health journey with exclusive discounts and unparalleled
convenience. Your path to well-being starts here, where every purchase
is a prescription for savings.`,
    btnText: "Start Shopping",
    img: "/images/doctor.png",
  };

  return (
    <section className="bg-[#304D30] relative overflow-hidden min-h-152.5 min-[330px]:min-h-150 sm:min-h-130 lg:h-122.5 lg:min-h-0">
      <div className="relative z-10 px-4 min-[330px]:px-5 pt-8 min-[330px]:pt-9 pb-6 sm:px-8 sm:pt-10 sm:pb-8 lg:pl-15 lg:pt-12 lg:pb-0 space-y-4 min-[330px]:space-y-5 sm:space-y-6 lg:space-y-6">
        <h1 className="text-[#FFFFFF] font-extrabold whitespace-pre-line text-[25px] min-[330px]:text-[28px] min-[350px]:text-[30px] sm:text-4xl lg:text-6xl leading-[1.2] min-[330px]:leading-tight">
          {data.title}
        </h1>
        <p className="text-[#CCE5FF] font-normal lg:whitespace-pre- sm:whitespace-pre-line text-[11px] min-[330px]:text-[12px] min-[350px]:text-[13px] sm:text-[14px] lg:text-[16px] leading-5 min-[330px]:leading-6 lg:leading-normal">
          {data.desc}
        </p>
        <Link to="/notfound">
          <button className="bg-[#FFFFFF] rounded-lg w-36 min-[330px]:w-40 sm:w-43 h-10 min-[330px]:h-11 flex justify-center items-center gap-2 min-[330px]:gap-3 transition-all duration-500 hover:scale-103 hover:cursor-pointer">
            <p className="text-[#28A745] text-[12px] min-[330px]:text-[13px] sm:text-[16px] font-semibold">
              {data.btnText}
            </p>
            <BsCart4 className="text-[#28A745] h-5 w-5 min-[330px]:h-5 min-[330px]:w-5 sm:h-6" />
          </button>
        </Link>
      </div>
      <img
        src={data.img}
        alt="Doctor"
        className="absolute object-contain rotate-y-180 h-56 w-56 min-[330px]:h-60 min-[330px]:w-60 min-[350px]:h-64 min-[350px]:w-64 left-1/2 -translate-x-1/2 bottom-0 sm:h-72 sm:w-72 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-0 lg:h-110 lg:w-115 lg:left-auto lg:translate-x-0 lg:right-[5%] lg:bottom-0"
      />
    </section>
  );
}
