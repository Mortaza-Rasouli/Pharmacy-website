import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { PRODUCTS, formatPrice } from "../../data/products";

const MAX_RESULTS = 6;
const POPULAR = ["Mask", "Gloves", "Thermometer", "Wheelchair", "Glucometer", "Stethoscope"];

export default function SearchPanel({ onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const matches = term
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term),
      )
    : [];
  const results = matches.slice(0, MAX_RESULTS);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term) return;
    navigate(`/products?q=${encodeURIComponent(query.trim())}`);
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-[8vh] backdrop-blur-sm animate-fade-in sm:pt-[12vh]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search products"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-[14px] bg-white shadow-2xl animate-pop-in"
      >
        <form
          role="search"
          onSubmit={handleSubmit}
          className="flex h-14 items-center border-b border-[#E8E8E8] sm:h-16"
        >
          <HiMagnifyingGlass className="ml-4 shrink-0 text-2xl text-muted" aria-hidden="true" />
          <input
            type="search"
            autoFocus
            aria-label="Search medicine and medical products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicine, medical products"
            className="min-w-0 flex-1 bg-transparent px-3 text-[16px] outline-none placeholder:text-muted sm:text-[17px]"
          />
          <button
            type="button"
            aria-label="Close search"
            onClick={onClose}
            className="mr-2 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-2xl text-muted transition-colors hover:bg-gray-100 hover:text-ink"
          >
            <HiXMark />
          </button>
        </form>

        <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4" aria-live="polite">
          {!term ? (
            <div className="px-1 pb-1">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-muted">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map((word) => (
                  <button
                    key={word}
                    type="button"
                    onClick={() => setQuery(word)}
                    className="cursor-pointer rounded-full border border-gray-200 bg-[#F6FAFF] px-4 py-1.5 text-[14px] text-copy transition-colors hover:border-brand hover:text-brand"
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="py-6 text-center text-[14px] text-muted">
              No products found for “{query.trim()}”.
            </p>
          ) : (
            <>
              <ul className="divide-y divide-[#E8E8E8]">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/products/${p.id}`}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-[#F6FAFF]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F6FAFF] p-1">
                        <img src={p.img} alt="" className="max-h-full max-w-full object-contain" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[15px] font-semibold text-ink">{p.name}</span>
                        <span className="block truncate text-[12px] text-muted">{p.category}</span>
                      </span>
                      <span className="shrink-0 text-[15px] font-bold text-ink">{formatPrice(p.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {matches.length > MAX_RESULTS && (
                <Link
                  to={`/products?q=${encodeURIComponent(query.trim())}`}
                  onClick={onClose}
                  className="mt-2 block py-2 text-center text-[14px] font-bold text-brand hover:underline"
                >
                  View all {matches.length} results →
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
