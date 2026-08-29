import { IoBagOutline } from "react-icons/io5";

export default function Cart({ buyProduct, setBuyProduct }) {
  const data = [
    {
      id: 1,
      img: "/images/pngegg13.png",
      imgClass: "w-45 h-45",
      name: "Foley Catheter",
      price: 12.9,
    },
    {
      id: 2,
      img: "/images/pngwing.png",
      imgClass: "w-33 h-45",
      name: "Thermometer",
      price: 8.98,
    },
    {
      id: 3,
      img: "/images/pngegg11.png",
      imgClass: "w-45 h-45",
      name: "Non-rebreather mask",
      price: 3.32,
    },
    {
      id: 4,
      img: "/images/pngegg1.png",
      imgClass: "w-45 h-45",
      name: "Wound Dressing",
      price: 24.78,
    },
    {
      id: 5,
      img: "/images/OxygenMask.png",
      imgClass: "w-45 h-45",
      name: "Foley Catheter",
      price: 2.0,
    },
    {
      id: 6,
      img: "/images/SurgicalGloves.png",
      imgClass: "w-45 h-45",
      name: "Surgical Gloves",
      price: 1.99,
    },
    {
      id: 7,
      img: "/images/MedicalMask.png",
      imgClass: "h-45",
      name: "Medical Mask",
      price: 0.89,
    },
    {
      id: 8,
      img: "/images/HandSanitizer.png",
      imgClass: "w-45 h-45",
      name: "Hand Sanitizer",
      price: 4.0,
    },
    {
      id: 9,
      img: "/images/HospitalBed.png",
      imgClass: "w-45 h-45",
      name: "Hospital Bed",
      price: 109.89,
    },
    {
      id: 10,
      img: "/images/WalkerMobility.png",
      imgClass: "w-40 h-45",
      name: "Walker Mobility",
      price: 12.8,
    },
    {
      id: 11,
      img: "/images/Wheelchair.png",
      imgClass: "w-45 h-45",
      name: "Wheelchair",
      price: 30.0,
    },
    {
      id: 12,
      img: "/images/Crutches.png",
      imgClass: "w-45 h-45",
      name: "Crutches",
      price: 24.78,
    },
    {
      id: 13,
      img: "/images/Sphygmomanometer.png",
      imgClass: "w-45 h-45",
      name: "Sphygmomanometer",
      price: 15.09,
    },
    {
      id: 14,
      img: "/images/DigitalStethoscope.png",
      imgClass: "w-45 h-45",
      name: "Digital Stethoscope",
      price: 29.99,
    },
    {
      id: 15,
      img: "/images/Glucometer.png",
      imgClass: "w-45 h-44",
      name: "Glucometer",
      price: 12.08,
    },
    {
      id: 16,
      img: "/images/PulseOximeter.png",
      imgClass: "w-42 h-45",
      name: "Pulse Oximeter",
      price: 30.0,
    },
    {
      id: 17,
      img: "/images/WoundDressing.png",
      imgClass: "w-45 h-45",
      name: "Wound Dressing",
      price: 5.78,
    },
    {
      id: 18,
      img: "/images/IVCatheter.png",
      imgClass: "w-42 h-45",
      name: "IV Catheter",
      price: 2.0,
    },
    {
      id: 19,
      img: "/images/BloodPressureCuff.png",
      imgClass: "w-45 h-45",
      name: "Blood Pressure Cuff",
      price: 24.78,
    },
    {
      id: 20,
      img: "/images/ChestTube.png",
      imgClass: "w-45 h-45",
      name: "Chest Tube",
      price: 58.56,
    },
  ];

  const cartProducts = data.filter((item) => buyProduct.includes(item.id));

  const removeFromCart = (id) => {
    setBuyProduct((prev) => prev.filter((itemId) => itemId !== id));
  };
  const removeAll = () => {
    setBuyProduct([]);
  };

  return (
    <div className="flex flex-col mt-8 min-[330px]:mt-10 sm:mt-12 px-4 min-[330px]:px-5 sm:px-6 md:px-8 lg:px-14">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-[#020A13] font-bold text-xl min-[330px]:text-2xl sm:text-3xl">
          Your Cart
        </h1>
        {cartProducts.length === 0 ? (
          ""
        ) : (
          <button
            onClick={() => removeAll()}
            className="text-[#020A13] font-bold text-xl transition-all duration-300 ease-linear
           cursor-pointer hover:scale-103 hover:text-red-500"
          >
            Delete All
          </button>
        )}
      </div>

      {cartProducts.length === 0 ? (
        <p className="text-[#666666] text-[14px] sm:text-[16px]">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {cartProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col h-95 min-[330px]:h-100 sm:h-105 md:h-98 lg:h-98 w-full items-center
              bg-[#FFFFFF] rounded-xl shadow drop-shadow-xl overflow-hidden
              hover:cursor-pointer transition-all duration-300 ease-linear hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative flex items-center justify-center h-60 md:h-57 lg:h-58 w-full shrink-0">
                <img
                  className={`${item.imgClass} object-contain mt-8 max-w-[80%] max-h-full`}
                  src={item.img}
                  alt={item.name}
                />
              </div>

              <div className="w-full mt-6 p-3 space-y-1 border-t border-[#E8E8E8] shrink-0">
                <h1 className="font-bold text-lg min-[330px]:text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#020A13] truncate">
                  {item.name}
                </h1>

                <p className="font-bold text-[#333333] text-[14px] sm:text-[16px]">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="flex justify-center gap-2 items-center text-[#FFFFFF] font-bold
                text-[14px] sm:text-[16px] bg-[#28A745] w-full h-10 min-h-10
                rounded-b-xl shrink-0 mt-auto outline-none cursor-pointer"
              >
                Remove from Cart
                <IoBagOutline />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
