import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";

function App() {
  const [favorite, setFavorite] = useState([]);
  const [buyProduct, setBuyProduct] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorite={favorite}
              setFavorite={setFavorite}
              buyProduct={buyProduct}
              setBuyProduct={setBuyProduct}
            />
          }
        />

        <Route
          path="home"
          element={
            <Home
              favorite={favorite}
              setFavorite={setFavorite}
              buyProduct={buyProduct}
              setBuyProduct={setBuyProduct}
            />
          }
        />

        <Route path="login" element={<Login />} />

        <Route
          path="cart"
          element={
            <Cart buyProduct={buyProduct} setBuyProduct={setBuyProduct} />
          }
        />

        <Route
          path="wishlist"
          element={<Wishlist favorite={favorite} setFavorite={setFavorite} />}
        />

        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
