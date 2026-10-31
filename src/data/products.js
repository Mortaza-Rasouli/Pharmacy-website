export const CATEGORIES = [
  "Pain Relief",
  "Cold and Flu",
  "Diabetes Care",
  "Digestive Health",
  "First Aid",
  "Skin Care",
  "Child and Baby Care",
  "Heart Health",
  "Eye and Ear Care",
  "Respiratory Health",
  "Medical Devices",
  "Mobility Aids",
];

export const SECTIONS = [
  { key: "new", title: "New Products" },
  { key: "popular", title: "Popular Products" },
  { key: "top", title: "Top Products" },
  { key: "medical", title: "Medical Products" },
  { key: "upcoming", title: "Upcoming Products" },
];

export const PRODUCTS = [
  // New
  { id: 1, section: "new", category: "Medical Devices", name: "Foley Catheter", price: 12.9, img: "/images/pngegg13.png" },
  { id: 2, section: "new", category: "Cold and Flu", name: "Thermometer", price: 8.98, img: "/images/pngwing.png" },
  { id: 3, section: "new", category: "Respiratory Health", name: "Non-rebreather Mask", price: 3.32, img: "/images/pngegg11.png" },
  { id: 4, section: "new", category: "First Aid", name: "Wound Dressing", price: 24.78, img: "/images/pngegg1.png" },
  // Popular
  { id: 5, section: "popular", category: "Respiratory Health", name: "Oxygen Mask", price: 2.0, img: "/images/OxygenMask.png" },
  { id: 6, section: "popular", category: "First Aid", name: "Surgical Gloves", price: 1.99, img: "/images/SurgicalGloves.png" },
  { id: 7, section: "popular", category: "Cold and Flu", name: "Medical Mask", price: 0.89, img: "/images/MedicalMask.png" },
  { id: 8, section: "popular", category: "First Aid", name: "Hand Sanitizer", price: 4.0, img: "/images/HandSanitizer.png" },
  // Top
  { id: 9, section: "top", category: "Mobility Aids", name: "Hospital Bed", price: 109.89, img: "/images/HospitalBed.png" },
  { id: 10, section: "top", category: "Mobility Aids", name: "Walker Mobility", price: 12.8, img: "/images/WalkerMobility.png" },
  { id: 11, section: "top", category: "Mobility Aids", name: "Wheelchair", price: 30.0, img: "/images/Wheelchair.png" },
  { id: 12, section: "top", category: "Mobility Aids", name: "Crutches", price: 24.78, img: "/images/Crutches.png" },
  // Medical
  { id: 13, section: "medical", category: "Heart Health", name: "Sphygmomanometer", price: 15.09, img: "/images/Sphygmomanometer.png" },
  { id: 14, section: "medical", category: "Medical Devices", name: "Digital Stethoscope", price: 29.99, img: "/images/DigitalStethoscope.png" },
  { id: 15, section: "medical", category: "Diabetes Care", name: "Glucometer", price: 12.08, img: "/images/Glucometer.png" },
  { id: 16, section: "medical", category: "Respiratory Health", name: "Pulse Oximeter", price: 30.0, img: "/images/PulseOximeter.png" },
  // Upcoming
  { id: 17, section: "upcoming", category: "First Aid", name: "Wound Dressing", price: 5.78, img: "/images/WoundDressing.png" },
  { id: 18, section: "upcoming", category: "Medical Devices", name: "IV Catheter", price: 2.0, img: "/images/IVCatheter.png" },
  { id: 19, section: "upcoming", category: "Heart Health", name: "Blood Pressure Cuff", price: 24.78, img: "/images/BloodPressureCuff.png" },
  { id: 20, section: "upcoming", category: "Medical Devices", name: "Chest Tube", price: 58.56, img: "/images/ChestTube.png" },
];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);

export const getProductsBySection = (key) =>
  PRODUCTS.filter((p) => p.section === key);

export const formatPrice = (value) => `$${Number(value).toFixed(2)}`;

const CATEGORY_BLURB = {
  "Pain Relief": "Trusted relief for everyday aches and pains.",
  "Cold and Flu": "Helps you manage and prevent cold and flu symptoms.",
  "Diabetes Care": "Reliable tools to help monitor and manage diabetes.",
  "Digestive Health": "Supports a healthy, comfortable digestive system.",
  "First Aid": "An essential for every first-aid kit at home or in the clinic.",
  "Skin Care": "Gentle care for healthy, comfortable skin.",
  "Child and Baby Care": "Safe, gentle products designed for little ones.",
  "Heart Health": "Accurate monitoring to help you keep your heart healthy.",
  "Eye and Ear Care": "Careful, dependable care for eyes and ears.",
  "Respiratory Health": "Supports easier, safer breathing.",
  "Medical Devices": "Professional-grade equipment for clinics and home care.",
  "Mobility Aids": "Comfortable, sturdy support for safe everyday movement.",
};

export const getDescription = (product) =>
  `${product.name} from our ${product.category} range. ${
    CATEGORY_BLURB[product.category] ?? ""
  } Supplied by licensed vendors and checked before dispatch.`;

export const getRelatedProducts = (product, limit = 4) => {
  const others = PRODUCTS.filter((p) => p.id !== product.id);
  const same = others.filter((p) => p.category === product.category);
  const rest = others.filter(
    (p) => p.category !== product.category && p.section === product.section,
  );
  return [...same, ...rest].slice(0, limit);
};
