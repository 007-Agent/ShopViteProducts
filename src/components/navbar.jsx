import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/checkUser";
import { logout } from "../redux/slices/checkUser";
import { clearCart } from "../redux/slices/productSlice";
import axios from "axios";
import "./navbar.scss";

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("login");
  const { user, token } = props;
  const dispatch = useDispatch();
  const openModal = (selectedMode) => {
    setMode(selectedMode);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleExitUser = () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Отправка:", data);

    try {
      let response;
      if (mode === "login") {
        dispatch(loginUser({ data }));
        closeModal();
      } else {
        response = await axios.post("/api/user/register", data);
      }
      console.log(response.data);
      // например, закрываем после успеха
    } catch (error) {
      console.error("Ошибка:", error.message);
      // показать ошибку пользователю
    }
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Покупки</Link>
        <Link to="/products">Каталог</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      {user || token ? (
        <div className="login_pos">
          <button onClick={handleExitUser}>Выйти</button>
        </div>
      ) : (
        <div className="login_pos">
          <button onClick={() => openModal("login")}>Вход</button>
          <button onClick={() => openModal("register")}>Регистрация</button>
        </div>
      )}
      {/* <div className="login_pos">
        <button >Выйти</button>
      </div>
      <div className="login_pos">
        <button onClick={() => openModal("login")}>Вход</button>
        <button onClick={() => openModal("register")}>Регистрация</button>
      </div> */}

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>

            <form onSubmit={handleSubmit}>
              {mode === "register" && (
                <>
                  <div className="form-group">
                    <label>Имя</label>
                    <input type="text" name="name" required />
                  </div>
                </>
              )}
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              {mode === "register" && (
                <>
                  <div className="form-group">
                    <label>Номер Телефона</label>
                    <input type="phone" name="phone" required />
                  </div>
                  <div className="form-group">
                    <label>Город</label>
                    <input type="text" name="city" required />
                  </div>
                  <div className="form-group">
                    <label>Адрес</label>
                    <input type="text" name="address" required />
                  </div>
                </>
              )}
              <div className="form-group">
                <label>Пароль</label>
                <input type="password" name="password" required />
              </div>

              {mode === "register" && (
                <div className="form-group">
                  <label>Подтверждение пароля</label>
                  <input type="password" name="confirmPassword" required />
                </div>
              )}
              <button type="submit">
                {mode === "login" ? "Войти" : "Зарегистрироваться"}
              </button>
            </form>

            <div className="modal-switch">
              {mode === "login" ? (
                <p>
                  Нет аккаунта?{" "}
                  <button onClick={() => setMode("register")}>
                    Зарегистрируйтесь
                  </button>
                </p>
              ) : (
                <p>
                  Уже есть аккаунт?{" "}
                  <button onClick={() => setMode("login")}>Войдите</button>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
