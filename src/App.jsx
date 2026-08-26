import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
