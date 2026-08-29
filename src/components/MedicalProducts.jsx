import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";

export default function MedicalProducts({
  favorite,
  setFavorite,
  buyProduct,
  setBuyProduct,
}) {
  const data = [
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
  ];

  return (
    <div className="flex flex-col mt-8 min-[330px]:mt-10 sm:mt-12 px-4 min-[330px]:px-5 sm:px-6 md:px-8 lg:px-14">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-[#020A13] font-bold text-xl min-[330px]:text-2xl sm:text-3xl">
          Medical Products
        </h1>
        <button className="text-[#28A745] font-bold text-[13px] min-[330px]:text-[14px] sm:text-[16px]">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col h-95 min-[330px]:h-100 sm:h-105 md:h-98 lg:h-98 w-full
             items-center bg-[#FFFFFF] rounded-xl shadow drop-shadow-xl overflow-hidden
              hover:cursor-pointer transition-all duration-300 ease-linear hover:-translate-y-2  hover:shadow-xl"
          >
            <div className="relative flex items-center justify-center h-60 md:h-57 lg:h-58 w-full shrink-0">
              {/* wishlist */}
              <button
                onClick={() =>
                  setFavorite((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id],
                  )
                }
                className="absolute top-5 right-6 z-10 cursor-pointer outline-none"
              >
                {favorite.includes(item.id) ? (
                  <GoHeartFill className="w-6 h-5 text-red-500" />
                ) : (
                  <GoHeart className="w-6 h-6 text-[#666666]" />
                )}
              </button>
              <img
                className={`${item.imgClass} object-contain mt-10 max-w-[80%] max-h-full`}
                src={item.img}
                alt={item.name}
              />
            </div>

            <div className="w-full h-20 p-3 mt-8 space-y-1 border-t border-[#E8E8E8] shrink-0">
              <h1 className="font-bold text-lg min-[330px]:text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#020A13] truncate">
                {item.name}
              </h1>
              <p className="font-bold text-[#333333] text-[14px] sm:text-[16px]">
                ${item.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() =>
                setBuyProduct((prev) =>
                  prev.includes(item.id) ? prev : [...prev, item.id],
                )
              }
              className="flex justify-center cursor-pointer gap-2 items-center text-[#FFFFFF] 
            font-bold text-[14px] sm:text-[16px] bg-[#28A745] w-full h-10 min-h-10 rounded-b-xl shrink-0 mt-auto"
            >
              {buyProduct.includes(item.id) ? (
                "Added ✓"
              ) : (
                <>
                  Add to Cart <IoBagOutline />
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
