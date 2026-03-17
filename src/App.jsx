import "./App.css";
import React, { useEffect } from "react";
import { Navbar } from "./components/navbar";
import Shop from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/products/Catalog";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "./redux/slices/checkUser";
import ProductDetail from "./pages/products/ProductDetail/ProductDetail";
import { MyOrders } from "./components/Orders/Orders";
function App() {
  const { user, token } = useSelector((state) => state.user);
  console.log(user, "MCCB");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserProfile());
    }
  }, [token, user, dispatch]);

  return (
    <div className="App">
      <Navbar user={user} token={token} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/orders" element={<MyOrders token={token} />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/cart" element={<Cart user={user} />} />
        <Route
          path="/product/:category/:id"
          element={<ProductDetail user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
