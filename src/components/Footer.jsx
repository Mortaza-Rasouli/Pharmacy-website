import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Container from "./Container";
import Modal from "./Modal";
import { FOOTER_INFO } from "../data/footerInfo";
import { SITE } from "../data/site";

const linkColumns = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Specialties",
    items: [
      "Anesthesiology",
      "Psychiatry",
      "General surgery",
      "Family medicine",
      "Pediatrics",
    ].map((label) => ({ label, info: label })),
  },
  {
    title: "Services",
    items: ["Medical", "Operation", "Laboratory", "ICU", "Patient Ward"].map(
      (label) => ({ label, info: label }),
    ),
  },
];

const socials = [
  {
    label: "Facebook",
    to: "/notfound",
    icon: FaFacebookF,
    hover: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
  {
    label: "LinkedIn",
    to: "/notfound",
    icon: FaLinkedinIn,
    hover: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    label: "Instagram",
    to: "/notfound",
    icon: FiInstagram,
    hover: "hover:bg-[#E4405F] hover:border-[#E4405F]",
  },
  {
    label: "YouTube",
    to: "/notfound",
    icon: AiFillYoutube,
    hover: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
];

const headingClass =
  "text-[18px] font-semibold text-white min-[330px]:text-[20px]";
const textClass =
  "text-[13px] font-medium text-[#E0EEF9] min-[330px]:text-[14px] sm:text-[15px] lg:text-[16px]";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const [active, setActive] = useState(null);
  const closeModal = useCallback(() => setActive(null), []);
  const info = active ? FOOTER_INFO[active] : null;

  return (
    <footer className="mt-8 w-full bg-[#304A2F] min-[330px]:mt-10 sm:mt-12">
      <Container className="py-8 min-[330px]:py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-8 border-b border-[#FFFFFF3B] pb-8 min-[480px]:grid-cols-2 min-[330px]:pb-10 lg:grid-cols-3 xl:grid-cols-5">
          {/* Contact */}
          <div className="min-w-0 space-y-3">
            <h2 className={`${headingClass} mb-1`}>Contact</h2>

            <p className={`flex items-start gap-2 leading-5 ${textClass}`}>
              <IoLocationOutline className="mt-0.5 h-4 w-4 shrink-0 min-[330px]:h-5 min-[330px]:w-5" />
              <span>{SITE.address}</span>
            </p>

            <a
              href={SITE.phoneHref}
              className={`flex items-center gap-2 hover:underline ${textClass}`}
            >
              <FaPhoneAlt className="h-3.5 w-3.5 shrink-0 min-[330px]:h-4 min-[330px]:w-4" />
              <span>{SITE.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className={`flex items-start gap-2 break-all hover:underline ${textClass}`}
            >
              <MdOutlineMail className="mt-0.5 h-4 w-4 shrink-0 min-[330px]:h-5 min-[330px]:w-5" />
              <span>{SITE.email}</span>
            </a>
          </div>

          {/* Link columns */}
          {linkColumns.map((column) => (
            <div key={column.title} className="min-w-0">
              <h2 className={`${headingClass} mb-3`}>{column.title}</h2>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className={`${textClass} hover:underline`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActive(item.info)}
                        className={`${textClass} cursor-pointer text-left hover:underline`}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="min-w-0">
            <h2 className={`${headingClass} mb-3`}>Social Media</h2>
            <div className="flex flex-wrap gap-3 min-[330px]:gap-4 lg:flex-nowrap lg:items-center">
              {socials.map(({ label, to, icon: Icon, hover }) => (
                <Link
                  key={label}
                  to={to}
                  aria-label={label}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-300 ease-linear hover:scale-110 ${hover}`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 min-[330px]:gap-4 min-[330px]:pt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p className="text-[12px] text-[#E0EEF9] sm:text-[14px] lg:text-[16px]">
            © {YEAR} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-col gap-2 min-[330px]:flex-row min-[330px]:gap-4 sm:gap-5">
            {["Terms and Conditions", "Privacy Policy"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                className="cursor-pointer text-left text-[12px] text-[#E0EEF9] hover:underline sm:text-[14px] lg:text-[16px]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </Container>

      {info && (
        <Modal title={info.title} onClose={closeModal}>
          <p>{info.text}</p>
          {info.contact && (
            <Link
              to="/contact"
              onClick={closeModal}
              className="mt-5 inline-block rounded-md bg-brand px-5 py-2 text-[14px] font-medium text-white transition-colors hover:bg-brand-hover sm:text-[16px]"
            >
              Contact Us
            </Link>
          )}
        </Modal>
      )}
    </footer>
  );
}
