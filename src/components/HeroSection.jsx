import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const data = {
  title: "Your Prescription for Affordable Health Solutions!",
  desc: "Elevate your health journey with exclusive discounts and unparalleled convenience. Your path to well-being starts here, where every purchase is a prescription for savings.",
  btnText: "Start Shopping",
  img: "/images/doctor.png",
};

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-forest">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-4 px-4 pt-8 min-[330px]:px-5 min-[330px]:pt-9 sm:px-8 sm:pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-14 lg:pt-0">
        <div className="relative z-10 w-full space-y-4 min-[330px]:space-y-5 sm:space-y-6 lg:w-[55%] lg:py-12">
          <h1 className="text-[26px] font-extrabold leading-[1.2] text-white min-[330px]:text-[28px] sm:text-4xl lg:text-5xl xl:text-6xl">
            {data.title}
          </h1>
          <p className="max-w-xl text-[13px] leading-6 text-[#CCE5FF] min-[330px]:text-[14px] sm:text-[15px] lg:text-[16px]">
            {data.desc}
          </p>
          <Link
            to="/products"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white px-5 text-[14px] font-semibold text-brand transition-all duration-500 hover:scale-103 min-[330px]:h-11 min-[330px]:gap-3 sm:h-12 sm:text-[16px]"
          >
            {data.btnText}
            <BsCart4 className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
        </div>

        <img
          src={data.img}
          alt="Smiling doctor"
          className="-scale-x-100 h-60 w-60 shrink-0 self-center object-contain min-[350px]:h-64 min-[350px]:w-64 sm:h-72 sm:w-72 lg:h-[26rem] lg:w-[26rem] lg:self-end xl:h-[30rem] xl:w-[30rem]"
        />
      </div>
    </section>
  );
}
