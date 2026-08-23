import { IoBagOutline } from "react-icons/io5";

export default function UpcomingProducts() {
  const data = [
    {
      id: 1,
      img: "../../public/images/WoundDressing.png",
      imgClass: "w-58 h-52",
      name: "Wound Dressing",
      price: 5.78,
    },
    {
      id: 2,
      img: "../../public/images/IVCatheter.png",
      imgClass: "w-33 h-58",
      name: "IV Catheter",
      price: 2.0,
    },
    {
      id: 3,
      img: "../../public/images/BloodPressureCuff.png",
      imgClass: "w-58 h-52",
      name: "Blood Pressure Cuff",
      price: 24.78,
    },
    {
      id: 4,
      img: "../../public/images/ChestTube.png",
      imgClass: "w-50 h-52",
      name: "Chest Tube",
      price: 58.56,
    },
  ];
  return (
    <>
      <div className="flex flex-col mt-15 px-14">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#020A13] font-bold text-3xl ">
            Upcoming Products
          </h1>
          <button className="text-[#28A745] font-bold text-[16px]">
            View All →
          </button>
        </div>
        <div className="flex space-x-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col h-98 w-75 mb-7 justify-around items-center bg-[#FFFFFF] rounded-xl shadow drop-shadow-xl"
            >
              <img
                className={`${item.imgClass} object-contain mt-5`}
                src={item.img}
              />
              <div className="items-start w-full p-3 space-y-1 mt-10 border-t border-[#E8E8E8]">
                <h1 className="font-bold text-2xl text-[#020A13]">
                  {item.name}
                </h1>
                <p className="font-bold text-[#333333] text-[16px]">
                  ${item.price}
                </p>
              </div>
              <button className="flex justify-center gap-2 items-center text-[#FFFFFF] font-bold text-[16px] bg-[#28A745] w-full py-2 rounded-b-xl">
                Add to Cart <IoBagOutline />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
