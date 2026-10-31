import { Link } from "react-router-dom";
import Container from "./Container";

const data = {
  text: "Today's Hot Offer",
  title: "Unlock 50% Off on Essential Medicines!",
  desc: "Embrace wellness without breaking the bank! Enjoy a generous 50% discount on a wide range of vital medicines at our online pharmacy. Your health matters, and so does your budget.",
  btnText: "Place An Order Now",
  img: "/images/Group346.png",
};

export default function FiftyPercentOff() {
  return (
    <Container className="mt-8 min-[330px]:mt-10 sm:mt-12">
      <div className="flex flex-col items-center gap-6 overflow-hidden bg-[#F6FAFF] px-4 py-8 min-[330px]:px-6 sm:px-8 md:flex-row md:justify-between md:gap-8 md:px-10 lg:px-14">
        <div className="w-full space-y-3 min-[330px]:space-y-4 md:w-[58%] lg:space-y-6">
          <p className="text-[14px] text-ink min-[330px]:text-[16px] sm:text-[18px]">
            {data.text}
          </p>
          <h2 className="text-2xl font-extrabold leading-tight text-ink sm:text-4xl">
            {data.title}
          </h2>
          <p className="text-[13px] leading-relaxed text-copy min-[330px]:text-[14px] sm:text-[16px]">
            {data.desc}
          </p>
          <Link
            to="/products"
            className="inline-block rounded-md bg-brand px-4 py-2 text-[14px] font-medium text-white transition-all duration-300 ease-linear hover:scale-103 hover:bg-brand-hover min-[330px]:px-5 min-[330px]:py-2.5 sm:text-[16px]"
          >
            {data.btnText} →
          </Link>
        </div>

        <div className="flex w-full justify-center md:w-[42%] md:justify-end">
          <img
            src={data.img}
            alt="Medicines on special offer"
            loading="lazy"
            className="h-44 max-w-full object-contain min-[330px]:h-48 sm:h-56 md:h-64 lg:h-80"
          />
        </div>
      </div>
    </Container>
  );
}
