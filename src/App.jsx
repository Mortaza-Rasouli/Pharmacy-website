import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import StoreProvider from "./context/StoreProvider";
import Layout from "./components/Layout";

import About from "./pages/About";
import Careers from "./pages/Careers";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          {/* 404 is full-screen: no header / footer */}
          <Route path="notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
