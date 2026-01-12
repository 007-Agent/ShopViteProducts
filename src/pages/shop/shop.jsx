import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.scss";

function Shop() {
  return (
    <div>
      <div className="shopTitle">
        <h1>Наши товары!</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            productName={product.productName}
            price={product.price}
            productImage={product.productImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
