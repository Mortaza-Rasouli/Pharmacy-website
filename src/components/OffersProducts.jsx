export default function OffersProducts() {
  const dataDivRight = [
    {
      DiscountAmount: 25,
      name: "BLACK GARLIC OIL",
      desc: "Stronger and Thicker Hair With Black Garlic Oil.",
      previousPrice: 37.0,
      currentPrice: 23.0,
      text: "Including Tax",
      img: "../../public/images/kara-sarimsak-yagi.png",
      styleDiv: "",
    },
  ];

  const dataDivLeft = [
    {
      id: 1,
      DiscountAmount: 25,
      name: "Dental Care Set for Vivid and Bright Smiles",
      previousPrice: 33.9,
      currentPrice: 22.9,
      text: "Including Tax",
      img: "../../public/images/muz.aromali.dis.png",
    },
    {
      id: 1,
      DiscountAmount: 25,
      name: "BANANA FLAVOURED TOOTHPASTE",
      previousPrice: 37.0,
      currentPrice: 23.0,
      text: "Including Tax",
      img: "../../public/images/disbeyazlaticiset.png",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center h-120 mt-10 bg-amber-200">
        {dataDivRight.map((item) => (
          <div className="flex bg-blue-300">
            <div className="">
              <p>{item.DiscountAmount}% OFF</p>
              <h1>{item.name}</h1>
              <p>{item.desc}</p>
              <p>{item.previousPrice.toFixed(2)}</p>
              <p>{item.currentPrice.toFixed(2)}</p>
              <p>{item.text}</p>
            </div>
            <div>
              <img src={item.img} className="w-75 h-110" alt="" />
            </div>
          </div>
        ))}

        {dataDivLeft.map((item) => (
          <div key={item.id} className="">
            <div>
              <div>
                <p>{item.DiscountAmount}% OFF</p>
                <h1>{item.name}</h1>
                <p>${item.previousPrice.toFixed(2)}</p>
                <p>${item.currentPrice.toFixed(2)}</p>
                <p>{item.text}</p>
              </div>
            </div>
            <div>
              <img src={item.img} className="w-54 h-54" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
