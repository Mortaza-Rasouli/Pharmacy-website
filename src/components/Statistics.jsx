export default function Statistics() {
  const data = [
    {
      id: 1,
      icon: "/icons/profileUser.png",
      number: 12,
      title: `Orders
Completed`,
      bg: "bg-[#BFE5C7]",
    },
    {
      id: 2,
      icon: "/icons/golden-medal.png",
      number: 250,
      title: `Won
Awards`,
      bg: "bg-[#FAEDC9]",
    },
    {
      id: 3,
      icon: "/icons/GroupUsers.png",
      number: 8,
      title: `Happy
Customers`,
      bg: "bg-[#C5EF99]",
    },
    {
      id: 4,
      icon: "/icons/customer-rate.png",
      number: 12,
      title: `Positive
Reviews`,
      bg: "bg-[#F8ECFE]",
    },
  ];

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row gap-3 min-[330px]:gap-4 sm:gap-5 mt-8 min-[330px]:mt-10 sm:mt-12 px-4 min-[330px]:px-5 sm:px-6 md:px-8 lg:px-0 justify-center items-center">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${item.bg} w-full sm:w-full md:w-full lg:w-68 h-32 min-[330px]:h-36
           sm:h-40 lg:h-45 flex flex-col justify-center pl-5 min-[330px]:pl-6 gap-2
            min-[330px]:gap-3 rounded-[14px]
            hover:cursor-pointer transition-all duration-300 ease-linear hover:-translate-y-1.5 hover:shadow-xl`}
        >
          <div className="flex gap-3 items-center">
            <div className="bg-[#ffffff] h-9 w-9 min-[330px]:h-10 min-[330px]:w-10 rounded-lg flex justify-center items-center">
              <img src={item.icon} className="h-5 w-5 object-contain" />
            </div>
            <p className="text-[#020A13] font-extrabold text-[24px] min-[330px]:text-[28px]">
              {item.number}K+
            </p>
          </div>
          <h3 className="text-[#020A13] font-bold text-[16px] min-[330px]:text-[18px] whitespace-pre-line">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
