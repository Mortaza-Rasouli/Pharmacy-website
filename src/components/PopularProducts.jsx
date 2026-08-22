import { IoBagOutline } from "react-icons/io5";

export default function PopularProducts() {
  const data = [
    {
      id: 1,
      img: "../../public/images/OxygenMask.png",
      imgClass: "w-58 h-58",
      name: "Foley Catheter",
      price: `${2}.00`,
    },
    {
      id: 2,
      img: "../../public/images/SurgicalGloves.png",
      imgClass: "w-50 h-58",
      name: "Surgical Gloves",
      price: 1.99,
    },
    {
      id: 3,
      img: "../../public/images/MedicalMask.png",
      imgClass: "h-58",
      name: "Medical Mask",
      price: 0.89,
    },
    {
      id: 4,
      img: "../../public/images/HandSanitizer.png",
      imgClass: "w-50 h-58",
      name: "Hand Sanitizer",
      price: `${4}.00`,
    },
  ];
  return (
    <>
      <div className="flex flex-col mt-10 px-14">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#020A13] font-bold text-3xl ">
            Popular Products
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
              <img className={`${item.imgClass} mt-5`} src={item.img} />
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
