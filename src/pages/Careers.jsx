import { FaClock, FaHeartbeat, FaUserMd } from "react-icons/fa";
import Container from "../components/Container";
import PageBanner from "../components/PageBanner";
import { SITE } from "../data/site";

const perks = [
  { icon: FaHeartbeat, title: "Health Benefits", text: "Medical cover for you and discounts on everything in our store.", bg: "bg-[#BFE5C7]" },
  { icon: FaClock, title: "Flexible Schedules", text: "Shifts and remote options that fit around your life.", bg: "bg-[#FAEDC9]" },
  { icon: FaUserMd, title: "Learning & Growth", text: "Training and mentoring from experienced pharmacists and doctors.", bg: "bg-[#F8ECFE]" },
];

const positions = [
  { id: 1, title: "Pharmacist", type: "Full-time", place: "Dhaka" },
  { id: 2, title: "Customer Support Specialist", type: "Full-time", place: "Remote" },
  { id: 3, title: "Delivery Coordinator", type: "Full-time", place: "Dhaka" },
  { id: 4, title: "Inventory Manager", type: "Full-time", place: "Dhaka" },
  { id: 5, title: "Frontend Developer", type: "Contract", place: "Remote" },
];

export default function Careers() {
  return (
    <>
      <PageBanner
        title="Careers"
        subtitle="Join a team that makes healthcare easier and more affordable for everyone."
      />

      <Container as="section" className="mt-10 sm:mt-14">
        <h2 className="mb-5 text-xl font-bold text-ink min-[330px]:text-2xl sm:mb-8 sm:text-3xl">
          Why Work With Us
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {perks.map(({ icon: Icon, title, text, bg }) => (
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

      <Container as="section" className="mt-10 sm:mt-14">
        <h2 className="mb-5 text-xl font-bold text-ink min-[330px]:text-2xl sm:mb-8 sm:text-3xl">
          Open Positions
        </h2>
        <ul className="space-y-3 sm:space-y-4">
          {positions.map((job) => (
            <li
              key={job.id}
              className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-md transition-all duration-300 ease-linear hover:shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-5"
            >
              <div>
                <h3 className="text-[17px] font-bold text-ink sm:text-xl">{job.title}</h3>
                <p className="mt-1 flex flex-wrap gap-2 text-[13px]">
                  <span className="rounded-md bg-[#007BFF0D] px-2.5 py-1 text-brand">{job.type}</span>
                  <span className="rounded-md bg-gray-100 px-2.5 py-1 text-copy">{job.place}</span>
                </p>
              </div>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                className="w-fit rounded-md bg-brand px-5 py-2 text-[14px] font-medium text-white transition-all duration-300 ease-linear hover:scale-103 hover:bg-brand-hover sm:text-[16px]"
              >
                Apply Now
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
