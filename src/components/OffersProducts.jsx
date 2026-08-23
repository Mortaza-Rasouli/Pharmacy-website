export default function OffersProducts() {
  const dataDivLeft = [
    {
      id: 1,
      DiscountAmount: 25,
      name: "BLACK GARLIC OIL",
      desc: `Stronger and Thicker
Hair With Black Garlic
Oil.`,
      previousPrice: 37.0,
      currentPrice: 23.0,
      text: "Including Tax",
      img: "../../public/images/kara-sarimsak-yagi.png",
    },
  ];

  const dataDivRight = [
    {
      id: 1,
      DiscountAmount: 25,
      name: "Dental Care Set for Vivid and Bright Smiles",
      bgColor: "bg-[#FDF7E8]",
      previousPrice: 33.9,
      currentPrice: 22.9,
      text: "Including Tax",
      img: "../../public/images/muz.aromali.dis.png",
    },
    {
      id: 2,
      DiscountAmount: 25,
      name: "BANANA FLAVOURED TOOTHPASTE",
      bgColor: "bg-[#E8FFE7]/60",
      previousPrice: 37.0,
      currentPrice: 23.0,
      text: "Including Tax",
      img: "../../public/images/disbeyazlaticiset.png",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-12">
      <div className="flex gap-4">
        {/* left card */}
        <div className="w-180 h-full">
          {dataDivLeft.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-full bg-[#F1FAFE] rounded-[14px] overflow-hidden"
            >
              {/* text */}
              <div className="absolute space-y-4 left-6 top-20 z-10">
                <p className="bg-[#28A745] inline-block px-4 py-1.5 rounded-lg text-white font-medium text-[16px]">
                  {item.DiscountAmount}% OFF
                </p>

                <h1 className="text-[#020A13] font-bold text-4xl mt-3">
                  {item.name}
                </h1>

                <p className="text-[#020A13] leading-tight font-semibold text-[26px] whitespace-pre-line mt-2">
                  {item.desc}
                </p>

                <p className="text-[#373D45] text-[16px] font-medium line-through">
                  ${item.previousPrice.toFixed(2)}
                </p>

                <div className="flex items-center gap-4">
                  <p className="text-[#020A13] font-extrabold text-3xl">
                    ${item.currentPrice.toFixed(2)}
                  </p>

                  <p className="text-[#020A13] text-[16px]">{item.text}</p>
                </div>
              </div>

              <img
                src={item.img}
                className="absolute -right-22 -bottom-6 h-115 "
              />
            </div>
          ))}
        </div>

        {/* right cards */}
        <div className="w-105 h-full flex flex-col gap-4">
          {dataDivRight.map((item) => (
            <div
              key={item.id}
              className={`relative w-full h-51.5 ${item.bgColor} rounded-[14px] overflow-hidden`}
            >
              {/* text */}
              <div className="absolute left-4 top-10 space-y-1.5 z-10 w-55">
                <p className="bg-[#28A745] inline-block px-3 py-1 rounded-lg text-white font-medium text-[14px]">
                  {item.DiscountAmount}% OFF
                </p>

                <h1 className="text-[#020A13] font-semibold text-[20px] leading-6 mt-2">
                  {item.name}
                </h1>

                <p className="text-[#373D45] font-medium text-[12px] line-through mt-2">
                  ${item.previousPrice.toFixed(2)}
                </p>

                <div className="flex items-center gap-3">
                  <p className="text-[#020A13] font-extrabold text-[20px]">
                    ${item.currentPrice.toFixed(2)}
                  </p>

                  <p className="text-[#020A13] text-[14px]">{item.text}</p>
                </div>
              </div>

              <img
                src={item.img}
                alt={item.name}
                className="absolute right-3 top-10 w-38 h-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
