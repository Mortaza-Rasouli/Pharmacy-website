export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-screen-2xl px-4 min-[330px]:px-5 sm:px-6 md:px-8 lg:px-14 ${className}`}
    >
      {children}
    </Tag>
  );
}
