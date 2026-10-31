import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-200 px-5 py-16 text-center">
      <h1 className="text-5xl font-extrabold sm:text-6xl">404</h1>
      <h2 className="mt-3 text-xl font-bold sm:text-2xl">Page Not Found</h2>
      <p className="mt-2 max-w-md text-sm text-gray-500 sm:text-base">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-brand px-5 py-2.5 text-[16px] font-semibold text-white transition-all duration-300 ease-linear hover:bg-brand-hover"
      >
        Back to Home
      </Link>
    </div>
  );
}
