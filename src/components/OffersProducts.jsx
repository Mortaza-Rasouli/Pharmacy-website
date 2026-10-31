import { Link } from "react-router-dom";
import Container from "./Container";
import { formatPrice } from "../data/products";

const featured = {
  id: 1,
  name: "BLACK GARLIC OIL",
  desc: "Stronger and Thicker Hair With Black Garlic Oil.",
  previousPrice: 37.0,
  currentPrice: 23.0,
  text: "Including Tax",
  bgColor: "bg-[#F1FAFE]",
  img: "/images/kara-sarimsak-yagi.png",
};

const small = [
  {
    id: 2,
    name: "Dental Care Set for Vivid and Bright Smiles",
    previousPrice: 33.9,
    currentPrice: 22.9,
    text: "Including Tax",
    bgColor: "bg-[#FDF7E8]",
    img: "/images/muz.aromali.dis.png",
  },
  {
    id: 3,
    name: "BANANA FLAVOURED TOOTHPASTE",
    previousPrice: 37.0,
    currentPrice: 23.0,
    text: "Including Tax",
    bgColor: "bg-[#E8FFE7]/60",
    img: "/images/disbeyazlaticiset.png",
  },
];

const discount = (item) =>
  Math.round((1 - item.currentPrice / item.previousPrice) * 100);

function PromoCard({ item, large = false }) {
  return (
    <Link
      to="/products"
      className={`group flex h-full overflow-hidden rounded-[14px] ${item.bgColor} ${
        large ? "min-h-72 sm:min-h-96 md:min-h-[26rem]" : "min-h-52 sm:min-h-56"
      }`}
    >
      <div
        className={`flex w-[58%] min-w-0 flex-col justify-center gap-1.5 py-5 pl-4 pr-1 sm:w-[55%] ${
          large ? "min-[330px]:pl-6 sm:gap-2 sm:pl-8" : "min-[330px]:pl-5"
        }`}
      >
        <span
          className={`self-start rounded-lg bg-brand font-medium text-white ${
            large
              ? "px-3 py-1 text-[12px] sm:px-4 sm:py-1.5 sm:text-[16px]"
              : "px-2.5 py-1 text-[11px] sm:text-[14px]"
          }`}
        >
          {discount(item)}% OFF
        </span>

        <h3
          className={`break-words font-bold leading-tight text-ink ${
            large
              ? "mt-2 text-xl min-[330px]:text-2xl sm:text-3xl lg:text-4xl"
              : "mt-1 text-[16px] font-semibold sm:text-[18px] lg:text-[19px]"
          }`}
        >
          {item.name}
        </h3>

        {item.desc && (
          <p className="mt-1 text-[15px] font-semibold leading-tight text-ink sm:text-[20px] lg:text-[24px]">
            {item.desc}
          </p>
        )}

        <p className={`font-medium text-copy line-through ${large ? "mt-1 text-[14px] sm:text-[16px]" : "text-[12px]"}`}>
          {formatPrice(item.previousPrice)}
        </p>

        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
          <span
            className={`whitespace-nowrap font-extrabold text-ink ${
              large ? "text-2xl min-[330px]:text-3xl" : "text-[18px] sm:text-[20px]"
            }`}
          >
            {formatPrice(item.currentPrice)}
          </span>
          <span className="text-[11px] text-ink sm:text-[14px]">{item.text}</span>
        </div>
      </div>

      <div className="flex w-[42%] items-center justify-center p-2 sm:w-[45%]">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className={`max-w-full object-contain transition-transform duration-500 group-hover:scale-105 ${
            large ? "max-h-64 sm:max-h-80 lg:max-h-96" : "max-h-36 sm:max-h-44"
          }`}
        />
      </div>
    </Link>
  );
}

export default function OffersProducts() {
  return (
    <Container className="mt-8 min-[330px]:mt-10 sm:mt-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="md:col-span-3">
          <PromoCard item={featured} large />
        </div>
        <div className="grid gap-4 md:col-span-2 md:grid-rows-2">
          {small.map((item) => (
            <PromoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
