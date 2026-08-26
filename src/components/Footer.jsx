import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  const dataContact = [
    {
      id: 1,
      title: "Contact",
      address: "123 Road, Dhaka, Bangladesh",
      phoneNumber: 88017010767000,
      email: "sajiburdemo121@gmail.com",
    },
  ];

  const data = [
    {
      id: 1,
      title: "Quick Links",
      items: ["Home", "About", "Services", "Careers", "Contact"],
    },
    {
      id: 2,
      title: "Specialties",
      items: [
        "Anesthesiology",
        "Psychiatry",
        "General surgery",
        "Family medicine",
        "Pediatrics",
      ],
    },
    {
      id: 3,
      title: "Services",
      items: ["Medical", "Operation", "Laboratory", "ICU", "Patient Ward"],
    },
  ];

  return (
    <footer className="w-full bg-[#304A2F] mt-8 min-[330px]:mt-10 sm:mt-12">
      <div className="mx-4 min-[330px]:mx-5 sm:mx-6 md:mx-8 lg:mx-14 py-8 min-[330px]:py-10 sm:py-12">
        <div
          className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 min-[330px]:gap-9 sm:gap-10 md:gap-6
            lg:flex lg:flex-row lg:gap-20 py-0 pb-8 min-[330px]:pb-10 lg:py-10 lg:pb-10
            border-b border-[#FFFFFF3B]"
        >
          <div className="min-w-0 lg:shrink-0">
            {dataContact.map((item) => (
              <div
                key={item.id}
                className="space-y-3 flex flex-col items-start"
              >
                <h1 className="text-[#FFFFFF] mb-2 min-[330px]:mb-3 lg:mb-4 font-semibold text-[18px] min-[330px]:text-[20px]">
                  {item.title}
                </h1>

                <p className="flex items-start gap-2 text-[13px] min-[330px]:text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-[#E0EEF9] leading-5">
                  <IoLocationOutline className="w-4 h-4 min-[330px]:w-5 min-[330px]:h-5 shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </p>

                <p className="flex items-center gap-2 text-[13px] min-[330px]:text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-[#E0EEF9]">
                  <FaPhoneAlt className="w-3.5 h-3.5 min-[330px]:w-4 min-[330px]:h-4 shrink-0" />
                  <span>+{item.phoneNumber}</span>
                </p>

                <p className="flex items-start gap-2 text-[13px] min-[330px]:text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-[#E0EEF9] break-all">
                  <MdOutlineMail className="w-4 h-4 min-[330px]:w-5 min-[330px]:h-5 shrink-0 mt-0.5" />
                  <span>{item.email}</span>
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              flex flex-col sm:contents md:contents lg:flex lg:flex-row lg:gap-20"
          >
            {data.map((item) => (
              <div key={item.id} className="min-w-0">
                <div className="lg:space-y-3 min-[330px]:space-y-2 mb-5">
                  <h1 className="text-[#FFFFFF] font-semibold text-[18px] min-[330px]:mt min-[330px]:text-[20px]">
                    {item.title}
                  </h1>

                  <Link to="/notfound">
                    <div className="space-y-2 min-[330px]:space-y-2">
                      {item.items.map((item) => (
                        <p
                          key={item}
                          className="text-[#E0EEF9] hover:cursor-pointer font-medium text-[13px]
                        min-[330px]:text-[14px] sm:text-[15px] lg:text-[16px] hover:underline"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* social media */}
          <div className="min-w-0 lg:shrink-0">
            <div className="space-y-3 min-[330px]:space-y-4">
              <h1 className="text-[#FFFFFF] font-semibold text-[18px] min-[330px]:text-[20px]">
                Social Media
              </h1>

              <div className="flex flex-wrap gap-3 min-[330px]:gap-4 lg:gap-5">
                <Link
                  to="/notfound"
                  className="w-9 h-9 min-[330px]:w-10 min-[330px]:h-10 border-2 flex 
                justify-center items-center border-[#FFFFFF] rounded-full
               hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 ease-linear hover:scale-110 cursor-pointer"
                >
                  <FaFacebookF className="w-5 h-5 min-[330px]:w-6 min-[330px]:h-6 text-[#FFFFFF]" />
                </Link>

                <Link
                  to="/notfound"
                  className="w-9 h-9 min-[330px]:w-10 min-[330px]:h-10 border-2 flex justify-center
                 items-center border-[#FFFFFF] rounded-full
                hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 ease-linear hover:scale-110 cursor-pointer"
                >
                  <FaLinkedinIn className="w-5 h-5 min-[330px]:w-6 min-[330px]:h-6 text-[#FFFFFF]" />
                </Link>

                <Link
                  to="/notfound"
                  className="w-9 h-9 min-[330px]:w-10 min-[330px]:h-10 border-2 flex justify-center
                 items-center border-[#FFFFFF] rounded-full
                 cursor-pointer hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300 ease-linear hover:scale-110"
                >
                  <FiInstagram className="w-5 h-5 min-[330px]:w-6 min-[330px]:h-6 text-[#FFFFFF]" />
                </Link>

                <Link
                  to="/notfound"
                  className="w-9 h-9 min-[330px]:w-10 min-[330px]:h-10 border-2 flex justify-center
                 items-center border-[#FFFFFF] rounded-full hover:scale-107 cursor-pointer hover:border-[#FF0000] hover:bg-[#FF0000] transition-all duration-300 ease-linear"
                >
                  <AiFillYoutube className="w-6 h-5 min-[330px]:w-7 min-[330px]:h-6 text-[#FFFFFF]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            flex flex-col min-[330px]:flex-col sm:flex-row justify-between items-start sm:items-center
             gap-3 min-[330px]:gap-4 sm:gap-5 pt-6 min-[330px]:pt-7 sm:pt-8 lg:mt-0"
        >
          <p className="text-[#E0EEF9] text-[11px] min-[330px]:text-[12px] sm:text-[14px] lg:text-[16px] font-normal">
            © 2023 HEALTHY. All rights reserved.
          </p>

          <div className="flex flex-col min-[330px]:flex-row gap-2 min-[330px]:gap-4 sm:gap-5">
            <p className="text-[#E0EEF9] text-[11px] min-[330px]:text-[12px] sm:text-[14px] lg:text-[16px] font-normal">
              Terms and Conditions
            </p>

            <p className="text-[#E0EEF9] text-[11px] min-[330px]:text-[12px] sm:text-[14px] lg:text-[16px] font-normal">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
