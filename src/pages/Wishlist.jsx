import { GoHeart } from "react-icons/go";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import ProductCard from "../components/ProductCard";
import useStore from "../hooks/useStore";
import { PRODUCTS } from "../data/products";

export default function Wishlist() {
  const { favorite, clearFavorites } = useStore();
  const items = PRODUCTS.filter((p) => favorite.includes(p.id));

  return (
    <Container className="py-8 min-[330px]:py-10 sm:py-12">
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-xl font-bold text-ink min-[330px]:text-2xl sm:text-3xl">
          Your Wishlist
        </h1>
        {items.length > 0 && (
          <button
            type="button"
            onClick={clearFavorites}
            className="cursor-pointer text-[15px] font-bold text-ink transition-all duration-300 ease-linear hover:scale-103 hover:text-red-500 sm:text-xl"
          >
            Delete All
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon={GoHeart}
          title="Your wishlist is empty"
          text="Tap the heart on any product to save it here for later."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
}
