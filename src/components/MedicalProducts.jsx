import { IoBagOutline } from "react-icons/io5";

export default function MedicalProducts() {
  const data = [
    {
      id: 1,
      img: "../../public/images/Sphygmomanometer.png",
      imgClass: "w-58 h-52",
      name: "Sphygmomanometer",
      price: 15.09,
    },
    {
      id: 2,
      img: "../../public/images/DigitalStethoscope.png",
      imgClass: "w-33 h-58",
      name: "Digital Stethoscope",
      price: 29.99,
    },
    {
      id: 3,
      img: "../../public/images/Glucometer.png",
      imgClass: "w-58 h-52",
      name: "Glucometer",
      price: 12.08,
    },
    {
      id: 4,
      img: "../../public/images/PulseOximeter.png",
      imgClass: "w-50 h-52",
      name: "Pulse Oximeter",
      price: 30.0,
    },
  ];
  return (
    <>
      <div className="flex flex-col mt-15 px-14">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#020A13] font-bold text-3xl ">Top Products </h1>
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
