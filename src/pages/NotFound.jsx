import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen bg-stone-200 flex flex-col justify-center items-center px-5 text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold">404</h1>

      <h2 className="mt-3 text-xl sm:text-2xl font-bold">Page Not Found</h2>

      <p className="mt-2 max-w-md text-sm sm:text-base text-gray-500">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-[#28A745]  px-5 py-2.5 text-sm font-semibold
         text-[16px] text-white transition-all ease-linear duration-300 hover:bg-[#26c74c]"
      >
        Back to Home
      </Link>
    </div>
  );
}
