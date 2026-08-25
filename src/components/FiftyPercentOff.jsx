export default function FiftyPercentOff() {
  const data = [
    {
      text: "Todays Hot Offer",
      title: `Unlock 50% Off on
Essential Medicines!`,
      desc: `Embrace wellness without breaking the bank! Enjoy a generous
25% discount on a wide range of vital medicines at our online
pharmacy. Your health matters, and so does your budget.`,
      btnText: "Place An Order Now",
      img: "/images/Group346.png",
    },
  ];

  return (
    <div className="w-full mt-8 min-[330px]:mt-10 sm:mt-12 px-4 min-[330px]:px-5 sm:px-6 md:px-8 lg:px-14">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between w-full min-h-95 min-[330px]:min-h-105 sm:min-h-110 md:h-95 lg:h-110 px-4 min-[330px]:px-6 sm:px-8 md:px-10 lg:px-15 py-8 md:py-0 bg-[#F6FAFF] overflow-hidden"
        >
          <div className="w-full md:w-[58%] space-y-3 min-[330px]:space-y-4 sm:space-y-5 md:space-y-4 lg:space-y-6">
            <p className="text-[#020A13] text-[14px] min-[330px]:text-[16px] sm:text-[18px] -mb-1 font-normal">
              {item.text}
            </p>
            <h1 className="lg:whitespace-pre-line leading-tight sm:leading-12 text-[#020A13] font-extrabold text-2xl min-[330px]:text-2xl sm:text-4xl">
              {item.title}
            </h1>
            <p className="lg:whitespace-pre-line text-[#373D45] font-normal text-[12px] min-[330px]:text-[13px] sm:text-[16px] leading-relaxed">
              {item.desc}
            </p>
            <button
              className="bg-[#28A745] rounded-md text-[#FFFFFF] text-[13px] 
            min-[330px]:text-[14px] sm:text-[16px] font-medium px-3.5 min-[330px]:px-4.5
             py-2 min-[330px]:py-2.5
             hover:cursor-pointer transition-all duration-300 ease-linear hover:scale-103 hover:bg-[#26c74c]"
            >
              {item.btnText} →
            </button>
          </div>
          <div className="w-full md:w-[42%] h-45 min-[330px]:h-50 sm:h-60 md:h-full flex justify-center md:justify-end items-center mt-5 md:mt-0">
            <img
              src={item.img}
              alt={item.text}
              className="h-42 min-[330px]:h-48 sm:h-55 md:h-65 lg:h-90 max-w-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
