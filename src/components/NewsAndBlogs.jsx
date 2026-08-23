import { HiCalendarDateRange } from "react-icons/hi2";

export default function NewsAndBlogs() {
  const dataDivLeft = [
    {
      img: "../../public/images/Rectangle12.jpg",
      text: "Doctor",
      title: `In this section, we delve into
      various aspects of health`,
      desc: `Explore the world of medical specialties through our blog's spotlight
      feature. From cardiology to pediatrics, we share in-depth articles written
      by our expert physicians.`,
      btnText: "Read More",
    },
  ];
  return (
    <>
      <div className="my-20 px-14 flex flex-col items-center justify-center gap-6">
        <h1 className="text-[#020A13] font-bold text-4xl">
          Our Latest News & Blogs
        </h1>
        <div className="flex gap-5">
          {/* right card */}
          <div>
            {dataDivLeft.map((item) => (
              <div key={item}>
                {/* image */}
                <img
                  src={item.img}
                  className="h-90 rounded-t-[14px] object-contain"
                />
                {/* text */}
                <div className="m-4 space-y-3">
                  <div className="flex  gap-6">
                    <p className="bg-[#007BFF0D] px-3 py-1 rounded-md text-[#28A745] text-[14px] font-normal">
                      {item.text}
                    </p>
                    {/* date */}
                    <div className="flex justify-center items-center gap-2">
                      <span className="">
                        <HiCalendarDateRange className="text-[#373D45] w-5 h-5" />
                      </span>
                      <p className="text-[#373D45] text-[15px] font-normal">
                        24 Dec, 2023
                      </p>
                    </div>
                  </div>
                  <h1 className="whitespace-pre-line font-medium text-3xl text-[#020A13]">
                    {item.title}
                  </h1>
                  <p className="whitespace-pre-line text-[#373D45] text-[16px]">
                    {item.desc}
                  </p>
                  <button className="bg-[#28A745] px-5.5 py-2.5 rounded-md text-[#FFFFFF] text-[14px] font-normal">
                    {item.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
