import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import PageBanner from "../components/PageBanner";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS, SECTIONS } from "../data/products";

const SORTS = {
  featured: { label: "Featured", fn: null },
  "price-asc": { label: "Price: Low to High", fn: (a, b) => a.price - b.price },
  "price-desc": { label: "Price: High to Low", fn: (a, b) => b.price - a.price },
  name: { label: "Name: A – Z", fn: (a, b) => a.name.localeCompare(b.name) },
};

const fieldClass =
  "h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-[14px] text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const category = params.get("category") ?? "";
  const section = params.get("section") ?? "";
  const sortKey = SORTS[params.get("sort")] ? params.get("sort") : "featured";

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = PRODUCTS.filter(
      (p) =>
        (!term || p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)) &&
        (!category || p.category === category) &&
        (!section || p.section === section),
    );
    const sorter = SORTS[sortKey].fn;
    return sorter ? [...list].sort(sorter) : list;
  }, [q, category, section, sortKey]);

  const hasFilters = q || category || section;
  const sectionTitle = SECTIONS.find((s) => s.key === section)?.title;

  return (
    <>
      <PageBanner
        title={sectionTitle ?? "Shop"}
        subtitle="Browse medicines, medical devices and everyday health essentials."
      />

      <Container className="py-8 sm:py-10">
        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          <label className="min-[480px]:col-span-2 lg:col-span-1">
            <span className="mb-1 block text-[13px] font-semibold text-copy">Search</span>
            <input
              type="search"
              value={q}
              onChange={(e) => update("q", e.target.value)}
              placeholder="Search products…"
              className={fieldClass}
            />
          </label>

          <label>
            <span className="mb-1 block text-[13px] font-semibold text-copy">Category</span>
            <select value={category} onChange={(e) => update("category", e.target.value)} className={fieldClass}>
              <option value="">All Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-[13px] font-semibold text-copy">Collection</span>
            <select value={section} onChange={(e) => update("section", e.target.value)} className={fieldClass}>
              <option value="">All Products</option>
              {SECTIONS.map((s) => (
                <option key={s.key} value={s.key}>{s.title}</option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-[13px] font-semibold text-copy">Sort by</span>
            <select
              value={sortKey}
              onChange={(e) => update("sort", e.target.value === "featured" ? "" : e.target.value)}
              className={fieldClass}
            >
              {Object.entries(SORTS).map(([key, { label }]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mb-5 mt-6 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[14px] text-muted sm:text-[16px]" aria-live="polite">
            {results.length} {results.length === 1 ? "product" : "products"} found
          </p>
          {hasFilters && (
            <Link to="/products" className="text-[14px] font-bold text-brand hover:underline sm:text-[16px]">
              Clear filters
            </Link>
          )}
        </div>

        {results.length === 0 ? (
          <EmptyState
            icon={IoCartOutline}
            title="No products found"
            text="Try a different search term or clear your filters."
            to="/products"
            cta="Show all products"
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
