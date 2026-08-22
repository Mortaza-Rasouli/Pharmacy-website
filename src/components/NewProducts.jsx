import { IoBagOutline } from "react-icons/io5";

export default function NewProducts() {
  const data = [
    {
      id: 1,
      img: "../../public/images/pngegg13.png",
      imgClass: "w-58 h-58",
      name: "Foley Catheter",
      price: 12.9,
    },
    {
      id: 2,
      img: "../../public/images/pngwing.png",
      imgClass: "w-33 h-58",
      name: "Thermometer",
      price: 8.98,
    },
    {
      id: 3,
      img: "../../public/images/pngegg11.png",
      imgClass: "w-58 h-58",
      name: "Non-rebreather mask",
      price: 3.32,
    },
    {
      id: 4,
      img: "../../public/images/pngegg1.png",
      imgClass: "w-50 h-58",
      name: "Wound Dressing",
      price: 24.78,
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y- px-14">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#020A13] font-bold text-3xl ">New Products</h1>
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
