export default function Offers() {
  const data = [
    {
      id: 1,
      icon: "../../public/icons/price-tag.png",
      title: `Get 25%
              OFF`,
      bg: "bg-[#28A745]/30",
    },
    {
      id: 2,
      icon: "../../public/icons/delivery.png",
      title: `Free Home
              Delivery`,
      bg: "bg-[#F4D279]/40",
    },
    {
      id: 3,
      icon: "../../public/icons/Group.png",
      title: `Doctor's
      Appointment`,
      bg: "bg-[#6FD600]/40",
    },
    {
      id: 4,
      icon: "../../public/icons/health.png",
      title: `Health
      Advice`,
      bg: "bg-[#EDCFFC]/40",
    },
  ];

  return (
    <div className="flex space-x-5 my-10 justify-center items-center">
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex items-center justify-between ${item.bg} w-68 h-25 rounded-xl`}
        >
          <div className="flex justify-center items-center space-x-3 pl-3">
            <img src={item.icon} className="w-7.5 h-8" />

            <h3 className="text-[#020A13] font-bold text-[18px] whitespace-pre-line">
              {item.title}
            </h3>
          </div>

          <span className="text-[#020A13] font-extrabold pr-4">&gt;</span>
        </div>
      ))}
    </div>
  );
}
