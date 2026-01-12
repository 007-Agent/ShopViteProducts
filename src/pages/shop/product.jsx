import React from 'react';
import './shop.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
export const Product = ({ id, productName, price, productImage }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const onclickCart = () => {
    const item = {
      id,
      productName,
      price,
      productImage,
      count: 0,
    };
    dispatch(addItem(item));
  };
  console.log(items);

  return (
    <div className="product">
      <img src={productImage} alt="leart" />
      <div className="description">
        <p>
          <b>
            {productName} + {id}
          </b>
        </p>
        <p>{price} руб</p>
      </div>
      <button onClick={onclickCart} className="addToCartBttn">
        Добавить в корзину
      </button>
    </div>
  );
};
