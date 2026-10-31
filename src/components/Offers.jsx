import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import Container from "./Container";

const data = [
  { id: 1, icon: "/icons/price-tag.png", title: "Get 25% OFF", bg: "bg-[#28A745]/30", to: "/products" },
  { id: 2, icon: "/icons/delivery.png", title: "Free Home Delivery", bg: "bg-[#F4D279]/40", to: "/services" },
  { id: 3, icon: "/icons/Group.png", title: "Doctor's Appointment", bg: "bg-[#6FD600]/40", to: "/contact" },
  { id: 4, icon: "/icons/health.png", title: "Health Advice", bg: "bg-[#EDCFFC]/40", to: "/services" },
];

export default function Offers() {
  return (
    <Container className="mt-6 min-[330px]:mt-8 sm:mt-10 lg:mt-12">
      <ul className="grid grid-cols-1 gap-3 min-[330px]:gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              to={item.to}
              className={`flex min-h-20 items-center justify-between rounded-xl py-4 transition-all duration-300 ease-linear hover:-translate-y-1.5 hover:shadow-xl min-[330px]:min-h-24 ${item.bg}`}
            >
              <span className="flex items-center gap-3 pl-4">
                <img src={item.icon} alt="" className="h-8 w-8 object-contain" />
                <span className="text-[16px] font-bold text-ink lg:text-[18px]">
                  {item.title}
                </span>
              </span>
              <IoChevronForward className="mr-4 shrink-0 text-ink" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
