import Container from "./Container";

const data = [
  { id: 1, icon: "/icons/profileUser.png", number: "250K+", title: "Orders Completed", bg: "bg-[#BFE5C7]" },
  { id: 2, icon: "/icons/golden-medal.png", number: "12+", title: "Won Awards", bg: "bg-[#FAEDC9]" },
  { id: 3, icon: "/icons/GroupUsers.png", number: "80K+", title: "Happy Customers", bg: "bg-[#C5EF99]" },
  { id: 4, icon: "/icons/customer-rate.png", number: "120K+", title: "Positive Reviews", bg: "bg-[#F8ECFE]" },
];

export default function Statistics() {
  return (
    <Container className="mt-8 min-[330px]:mt-10 sm:mt-12">
      <ul className="grid grid-cols-1 gap-3 min-[330px]:gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {data.map((item) => (
          <li
            key={item.id}
            className={`flex min-h-32 flex-col justify-center gap-2 rounded-[14px] py-5 pl-5 transition-all duration-300 ease-linear hover:-translate-y-1.5 hover:shadow-xl min-[330px]:gap-3 min-[330px]:pl-6 sm:min-h-40 lg:min-h-44 ${item.bg}`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white min-[330px]:h-10 min-[330px]:w-10">
                <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
              </span>
              <p className="text-[24px] font-extrabold text-ink min-[330px]:text-[28px]">
                {item.number}
              </p>
            </div>
            <h3 className="text-[16px] font-bold text-ink min-[330px]:text-[18px]">
              {item.title}
            </h3>
          </li>
        ))}
      </ul>
    </Container>
  );
}
