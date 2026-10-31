import { Link } from "react-router-dom";
import {
  FaClinicMedical,
  FaFlask,
  FaHeadset,
  FaPills,
  FaPrescriptionBottleAlt,
  FaStethoscope,
  FaTruck,
  FaUserMd,
} from "react-icons/fa";
import Container from "../components/Container";
import PageBanner from "../components/PageBanner";

const services = [
  { icon: FaPills, title: "Medicines & Supplements", text: "A wide range of prescription and over-the-counter medicines at fair prices.", bg: "bg-[#BFE5C7]" },
  { icon: FaTruck, title: "Free Home Delivery", text: "Fast doorstep delivery so you never have to leave home when you're unwell.", bg: "bg-[#FAEDC9]" },
  { icon: FaUserMd, title: "Doctor's Appointment", text: "Book a consultation with experienced doctors across many specialties.", bg: "bg-[#C5EF99]" },
  { icon: FaStethoscope, title: "Health Advice", text: "Friendly guidance on nutrition, exercise and managing everyday conditions.", bg: "bg-[#F8ECFE]" },
  { icon: FaFlask, title: "Laboratory Tests", text: "Reliable lab testing with quick, easy-to-read results.", bg: "bg-[#BFE5C7]" },
  { icon: FaPrescriptionBottleAlt, title: "Prescription Refills", text: "Upload a prescription and we'll prepare your refill, ready when you are.", bg: "bg-[#FAEDC9]" },
  { icon: FaClinicMedical, title: "Medical Equipment", text: "Wheelchairs, hospital beds, monitors and more for home and clinic use.", bg: "bg-[#C5EF99]" },
  { icon: FaHeadset, title: "24/7 Support", text: "Our support team is available any time to answer questions about your order.", bg: "bg-[#F8ECFE]" },
];

export default function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Everything you need for your health, in one trusted place."
      />

      <Container as="section" className="mt-10 sm:mt-14">
        <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text, bg }) => (
            <li
              key={title}
              className={`rounded-[14px] p-5 transition-all duration-300 ease-linear hover:-translate-y-1.5 hover:shadow-xl sm:p-6 ${bg}`}
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl text-brand">
                <Icon />
              </span>
              <h2 className="mb-2 text-[18px] font-bold text-ink">{title}</h2>
              <p className="text-[14px] leading-relaxed text-copy">{text}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-10 sm:mt-14">
        <div className="flex flex-col items-center gap-4 rounded-[14px] bg-forest px-5 py-8 text-center sm:px-10 sm:py-12">
          <h2 className="text-xl font-extrabold text-white sm:text-3xl">
            Need help choosing the right service?
          </h2>
          <p className="max-w-xl text-[14px] text-[#CCE5FF] sm:text-[16px]">
            Talk to our team — we'll point you in the right direction.
          </p>
          <Link
            to="/contact"
            className="rounded-lg bg-white px-6 py-2.5 text-[15px] font-semibold text-brand transition-all duration-500 hover:scale-103 sm:text-[16px]"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </>
  );
}
