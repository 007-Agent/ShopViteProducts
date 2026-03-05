import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.scss";
import { CartItem } from "./cartItem";
export const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems, "RTRT")
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Корзина пуста</h2>
        <p>Добавьте товары из каталога</p>
        <a href="/catalog">Перейти в каталог</a>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="cart__info">
        <h1>Твои покупки</h1>
        <span>Цена: </span>
      </div>
      <div className="cartItems">
        {cartItems.map((item) => {
          return (
            <CartItem
              
              key={item.id}
              item={item}
              // name={item.name}
              // img={item.main_image}
              // price={item.price}
              // articl={item.articl}
              // productId={item.id}
            />
          );
        })}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <strong>Итого: {totalPrice.toFixed(2)} ₽</strong>
        </div>
        <div className="cart-actions">
          <button onClick={() => dispatch(clearCart())} className="clear-btn">
            Очистить корзину
          </button>
          <button className="checkout-btn">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};
