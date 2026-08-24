import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

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
    <>
      <div className="bg-[#304A2F] flex flex-col  justify-center  mt-12 min-h-100 w-full">
        <div className="mx-14 flex gap-20 py-10 border-b border-[#FFFFFF3B]">
          {/* contact */}
          <div>
            {dataContact.map((item) => (
              <div
                key={item.id}
                className="space-y-3 flex flex-col items-start"
              >
                <h1 className="text-[#FFFFFF] mb-4 font-semibold text-[20px]">
                  {item.title}
                </h1>
                <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#E0EEF9]">
                  <span>
                    <IoLocationOutline />
                  </span>
                  {item.address}
                </p>
                <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#E0EEF9]">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  +{item.phoneNumber}
                </p>
                <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#E0EEF9]">
                  <span>
                    <MdOutlineMail />
                  </span>
                  {item.email}
                </p>
              </div>
            ))}
          </div>

          {/* other sections */}
          <div className="flex gap-20">
            {data.map((item) => (
              <div className="space-y-4" key={item.id}>
                <h1 className="text-[#FFFFFF] font-semibold text-[20px]">
                  {item.title}
                </h1>
                <div className="space-y-3">
                  {item.items.map((item) => (
                    <p
                      key={item}
                      className="text-[#E0EEF9] font-medium text-[16px]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* social media */}
          <div className="space-y-4">
            <h1 className="text-[#FFFFFF] font-semibold text-[20px]">
              Social Media
            </h1>
            <div className="flex gap-5">
              <div className="w-10 h-10 border-2 flex justify-center items-center border-[#FFFFFF] rounded-full">
                <FaFacebookF className="w-6 h-6 text-[#FFFFFF]" />
              </div>
              <div className="w-10 h-10 border-2 flex justify-center items-center border-[#FFFFFF] rounded-full">
                <FaLinkedinIn className="w-6 h-6 text-[#FFFFFF]" />
              </div>

              <div className="w-10 h-10 border-2 flex justify-center items-center border-[#FFFFFF] rounded-full">
                <FiInstagram className="w-6 h-6 text-[#FFFFFF]" />
              </div>

              <div className="w-10 h-10 border-2 flex justify-center items-center border-[#FFFFFF] rounded-full">
                <AiFillYoutube className="w-7 h-6 text-[#FFFFFF]" />
              </div>
            </div>
          </div>
        </div>
        
        {/* ===== */}
        <div className="flex justify-between items-center mx-14 mt-7">
          <p className="text-[#E0EEF9] text-16px] font-normal">
            © 2023 HEALTHY. All rights reserved.
          </p>

          <div className="flex gap-5">
            <p className="text-[#E0EEF9] text-[16px] font-normal">
              Terms and Conditions
            </p>
            <p className="text-[#E0EEF9] text-16px] font-normal">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
