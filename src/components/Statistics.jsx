export default function Statistics() {
  const data = [
    {
      id: 1,
      icon: "../../public/icons/profileUser.png",
      number: 12,
      title: `Orders
      Completed`,
      bg: "bg-[#BFE5C7]",
    },
    {
      id: 2,
      icon: "../../public/icons/golden-medal.png",
      number: 250,
      title: `Won
      Awards`,
      bg: "bg-[#FAEDC9]",
    },
    {
      id: 3,
      icon: "../../public/icons/GroupUsers.png",
      number: 8,
      title: `Happy
      Customers`,
      bg: "bg-[#C5EF99]",
    },
    {
      id: 4,
      icon: "../../public/icons/customer-rate.png",
      number: 12,
      title: `Positive
      Reviews `,
      bg: "bg-[#F8ECFE]",
    },
  ];

  return (
    <div className="flex space-x-5 mt-12 justify-center items-center">
      {data.map((item) => (
        <div key={item.id} className={` ${item.bg} w-68 h-45 flex flex-col justify-center pl-6 gap-3 rounded-[14px]`}>
          <div className="">
            <div className="flex gap-3">
              <div className="bg-[#ffffff] h-10 w-10 rounded-lg flex justify-center items-center">
                <img src={item.icon} className="h-5 w-5 object-contain" />
              </div>
              <p className="text-[#020A13] font-extrabold text-[28px]">{item.number}K+</p>
            </div>
          </div>
          <h3 className="text-[#020A13] font-bold text-[18px] whitespace-pre-line">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
