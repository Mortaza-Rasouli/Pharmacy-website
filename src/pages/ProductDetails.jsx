import { Link, useParams } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoBagOutline, IoCartOutline } from "react-icons/io5";
import { FaShieldAlt, FaTruck } from "react-icons/fa";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import ProductCard from "../components/ProductCard";
import useStore from "../hooks/useStore";
import {
  formatPrice,
  getDescription,
  getProductById,
  getRelatedProducts,
} from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const { isFavorite, isInCart, toggleFavorite, addToCart } = useStore();
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <Container>
        <EmptyState
          icon={IoCartOutline}
          title="Product not found"
          text="This product doesn't exist or is no longer available."
          to="/products"
          cta="Back to Shop"
          heading="h1"
        />
      </Container>
    );
  }

  const liked = isFavorite(product.id);
  const added = isInCart(product.id);
  const related = getRelatedProducts(product);

  return (
    <Container className="py-6 sm:py-10">
      <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
        <div className="flex h-72 items-center justify-center rounded-[14px] bg-[#F6FAFF] p-8 min-[480px]:h-96 lg:h-[30rem]">
          <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain" />
        </div>

        <div className="flex flex-col gap-4">
          <Link
            to={`/products?category=${encodeURIComponent(product.category)}`}
            className="w-fit rounded-md bg-[#007BFF0D] px-3 py-1 text-[13px] text-brand hover:underline sm:text-[14px]"
          >
            {product.category}
          </Link>

          <h1 className="text-2xl font-extrabold leading-tight text-ink min-[330px]:text-3xl lg:text-4xl">
            {product.name}
          </h1>

          <p className="text-2xl font-extrabold text-ink sm:text-3xl">
            {formatPrice(product.price)}
          </p>

          <p className="text-[14px] leading-relaxed text-copy sm:text-[16px]">
            {getDescription(product)}
          </p>

          <div className="flex flex-col gap-3 min-[480px]:flex-row">
            {added ? (
              <Link
                to="/cart"
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-brand-hover text-[16px] font-bold text-white"
              >
                Added ✓ <span className="font-medium">View Cart</span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => addToCart(product.id)}
                className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand text-[16px] font-bold text-white transition-colors hover:bg-brand-hover"
              >
                Add to Cart <IoBagOutline />
              </button>
            )}

            <button
              type="button"
              onClick={() => toggleFavorite(product.id)}
              aria-pressed={liked}
              className="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 text-[15px] font-semibold text-ink transition-colors hover:border-red-500"
            >
              {liked ? <GoHeartFill className="text-xl text-red-500" /> : <GoHeart className="text-xl text-muted" />}
              {liked ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <ul className="mt-2 space-y-2 text-[14px] text-copy">
            <li className="flex items-center gap-3">
              <FaTruck className="text-brand" aria-hidden="true" /> Free delivery on orders over $50
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-brand" aria-hidden="true" /> Genuine products from licensed suppliers
            </li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-10 sm:mt-14">
          <h2 className="mb-4 text-xl font-bold text-ink min-[330px]:text-2xl sm:text-3xl">
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
