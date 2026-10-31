import { Link } from "react-router-dom";

export default function EmptyState({ icon: Icon, title, text, to = "/products", cta = "Start Shopping", heading: Heading = "h2" }) {
  return (
    <div className="flex flex-col items-center text-center py-14 sm:py-20">
      {Icon && (
        <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand/15 text-4xl text-brand">
          <Icon />
        </span>
      )}
      <Heading className="text-xl sm:text-2xl font-bold text-ink">{title}</Heading>
      <p className="mt-2 max-w-md text-sm sm:text-base text-muted">{text}</p>
      <Link
        to={to}
        className="mt-6 rounded-lg bg-brand px-6 py-2.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 ease-linear hover:bg-brand-hover hover:scale-103"
      >
        {cta}
      </Link>
    </div>
  );
}
