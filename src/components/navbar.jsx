import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Покупки</Link>
        <Link to="/products">Каталог</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
