import { useState } from "react";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { IoCheckmarkCircleOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Container from "../components/Container";
import PageBanner from "../components/PageBanner";
import { SITE } from "../data/site";

const info = [
  { icon: IoLocationOutline, label: "Address", value: SITE.address, bg: "bg-[#BFE5C7]" },
  { icon: FaPhoneAlt, label: "Phone", value: SITE.phoneDisplay, href: SITE.phoneHref, bg: "bg-[#FAEDC9]" },
  { icon: MdOutlineMail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, bg: "bg-[#C5EF99]" },
  { icon: FaClock, label: "Opening Hours", value: SITE.hours, bg: "bg-[#F8ECFE]" },
];

const empty = { name: "", email: "", subject: "", message: "" };
const fieldClass =
  "w-full rounded-lg border bg-white px-3 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    // TODO: send `values` to your backend / email service here.
    setValues(empty);
    setSent(true);
  };

  const field = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: `${fieldClass} ${errors[name] ? "border-red-500" : "border-gray-300"}`,
  });

  const error = (name) =>
    errors[name] && (
      <p id={`${name}-error`} className="mt-1 text-[13px] text-red-500">
        {errors[name]}
      </p>
    );

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Questions about an order or a product? We're happy to help." />

      <Container className="mt-10 sm:mt-14">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {info.map(({ icon: Icon, label, value, href, bg }) => (
              <li key={label} className={`flex items-start gap-4 rounded-[14px] p-4 sm:p-5 ${bg}`}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-lg text-brand">
                  <Icon />
                </span>
                <div className="min-w-0">
                  <h2 className="text-[16px] font-bold text-ink">{label}</h2>
                  {href ? (
                    <a href={href} className="break-all text-[14px] text-copy hover:underline sm:text-[15px]">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[14px] text-copy sm:text-[15px]">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 rounded-[14px] bg-white p-5 shadow-md sm:p-8 lg:col-span-3"
          >
            <h2 className="text-xl font-bold text-ink sm:text-2xl">Send us a message</h2>

            {sent && (
              <p role="status" className="flex items-center gap-2 rounded-lg bg-brand/10 px-3 py-2.5 text-[14px] font-medium text-brand-hover">
                <IoCheckmarkCircleOutline className="text-xl" /> Thank you! Your message has been sent.
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-[14px] font-semibold text-copy">Name</label>
                <input type="text" autoComplete="name" {...field("name")} />
                {error("name")}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-[14px] font-semibold text-copy">Email</label>
                <input type="email" autoComplete="email" {...field("email")} />
                {error("email")}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1 block text-[14px] font-semibold text-copy">Subject</label>
              <input type="text" {...field("subject")} />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-[14px] font-semibold text-copy">Message</label>
              <textarea rows={5} {...field("message")} />
              {error("message")}
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-brand px-6 py-3 text-[16px] font-bold text-white transition-colors hover:bg-brand-hover sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </>
  );
}
