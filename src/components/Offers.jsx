export default function Offers() {
  const data = [
    {
      id: 1,
      icon: "/icons/price-tag.png",
      title: `Get 25%
OFF`,
      bg: "bg-[#28A745]/30",
    },
    {
      id: 2,
      icon: "/icons/delivery.png",
      title: `Free Home
Delivery`,
      bg: "bg-[#F4D279]/40",
    },
    {
      id: 3,
      icon: "/icons/Group.png",
      title: `Doctor's
Appointment`,
      bg: "bg-[#6FD600]/40",
    },
    {
      id: 4,
      icon: "/icons/health.png",
      title: `Health
Advice`,
      bg: "bg-[#EDCFFC]/40",
    },
  ];

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row gap-3 min-[330px]:gap-4 sm:gap-5 mt-6 min-[330px]:mt-8 sm:mt-10 lg:mt-12 px-3 min-[330px]:px-4 sm:px-5 lg:px-0 justify-center items-center">
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex items-center justify-between ${item.bg} w-full sm:w-full md:w-full lg:w-68 h-20 min-[330px]:h-25 rounded-xl`}
        >
          <div className="flex justify-center items-center space-x-3 pl-3">
            <img src={item.icon} className="w-7.5 h-8 object-contain" />
            <h3 className="text-[#020A13] font-bold text-[16px] lg:text-[18px] whitespace-pre-line">
              {item.title}
            </h3>
          </div>
          <span className="text-[#020A13] font-extrabold pr-4">&gt;</span>
        </div>
      ))}
    </div>
  );
}
