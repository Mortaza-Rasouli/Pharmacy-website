import { Link } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import useStore from "../hooks/useStore";
import { formatPrice } from "../data/products";

/*
 * The whole card is clickable: the title link is stretched over the card with
 * an ::after overlay. The heart and cart buttons sit above it (relative z-10).
 */
export default function ProductCard({ product }) {
  const { isFavorite, isInCart, toggleFavorite, addToCart } = useStore();
  const liked = isFavorite(product.id);
  const added = isInCart(product.id);

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-52 min-[330px]:h-56 w-full items-center justify-center p-8 sm:h-60">
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          aria-label={liked ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={liked}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/80 transition-colors hover:bg-white"
        >
          {liked ? (
            <GoHeartFill className="h-6 w-6 text-red-500" />
          ) : (
            <GoHeart className="h-6 w-6 text-muted transition-colors hover:text-red-500" />
          )}
        </button>

        <img
          src={product.img}
          alt=""
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="w-full space-y-1 border-t border-[#E8E8E8] p-3">
        <h3 title={product.name} className="truncate text-lg font-bold text-ink sm:text-xl">
          <Link
            to={`/products/${product.id}`}
            className="transition-colors group-hover:text-brand after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-[14px] font-bold text-[#333333] sm:text-[16px]">
          {formatPrice(product.price)}
        </p>
      </div>

      {added ? (
        <Link
          to="/cart"
          className="relative z-10 mt-auto flex h-10 min-h-10 w-full items-center justify-center gap-2 bg-brand-hover text-[14px] font-bold text-white sm:text-[16px]"
        >
          Added ✓ <span className="font-medium">View Cart</span>
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => addToCart(product.id)}
          className="relative z-10 mt-auto flex h-10 min-h-10 w-full cursor-pointer items-center justify-center gap-2 bg-brand text-[14px] font-bold text-white transition-colors hover:bg-brand-hover sm:text-[16px]"
        >
          Add to Cart <IoBagOutline />
        </button>
      )}
    </article>
  );
}
