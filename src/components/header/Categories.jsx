export default function Categories() {
  const data = [
    "All Categories",
    "Pain Relief",
    "Cold and Flu",
    "Diabetes Care",
    "Digestive Health",
    "First Aid",
    "Skin Care",
    "Child and Baby Care",
    "Heart Health",
    "Eye and Ear Care",
    "Repository Health",
  ];
  return (
    <>
      <select
        defaultValue="All Categories"
        className="pl-5 outline-none text-[#666666] text-[15px] font-medium"
      >
        {data.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </>
  );
}
