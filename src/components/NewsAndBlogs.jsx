import { useState } from "react";
import { HiCalendarDateRange } from "react-icons/hi2";

export default function NewsAndBlogs() {
  const [show, setShow] = useState(false);
  const dataDivLeft = [
    {
      id: 1,
      img: "/images/Rectangle12.jpg",
      text: "Doctor",
      title: `In this section, we delve into
various aspects of health`,
      desc: `Explore the world of medical specialties through our blog's spotlight
feature. From cardiology to pediatrics, we share in-depth articles written
by our expert physicians.`,
      btnText: "Read More",
    },
  ];

  const dataDivRight = [
    {
      id: 1,
      img: "/images/Rectangle13.jpg",
      text: "Doctor",
      title: `Discover a treasure trove of practical
tips for enhancing`,
      desc: `From nutrition advice to exercise routines, we're
here to support your journey toward a healthier.`,
      btnText: "Read More",
    },
    {
      id: 2,
      img: "/images/Rectangle14.jpg",
      text: "Doctor",
      title: `Our patients' journeys are filled
with courage, resilience, and triumph.`,
      desc: `In this section, we share inspiring narratives of
individuals who have overcome health challenges.`,
      btnText: "Read More",
    },
    {
      id: 3,
      img: "/images/Rectangle15.jpg",
      text: "Doctor",
      title: `From organizing health fairs to
partnering with local organizations`,
      desc: `Find out how you can participate in community
events and contribute to the health.`,
      btnText: "Read More",
    },
  ];

  return (
    <div className="flex flex-col lg:justify-center lg:items-center mt-8 min-[330px]:mt-10 sm:mt-12 px-4 min-[330px]:px-5 sm:px-6 md:px-8 lg:px-14">
      <h1 className="text-[#020A13] font-bold text-xl min-[330px]:text-2xl sm:text-3xl md:text-4xl mb-5 min-[330px]:mb-6 sm:mb-8">
        Our Latest News & Blogs
      </h1>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">
        <div className="w-full md:w-1/2">
          {dataDivLeft.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-[14px] overflow-hidden bg-white md:min-h-105 lg:min-h-110"
            >
              <div className="flex flex-row md:flex-col min-h-55 md:min-h-0">
                <img
                  src={item.img}
                  className="w-35 min-[330px]:w-38 sm:w-45 min-[330px]:rounded-bl-[14px] lg:rounded-bl-none md:w-full h-55 md:h-65 lg:h-75 object-cover shrink-0"
                  alt={item.title}
                />

                <div className="flex flex-col p-2.5 min-[330px]:p-3 sm:p-4 gap-2 min-[330px]:gap-2.5 sm:gap-3 min-w-0 md:m-3 md:p-0">
                  <div className="flex flex-wrap items-center gap-2 min-[330px]:gap-3 sm:gap-5">
                    <p className="bg-[#007BFF0D] px-2 min-[330px]:px-3 py-1 rounded-md text-[#28A745] text-[10px] min-[330px]:text-[11px] sm:text-[14px] font-normal">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-1">
                      <HiCalendarDateRange className="text-[#373D45] w-3.5 h-3.5 min-[330px]:w-4 min-[330px]:h-4 sm:w-5 sm:h-5" />
                      <p className="text-[#373D45] text-[9px] min-[330px]:text-[10px] sm:text-[15px] font-normal whitespace-nowrap">
                        24 Dec, 2023
                      </p>
                    </div>
                  </div>

                  <h1 className="lg:whitespace-pre-line font-medium text-[14px] min-[330px]:text-[12px] sm:text-2xl md:text-3xl leading-4 min-[330px]:leading-5 sm:leading-6 md:leading-normal text-[#020A13]">
                    {item.title}
                  </h1>

                  <p
                    className={`lg:whitespace-pre-line text-[#373D45] text-[9px] min-[330px]:text-[10px] sm:text-[14px] md:text-[16px] leading-3.5 min-[330px]:leading-4 sm:leading-5 ${show ? "" : "min-[330px]:line-clamp-3 lg:line-clamp-none"}`}
                  >
                    {item.desc}
                  </p>

                  <button
                    onClick={() => setShow(!show)}
                    className="bg-[#28A745] w-fit px-2.5 min-[330px]:px-3 sm:px-5.5 py-1 min-[330px]:py-1.5
                     sm:py-2 rounded-md text-white text-[9px] outline-none min-[330px]:text-[10px] sm:text-[16px] font-normal
                     hover:cursor-pointer transition-all duration-300 ease-linear hover:scale-103 hover:bg-[#26c74c]"
                  >
                    {item.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5">
          {dataDivRight.map((item) => (
            <div
              key={item.id}
              className="flex w-full h-50 min-[330px]:h-55 sm:h-60 md:h-50 lg:h-51.5 rounded-[14px] overflow-hidden bg-white"
            >
              <img
                src={item.img}
                className="w-35 min-[330px]:w-33 min-[330px]:object-right sm:w-48 md:w-40 lg:w-44 h-full object-cover shrink-0"
                alt={item.title}
              />

              <div className="flex flex-col p-2 min-[330px]:p-2.5 sm:p-3 gap-1.5 min-[330px]:gap-2 min-w-0">
                <div className="flex flex-wrap items-center gap-2 min-[330px]:gap-3">
                  <p className="bg-[#007BFF0D] px-1.5 min-[330px]:px-2 py-0.5 rounded-md text-[#28A745] text-[9px] min-[330px]:text-[10px] sm:text-[12px] font-normal">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-1">
                    <HiCalendarDateRange className="text-[#373D45] w-3 h-3 min-[330px]:w-3.5 min-[330px]:h-3.5" />
                    <p className="text-[#373D45] text-[9px] min-[330px]:text-[10px] sm:text-[13px] font-normal whitespace-nowrap">
                      24 Dec, 2023
                    </p>
                  </div>
                </div>

                <h1 className="lg:whitespace-pre-line font-medium text-[13px] min-[330px]:text-[12px] sm:text-[17px] leading-4 min-[330px]:leading-5 sm:leading-6 text-[#020A13]">
                  {item.title}
                </h1>

                <p className="lg:whitespace-pre-line text-[#373D45] text-[9px] min-[330px]:text-[10px] sm:text-[13px] leading-3.5 min-[330px]:leading-4 sm:leading-5">
                  {item.desc}
                </p>

                <button
                  className="bg-[#28A745] w-fit px-2 min-[330px]:px-2.5 sm:px-3 py-1 rounded-md
                 text-white text-[9px] min-[330px]:text-[10px] sm:text-[12px] font-normal
                 hover:cursor-pointer transition-all duration-300 ease-linear hover:scale-103 hover:bg-[#26c74c]"
                >
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
