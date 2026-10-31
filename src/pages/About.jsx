import { Link } from "react-router-dom";
import { FaHeartbeat, FaShieldAlt, FaTruck } from "react-icons/fa";
import Container from "../components/Container";
import PageBanner from "../components/PageBanner";
import Statistics from "../components/Statistics";

const values = [
  {
    icon: FaShieldAlt,
    title: "Quality You Can Trust",
    text: "Every product comes from licensed suppliers and is checked before it reaches your door.",
    bg: "bg-[#BFE5C7]",
  },
  {
    icon: FaTruck,
    title: "Fast, Free Delivery",
    text: "Order from home and get your essentials delivered quickly, with free delivery on larger orders.",
    bg: "bg-[#FAEDC9]",
  },
  {
    icon: FaHeartbeat,
    title: "Care That Comes First",
    text: "Our pharmacists and doctors are always ready to help you choose what is right for you.",
    bg: "bg-[#F8ECFE]",
  },
];

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Affordable, trustworthy healthcare products — delivered with care."
      />

      <Container as="section" className="mt-10 sm:mt-14">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-14">
          <div className="space-y-4">
            <p className="text-[14px] font-semibold uppercase tracking-wide text-brand sm:text-[16px]">
              Our Story
            </p>
            <h2 className="text-2xl font-extrabold leading-tight text-ink sm:text-4xl">
              Making health solutions simple and affordable
            </h2>
            <p className="text-[14px] leading-relaxed text-copy sm:text-[16px]">
              Medico Store started with a simple idea: everyone deserves easy access to quality
              medicines and medical equipment without paying more than they should. Today we serve
              thousands of customers, from families stocking a first-aid cabinet to clinics
              equipping their wards.
            </p>
            <p className="text-[14px] leading-relaxed text-copy sm:text-[16px]">
              Our team of pharmacists, doctors and support staff works every day to keep our
              catalogue current, our prices fair and our service friendly.
            </p>
            <Link
              to="/products"
              className="inline-block rounded-md bg-brand px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-300 ease-linear hover:scale-103 hover:bg-brand-hover sm:text-[16px]"
            >
              Explore Our Products →
            </Link>
          </div>

          <div className="flex justify-center rounded-[14px] bg-[#F6FAFF] p-6 sm:p-10">
            <img
              src="/images/doctor.png"
              alt="Our doctor"
              loading="lazy"
              className="-scale-x-100 h-64 object-contain sm:h-80 lg:h-96"
            />
          </div>
        </div>
      </Container>

      <Container as="section" className="mt-10 sm:mt-14">
        <h2 className="mb-5 text-center text-xl font-bold text-ink min-[330px]:text-2xl sm:mb-8 sm:text-3xl">
          What We Stand For
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text, bg }) => (
            <li
              key={title}
              className={`rounded-[14px] p-5 transition-all duration-300 ease-linear hover:-translate-y-1.5 hover:shadow-xl sm:p-6 ${bg}`}
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl text-brand">
                <Icon />
              </span>
              <h3 className="mb-2 text-[18px] font-bold text-ink">{title}</h3>
              <p className="text-[14px] leading-relaxed text-copy sm:text-[15px]">{text}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Statistics />
    </>
  );
}
