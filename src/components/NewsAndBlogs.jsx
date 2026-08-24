// import { HiCalendarDateRange } from "react-icons/hi2";

// export default function NewsAndBlogs() {
//   const dataDivLeft = [
//     {
//       img: "../../public/images/Rectangle12.jpg",
//       text: "Doctor",
//       title: `In this section, we delve into
//       various aspects of health`,
//       desc: `Explore the world of medical specialties through our blog's spotlight
//       feature. From cardiology to pediatrics, we share in-depth articles written
//       by our expert physicians.`,
//       btnText: "Read More",
//     },
//   ];

//   const dataDivRight = [
//     {
//       id: 1,
//       img: "../../public/images/Rectangle13.jpg",
//       text: "Doctor",
//       title: `Discover a treasure trove of practical tips
//       for enhancing`,
//       desc: `From nutrition advice to exercise routines, we're
//       here to support your journey toward a healthier`,
//       btnText: "Read More",
//     },
//     {
//       id: 2,
//       img: "../../public/images/Rectangle14.jpg",
//       text: "Doctor",
//       title: `Our patients' journeys are filled with
//       courage, resilience, and triumph.`,
//       desc: `In this section, we share inspiring narratives of
//       individuals who have overcome health challenges.`,
//       btnText: "Read More",
//     },
//     {
//       id: 3,
//       img: "../../public/images/Rectangle15.jpg",
//       text: "Doctor",
//       title: `From organizing health fairs to
//       partnering with local organizations`,
//       desc: `Find out how you can participate in community
//       events and contribute to the health.`,
//       btnText: "Read More",
//     },
//   ];
//   return (
//     <>
//       <div className="my-20 px-14  gap-6">
//         <h1 className="text-[#020A13] font-bold text-4xl">
//           Our Latest News & Blogs
//         </h1>
//         <div className="flex gap-8">
//           <div>
//             {/* left card */}
//             <div>
//               {dataDivLeft.map((item) => (
//                 <div key={item}>
//                   {/* image */}
//                   <img
//                     src={item.img}
//                     className="h-90 rounded-t-[14px] object-contain"
//                   />
//                   {/* text */}
//                   <div className="m-4 space-y-3">
//                     <div className="flex  gap-6">
//                       <p className="bg-[#007BFF0D] px-3 py-1 rounded-md text-[#28A745] text-[14px] font-normal">
//                         {item.text}
//                       </p>
//                       {/* date */}
//                       <div className="flex justify-center items-center gap-2">
//                         <span className="">
//                           <HiCalendarDateRange className="text-[#373D45] w-5 h-5" />
//                         </span>
//                         <p className="text-[#373D45] text-[15px] font-normal">
//                           24 Dec, 2023
//                         </p>
//                       </div>
//                     </div>
//                     <h1 className="whitespace-pre-line font-medium text-3xl text-[#020A13]">
//                       {item.title}
//                     </h1>
//                     <p className="whitespace-pre-line text-[#373D45] text-[16px]">
//                       {item.desc}
//                     </p>
//                     <button className="bg-[#28A745] px-5.5 py-2 rounded-md text-[#FFFFFF] text-[16px] font-normal">
//                       {item.btnText}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* right card  */}
//           <div>
//             {dataDivRight.map((item) => (
//               <div key={item.id} className="flex bg-amber-300">
//                 <img src={item.img} className="h-50 w-55 object-cover" />
//                 <div className="m-4 space-y-1">
//                   <div className="flex  gap-4">
//                     <p className="bg-[#007BFF0D] px-2 py-0.5 rounded-md text-[#28A745] text-[12px] font-normal">
//                       {item.text}
//                     </p>
//                     {/* date */}
//                     <div className="flex justify-center items-center gap-2">
//                       <span className="">
//                         <HiCalendarDateRange className="text-[#373D45] w-3.3 h-3.3" />
//                       </span>
//                       <p className="text-[#373D45] text-[13px] font-normal">
//                         24 Dec, 2023
//                       </p>
//                     </div>
//                   </div>
//                   <h1 className="whitespace-pre-line font-medium text-[20px] text-[#020A13]">
//                     {item.title}
//                   </h1>
//                   <p className="whitespace-pre-line text-[#373D45] text-[14px]">
//                     {item.desc}
//                   </p>
//                   <button className="bg-[#28A745] px-3 py-1 rounded-md text-[#FFFFFF] text-[12px] font-normal">
//                     {item.btnText}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { HiCalendarDateRange } from "react-icons/hi2";

export default function NewsAndBlogs() {
  const dataDivLeft = [
    {
      id: 1,
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

  const dataDivRight = [
    {
      id: 1,
      img: "../../public/images/Rectangle13.jpg",
      text: "Doctor",
      title: `Discover a treasure trove of practical
      tips for enhancing`,
      desc: `From nutrition advice to exercise routines, we're
here to support your journey toward a healthier.`,
      btnText: "Read More",
    },
    {
      id: 2,
      img: "../../public/images/Rectangle14.jpg",
      text: "Doctor",
      title: `Our patients' journeys are filled 
      with courage, resilience, and triumph.`,
      desc: `In this section, we share inspiring narratives of
individuals who have overcome health challenges.`,
      btnText: "Read More",
    },
    {
      id: 3,
      img: "../../public/images/Rectangle15.jpg",
      text: "Doctor",
      title: `From organizing health fairs to
partnering with local organizations`,
      desc: `Find out how you can participate in community
events and contribute to the health.`,
      btnText: "Read More",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-12 px-14">
      <h1 className="text-[#020A13] font-bold text-4xl mb-8">
        Our Latest News & Blogs
      </h1>
      {/* left card */}
      <div className="flex gap-6">
        <div className="w-1/2">
          {dataDivLeft.map((item) => (
            <div key={item.id} className="rounded-[14px] overflow-hidden">
              <img
                src={item.img}
                className="w-full h-90 rounded-t-[14px] object-cover"
              />

              <div className="m-4 space-y-3">
                <div className="flex gap-6 items-center">
                  <p className="bg-[#007BFF0D] px-3 py-1 rounded-md text-[#28A745] text-[14px] font-normal">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-2">
                    <HiCalendarDateRange className="text-[#373D45] w-5 h-5" />

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

                <button className="bg-[#28A745] px-5.5 py-2 rounded-md text-white text-[16px] font-normal">
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* right cards */}
        <div className=" flex flex-col gap-5">
          {dataDivRight.map((item) => (
            <div
              key={item.id}
              className="flex w-full h-50 rounded-[14px] overflow-hidden"
            >
              <img src={item.img} className="w-55 h-50 object-cover shrink-0" />

              <div className="pl-2.5 pt-2.5 flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <p className="bg-[#007BFF0D] px-2 py-0.5 rounded-md text-[#28A745] text-[12px] font-normal">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-2">
                    <HiCalendarDateRange className="text-[#373D45] w-3.5 h-3.5" />

                    <p className="text-[#373D45] text-[13px] font-normal">
                      24 Dec, 2023
                    </p>
                  </div>
                </div>

                <h1 className="whitespace-pre-line font-medium text-[17px] leading-6 text-[#020A13]">
                  {item.title}
                </h1>

                <p className="whitespace-pre-line text-[#373D45] text-[13px] leading-5">
                  {item.desc}
                </p>
                <button className="bg-[#28A745] w-fit px-3 py-1 rounded-md text-white text-[12px] font-normal">
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
