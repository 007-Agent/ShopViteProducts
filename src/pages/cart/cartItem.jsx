import React from "react";
import { useDispatch } from "react-redux";
import "./cartitem.scss";
import { removeFromCart } from "../../redux/slices/productSlice";
export const CartItem = ({ item }) => {
  console.log(item, "llll");
  const dispatch = useDispatch();
  return (
    <div key={item.id} className="cart-item">
      <img
        src={item.main_image}
        alt={item.name}
        className="cart-item-image"
        width="80"
      />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p className="cart-item-price">{item.price} ₽</p>
        <p className="cart-item-sku">Артикул: {item.sku}</p>
      </div>
      <div className="cart-item-controls">
        <label>
          Количество:
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(item.id, parseInt(e.target.value, 10))
            }
          />
        </label>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="remove-btn"
        >
          Удалить
        </button>
      </div>
      <div className="cart-item-total">{item.price * item.quantity} ₽</div>
    </div>
  );
};
