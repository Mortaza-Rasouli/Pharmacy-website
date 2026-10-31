import { useCallback, useEffect, useMemo, useState } from "react";
import { StoreContext } from "./StoreContext";
import { PRODUCTS } from "../data/products";

const FAVORITE_KEY = "medico:favorite";
const CART_KEY = "medico:cart";
const MAX_QTY = 99;

const knownIds = new Set(PRODUCTS.map((p) => p.id));

function read(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode / quota) – ignore */
  }
}

const initialFavorite = () => {
  const saved = read(FAVORITE_KEY);
  return Array.isArray(saved) ? saved.filter((id) => knownIds.has(id)) : [];
};

const initialCart = () => {
  const saved = read(CART_KEY);
  if (!Array.isArray(saved)) return [];
  return saved
    .filter(
      (item) =>
        item &&
        knownIds.has(item.id) &&
        Number.isInteger(item.qty) &&
        item.qty > 0,
    )
    .map((item) => ({ id: item.id, qty: Math.min(item.qty, MAX_QTY) }));
};

export default function StoreProvider({ children }) {
  const [favorite, setFavorite] = useState(initialFavorite);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => write(FAVORITE_KEY, favorite), [favorite]);
  useEffect(() => write(CART_KEY, cart), [cart]);

  const toggleFavorite = useCallback((id) => {
    setFavorite((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const clearFavorites = useCallback(() => setFavorite([]), []);

  const addToCart = useCallback((id) => {
    setCart((prev) =>
      prev.some((item) => item.id === id) ? prev : [...prev, { id, qty: 1 }],
    );
  }, []);

  const setQuantity = useCallback((id, qty) => {
    const next = Math.max(1, Math.min(MAX_QTY, qty));
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: next } : item)),
    );
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const value = useMemo(
    () => ({
      favorite,
      cart,
      favoriteCount: favorite.length,
      cartCount: cart.reduce((sum, item) => sum + item.qty, 0),
      isFavorite: (id) => favorite.includes(id),
      isInCart: (id) => cart.some((item) => item.id === id),
      toggleFavorite,
      clearFavorites,
      addToCart,
      setQuantity,
      removeFromCart,
      clearCart,
    }),
    [
      favorite,
      cart,
      toggleFavorite,
      clearFavorites,
      addToCart,
      setQuantity,
      removeFromCart,
      clearCart,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
