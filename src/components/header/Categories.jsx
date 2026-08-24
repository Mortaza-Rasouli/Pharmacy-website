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
    <select
      defaultValue="All Categories"
      className="shrink-0 outline-none text-[#666666] font-medium bg-transparent pl-1 min-[330px]:pl-2 sm:pl-3 lg:pl-5 pr-0 min-[330px]:pr-1 sm:pr-2 text-[10px] min-[330px]:text-[11px] sm:text-[13px] lg:text-[15px] w-21 min-[330px]:w-23 sm:w-28 lg:w-auto"
    >
      {data.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
