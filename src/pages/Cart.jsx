import { Link } from "react-router-dom";
import { IoAdd, IoBagOutline, IoRemove, IoTrashOutline } from "react-icons/io5";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import useStore from "../hooks/useStore";
import { formatPrice, getProductById } from "../data/products";

const FREE_SHIPPING_FROM = 50;
const SHIPPING_FEE = 4.99;

export default function Cart() {
  const { cart, setQuantity, removeFromCart, clearCart } = useStore();

  const lines = cart
    .map((item) => ({ product: getProductById(item.id), qty: item.qty }))
    .filter((line) => line.product);

  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  return (
    <Container className="py-8 min-[330px]:py-10 sm:py-12">
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-xl font-bold text-ink min-[330px]:text-2xl sm:text-3xl">
          Your Cart
        </h1>
        {lines.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="cursor-pointer text-[15px] font-bold text-ink transition-all duration-300 ease-linear hover:scale-103 hover:text-red-500 sm:text-xl"
          >
            Delete All
          </button>
        )}
      </div>

      {lines.length === 0 ? (
        <EmptyState
          icon={IoBagOutline}
          title="Your cart is empty"
          text="Looks like you haven't added anything yet."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-4 lg:col-span-2">
            {lines.map(({ product, qty }) => (
              <li
                key={product.id}
                className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md min-[480px]:flex-row min-[480px]:items-center"
              >
                <div className="flex items-center gap-4 min-[480px]:flex-1 min-[480px]:min-w-0">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-[#F6FAFF] p-2">
                    <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-bold text-ink">
                      <Link to={`/products/${product.id}`} className="hover:text-brand">{product.name}</Link>
                    </h2>
                    <p className="text-[14px] text-muted">{formatPrice(product.price)} each</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 min-[480px]:justify-end">
                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${product.name}`}
                      disabled={qty <= 1}
                      onClick={() => setQuantity(product.id, qty - 1)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center text-lg hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <IoRemove />
                    </button>
                    <span className="w-9 text-center text-[15px] font-semibold" aria-live="polite">
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label={`Increase quantity of ${product.name}`}
                      onClick={() => setQuantity(product.id, qty + 1)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center text-lg hover:bg-gray-100"
                    >
                      <IoAdd />
                    </button>
                  </div>

                  <p className="w-20 text-right text-[16px] font-bold text-ink">
                    {formatPrice(product.price * qty)}
                  </p>

                  <button
                    type="button"
                    aria-label={`Remove ${product.name} from cart`}
                    onClick={() => removeFromCart(product.id)}
                    className="cursor-pointer text-xl text-muted transition-colors hover:text-red-500"
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-xl bg-[#F6FAFF] p-5 sm:p-6 lg:sticky lg:top-44">
            <h2 className="mb-4 text-xl font-bold text-ink">Order Summary</h2>
            <dl className="space-y-3 text-[15px] text-copy">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="font-semibold">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="font-semibold">{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-3 text-lg font-bold text-ink">
                <dt>Total</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>

            {shipping > 0 && (
              <p className="mt-3 text-[13px] text-muted">
                Add {formatPrice(FREE_SHIPPING_FROM - subtotal)} more for free delivery.
              </p>
            )}

            {/* Checkout needs a backend/auth; for now it sends the user to sign in. */}
            <Link
              to="/login"
              className="mt-5 block rounded-lg bg-brand py-3 text-center text-[16px] font-bold text-white transition-colors hover:bg-brand-hover"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/products"
              className="mt-3 block text-center text-[14px] font-semibold text-brand hover:underline"
            >
              ← Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </Container>
  );
}
