# Medico Store – Pharmacy Website

React 19 + Vite + Tailwind CSS v4 + React Router 7.

## Scripts

```bash
pnpm install
pnpm dev       # start dev server
pnpm build     # production build
pnpm lint      # eslint
```

## Structure

```
src/
  components/      shared UI (Header, Footer, ProductCard, ProductSection, …)
  context/         cart & wishlist store (persisted in localStorage)
  data/            products, categories, site info / navigation
  hooks/           useStore()
  pages/           Home, Products, Cart, Wishlist, About, Services,
                   Careers, Contact, Login, NotFound
```

Cart and wishlist live in `StoreProvider` and are read anywhere with `useStore()`.
Products are defined once in `src/data/products.js`.

## Deploying

This is a single-page app: configure your host to rewrite all routes to `index.html`.

## Still to connect

- Login / Register and Contact form submit handlers (`TODO` comments mark the spots).
- Checkout (the cart's button currently leads to the sign-in page).
