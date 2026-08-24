//  export default function OffersProducts() {
//   const dataDivLeft = [
//     {
//       id: 1,
//       DiscountAmount: 25,
//       name: "BLACK GARLIC OIL",
//       desc: `Stronger and Thicker
// Hair With Black Garlic
// Oil.`,
//       previousPrice: 37.0,
//       currentPrice: 23.0,
//       text: "Including Tax",
//       img: "/images/kara-sarimsak-yagi.png",
//     },
//   ];

//   const dataDivRight = [
//     {
//       id: 1,
//       DiscountAmount: 25,
//       name: "Dental Care Set for Vivid and Bright Smiles",
//       bgColor: "bg-[#FDF7E8]",
//       previousPrice: 33.9,
//       currentPrice: 22.9,
//       text: "Including Tax",
//       img: "/images/muz.aromali.dis.png",
//     },
//     {
//       id: 2,
//       DiscountAmount: 25,
//       name: "BANANA FLAVOURED TOOTHPASTE",
//       bgColor: "bg-[#E8FFE7]/60",
//       previousPrice: 37.0,
//       currentPrice: 23.0,
//       text: "Including Tax",
//       img: "/images/disbeyazlaticiset.png",
//     },
//   ];

//   return (
//     <div className="w-full flex justify-center mt-8 min-[330px]:mt-10 sm:mt-12 px-4 min-[330px]:px-5 sm:px-6 md:px-8 lg:px-14">
//       <div className="flex flex-col md:flex-row gap-4 w-full max-w-300">
//         {/* left cart */}
//         <div className="w-full md:w-3/5 h-90 min-[330px]:h-100 sm:h-110 md:h-105 lg:h-115">
//           {dataDivLeft.map((item) => (
//             <div
//               key={item.id}
//               className="relative w-full h-full bg-[#F1FAFE] rounded-[14px] "
//             >
//               <div className="absolute space-y-3 min-[330px]:space-y-4 left-4 min-[330px]:left-6 top-8 min-[330px]:top-12 sm:top-16 md:top-14 lg:top-20 z-10 max-w-[48%]">
//                 <p className="bg-[#28A745] inline-block px-3 min-[330px]:px-4 py-1 min-[330px]:py-1.5 rounded-lg text-white font-medium text-[12px] min-[330px]:text-[14px] sm:text-[16px]">
//                   {item.DiscountAmount}% OFF
//                 </p>
//                 <h1 className="text-[#020A13] font-bold text-2xl min-[330px]:text-3xl sm:text-4xl mt-2 min-[330px]:mt-3">
//                   {item.name}
//                 </h1>
//                 <p className="text-[#020A13] leading-tight font-semibold text-[17px] min-[330px]:text-[20px] sm:text-[24px] lg:text-[26px] whitespace-pre-line mt-2">
//                   {item.desc}
//                 </p>
//                 <p className="text-[#373D45] text-[13px] min-[330px]:text-[14px] sm:text-[16px] font-medium line-through">
//                   ${item.previousPrice.toFixed(2)}
//                 </p>
//                 <div className="flex items-center gap-2 min-[330px]:gap-4">
//                   <p className="text-[#020A13] font-extrabold text-2xl min-[330px]:text-3xl">
//                     ${item.currentPrice.toFixed(2)}
//                   </p>
//                   <p className="text-[#020A13] text-[12px] min-[330px]:text-[14px] sm:text-[16px]">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="absolute right- min-[330px]:-right-13 sm:-right-4 md:-right-2 lg:-right-15 bottom-0 h-55 min-[330px]:h-60 sm:h-75 md:h-70 lg:h-110 object-contain"
//               />
//             </div>
//           ))}
//         </div>
// {/* right carts */}
//         <div className="w-full md:w-2/5 h-auto flex flex-col gap-4">
//           {dataDivRight.map((item) => (
//             <div
//               key={item.id}
//               className={`relative w-full h-55 min-[330px]:h-60 sm:h-65 md:h-50 lg:h-51.5 ${item.bgColor} rounded-[14px] overflow-hidden`}
//             >
//               <div className="absolute left-3 min-[330px]:left-4 top-6 min-[330px]:top-8 sm:top-9 md:top-7 lg:top-10 space-y-1.5 z-10 w-[55%]">
//                 <p className="bg-[#28A745] inline-block px-2 min-[330px]:px-3 py-1 rounded-lg text-white font-medium text-[11px] min-[330px]:text-[12px] sm:text-[14px]">
//                   {item.DiscountAmount}% OFF
//                 </p>
//                 <h1 className="text-[#020A13] font-semibold text-[17px] min-[330px]:text-[18px] sm:text-[20px] leading-5 sm:leading-6 mt-2">
//                   {item.name}
//                 </h1>
//                 <p className="text-[#373D45] font-medium text-[11px] min-[330px]:text-[12px] line-through mt-2">
//                   ${item.previousPrice.toFixed(2)}
//                 </p>
//                 <div className="flex flex-wrap items-center gap-2 min-[330px]:gap-3">
//                   <p className="text-[#020A13] font-extrabold text-[18px] min-[330px]:text-[20px]">
//                     ${item.currentPrice.toFixed(2)}
//                   </p>
//                   <p className="text-[#020A13] text-[11px] min-[330px]:text-[12px] sm:text-[14px]">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="absolute right-1 min-[330px]:right-2 sm:right-3 top-9 min-[330px]:top-10 w-24 min-[330px]:w-28 sm:w-32 md:w-30 lg:w-32 h-28 min-[330px]:h-32 sm:h-34 md:h-32 lg:h-34 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function OffersProducts() {
  const dataDivLeft = [
    {
      id: 1,
      DiscountAmount: 25,
      name: "BLACK GARLIC OIL",
      desc: `Stronger and Thicker
Hair With Black Garlic
Oil.`,
      previousPrice: 37.0,
      currentPrice: 23.0,
      text: "Including Tax",
      img: "/images/kara-sarimsak-yagi.png",
    },
  ];

  const dataDivRight = [
    {
      id: 1,
      DiscountAmount: 25,
      name: "Dental Care Set for Vivid and Bright Smiles",
      bgColor: "bg-[#FDF7E8]",
      previousPrice: 33.9,
      currentPrice: 22.9,
      text: "Including Tax",
      img: "/images/muz.aromali.dis.png",
    },
    {
      id: 2,
      DiscountAmount: 25,
      name: "BANANA FLAVOURED TOOTHPASTE",
      bgColor: "bg-[#E8FFE7]/60",
      previousPrice: 37.0,
      currentPrice: 23.0,
      text: "Including Tax",
      img: "/images/disbeyazlaticiset.png",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-8 min-[330px]:mt-10 sm:mt-12 px-4 min-[330px]:px-5 sm:px-6 md:px-8 lg:px-14">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-300">
        {/* left cart */}
        <div className="w-full md:w-3/5 h-90 min-[330px]:h-100 sm:h-110 md:h-105 lg:h-115">
          {dataDivLeft.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-full bg-[#F1FAFE] rounded-[14px] overflow-hidden"
            >
              <div className="absolute inset-y-0 left-0 w-full">
                <div className="relative z-10 h-full w-[58%] min-[330px]:w-[55%] sm:w-[50%] flex flex-col justify-start pt-2 min-[330px]:pt-6 sm:pt-16 md:pt-14 lg:pt-15 lg:gap-2 pl-4 min-[330px]:pl-6 pr-2">
                  <p className="self-start bg-[#28A745] px-3 min-[330px]:px-4 py-1 min-[330px]:py-1.5 rounded-lg text-white font-medium text-[12px] min-[330px]:text-[14px] sm:text-[16px]">
                    {item.DiscountAmount}% OFF
                  </p>

                  <h1 className="text-[#020A13] font-bold text-2xl min-[330px]:text-3xl sm:text-4xl mt-2 min-[330px]:mt-3 leading-tight wrap-break-word">
                    {item.name}
                  </h1>

                  <p className="text-[#020A13] leading-tight font-semibold text-[17px] min-[330px]:text-[20px] sm:text-[24px] lg:text-[26px] whitespace-pre-line mt-2 wrap-break-word">
                    {item.desc}
                  </p>

                  <p className="text-[#373D45] text-[13px] min-[330px]:text-[14px] sm:text-[16px] font-medium line-through mt-2">
                    ${item.previousPrice.toFixed(2)}
                  </p>

                  <div className="flex items-center w-50 mt-1 min-w-0 gap-2 min-[330px]:gap-3">
                    <p className="text-[#020A13] font-extrabold text-2xl min-[330px]:text-3xl shrink-0 whitespace-nowrap">
                      ${item.currentPrice.toFixed(2)}
                    </p>

                    <p className="text-[#020A13] text-[11px] min-[330px]:text-[12px] sm:text-[16px] min-w-0 wrap-break-word">
                      {item.text}
                    </p>
                  </div>
                </div>

                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute lg:-right-15 bottom-10 min-[330px]:-right-12 h-55 min-[330px]:h-60 sm:h-75 md:h-70 lg:h-110 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        {/* right carts */}
        <div className="w-full md:w-2/5 h-auto flex flex-col gap-4">
          {dataDivRight.map((item) => (
            <div
              key={item.id}
              className={`relative w-full h-55 min-[330px]:h-60 sm:h-65 md:h-50 lg:h-51.5 ${item.bgColor} rounded-[14px] overflow-hidden`}
            >
              <div className="relative z-10 lg:gap-1 min-[330px]:gap-1.5 h-full w-[55%] min-[330px]:w-[54%] sm:w-[55%] flex flex-col  min-[330px]:pt-8 sm:pt-9 md:pt-7 lg:pt-8 pl-3 min-[330px]:pl-4 pr-1">
                <p className="self-start bg-[#28A745] px-2 min-[330px]:px-3 py-1 rounded-lg text-white font-medium text-[11px] min-[330px]:text-[12px] sm:text-[14px]">
                  {item.DiscountAmount}% OFF
                </p>

                <h1 className="text-[#020A13] font-semibold text-[17px] min-[330px]:text-[18px] sm:text-[20px] leading-5 sm:leading-6 mt-2 wrap-break-word">
                  {item.name}
                </h1>

                <p className="text-[#373D45] font-medium text-[11px] min-[330px]:text-[12px] line-through mt-2">
                  ${item.previousPrice.toFixed(2)}
                </p>

                <div className="flex items-center w-40  mt-1.5 gap-2 min-[330px]:gap-3">
                  <p className="text-[#020A13] font-extrabold text-[18px] min-[330px]:text-[20px] shrink-0 whitespace-nowrap">
                    ${item.currentPrice.toFixed(2)}
                  </p>

                  <p className="text-[#020A13] text-[11px] min-[330px]:text-[12px] sm:text-[14px] min-w-0 wrap-break-word">
                    {item.text}
                  </p>
                </div>
              </div>

              <img
                src={item.img}
                alt={item.name}
                className="absolute right-1 min-[330px]:right-2 sm:right-3 top-9 min-[330px]:top-10 w-24 min-[330px]:w-28 sm:w-32 md:w-30 lg:w-32 h-28 min-[330px]:h-32 sm:h-34 md:h-32 lg:h-34 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
