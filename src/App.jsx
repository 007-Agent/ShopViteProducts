import "./App.css";
import React from "react";
import { Navbar } from "./components/navbar";
import Shop from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/products/Catalog";
import ProductDetail from "./pages/products/ProductDetail/ProductDetail";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
