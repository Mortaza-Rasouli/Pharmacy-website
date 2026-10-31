import { Link } from "react-router-dom";
import Container from "./Container";
import ProductCard from "./ProductCard";
import { SECTIONS, getProductsBySection } from "../data/products";

export default function ProductSection({ section }) {
  const meta = SECTIONS.find((s) => s.key === section);
  const products = getProductsBySection(section);
  if (!meta) return null;

  return (
    <Container
      as="section"
      className="mt-8 min-[330px]:mt-10 sm:mt-12"
    >
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-xl font-bold text-ink min-[330px]:text-2xl sm:text-3xl">
          {meta.title}
        </h2>
        <Link
          to={`/products?section=${section}`}
          className="text-[13px] font-bold text-brand hover:underline min-[330px]:text-[14px] sm:text-[16px]"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
