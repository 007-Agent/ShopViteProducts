import React from "react";
import { useSelector } from "react-redux";
import "./cart.scss";
import { CartItem } from "./cartItem";
export const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="cart">
      <div className="cart__info">
        <h1>Твои покупки</h1>
        <span>Цена: </span>
      </div>
      <div className="cartItems">
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              productName={item.productName}
              price={item.price}
              productImage={item.productImage}
              count={item.count}
            />
          );
        })}
      </div>
    </div>
  );
};
