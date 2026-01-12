import React from "react";

import "./cart.scss";
export const CartItem = ({ id, productName, price, productImage, count }) => {
  return (
    <div className="cartItem">
      <img src={productImage} alt="yrjytrj" />
      <div className="description">
        <p>
          <b>
            {productName} + {id}
          </b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button> - </button>
          <input />
          <button> + </button>
        </div>
      </div>
    </div>
  );
};
