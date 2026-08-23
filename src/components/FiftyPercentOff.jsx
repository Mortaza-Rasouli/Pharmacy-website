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
      img: "../../public/images/Group346.png",
    },
  ];
  return (
    <>
      <div>
        {data.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between h-110 px-15 mt-12 bg-[#F6FAFF]"
          >
            <div className="space-y-6">
              <p className="text-[#020A13] text-[18px] -mb-1 font-normal">
                {item.text}
              </p>
              <h1 className="whitespace-pre-line leading-12 text-[#020A13] font-extrabold text-4xl">
                {item.title}
              </h1>
              <p className="whitespace-pre-line text-[#373D45] font-normal text-[16px]">
                {item.desc}
              </p>
              <button className="bg-[#28A745] rounded-md text-[#FFFFFF] text-[16px] font-medium px-4.5 py-2.5">
                {item.btnText} →
              </button>
            </div>
            <div>
              <img src={item.img} className="h-90 object-contain" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
