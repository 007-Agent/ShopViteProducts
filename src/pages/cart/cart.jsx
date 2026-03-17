import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.scss";
import { clearCart } from "../../redux/slices/productSlice";
import { CartItem } from "./cartItem";
import axios from "axios";
export const Cart = (props) => {
  const user = props.user;
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems, props.user, "RTRT");
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  // const handleCheckout = () => {
  //   const orderData = {
  //     user: {
  //       name: user.name,
  //       email: user.email,
  //       phone: user.phone || "",
  //       address: user.address,
  //     },
  //     items: cartItems.map((item) => ({
  //       product_id: item.id,
  //       quantity: item.quantity,
  //     })),
  //   };

  //   console.log(orderData);
  // };
  const handleCheckout = async () => {
    // Проверка наличия данных пользователя
    if (
      !props.user ||
      !props.user.name ||
      !props.user.email ||
      !props.user.address
    ) {
      alert("Пожалуйста, заполните все данные покупателя");

      return;
    }

    const orderData = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      address: user.address,
      items: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await axios.post("/api/order/create", orderData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // если требуется токен
        },
      });
      console.log("Заказ создан:", response.data);
    } catch (error) {
      console.error("Ошибка при создании заказа:", error);
      alert("Не удалось оформить заказ. Попробуйте позже.");
    }
  };
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
          <button className="checkout-btn" onClick={handleCheckout}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};
