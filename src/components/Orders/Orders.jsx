import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./orders.scss"; // если нужны стили

export const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/order/getorders", {
          data: token,
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(response.data);
        console.log(response.data, "rrfn");
      } catch (err) {
        setError(err.response?.data?.error || "Ошибка загрузки заказов");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [token]);

  const handlePay = async (order) => {
    try {
      await axios.patch(
        `/api/order/${order.order_id}/pay`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      // Обновляем состояние, помечая заказ как оплаченный
      setOrders((prev) =>
        prev.map((order) =>
          order.id === order_id
            ? { ...order, payment_status: "paid", status: "paid" }
            : order,
        ),
      );
    } catch (err) {
      alert("Не удалось оплатить заказ. Попробуйте позже.");
    }
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="my-orders">
      <h1>Мои заказы</h1>
      {orders.length === 0 ? (
        <p>У вас пока нет заказов.</p>
      ) : (
        orders.map((order, i) => (
          <div key={i} className="order-card">
            <div className="order-header">
              <span className="order-number">Заказ №{order.order_number}</span>
              <span className="order-date">
                от {new Date(order.created_at).toLocaleDateString()}
              </span>
              <span className="order-total">Сумма: {order.total_amount} ₽</span>
              <span className="order-payment-status">
                Статус оплаты:{" "}
                {order.payment_status === "paid" ? "Оплачен" : "Ожидает оплаты"}
              </span>
              {order.payment_status === "pending" && (
                <button className="pay-btn" onClick={() => handlePay(order)}>
                  Оплатить
                </button>
              )}
            </div>
            <div className="order-items">
              {order.items.map((item, idx) => (
                <div key={idx} className="order-item">
                  <span className="item-name">{item.product_name}</span>
                  <span className="item-price">{item.price} ₽</span>
                  <span className="item-quantity">x {item.quantity}</span>
                  <span className="item-total">= {item.total} ₽</span>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
