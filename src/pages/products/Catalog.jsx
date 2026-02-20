import React, { useState, useEffect } from "react";
import "./catalog.scss";
import Televisors from "./TV/TelevisorProperty";
import Smartfons from "./Smartfon/SmartfonProperty";
import Computers from "./Computers/ComputerProperty";
import ProductCard from "./Smartfon/SmartphonesCard/ProductCard";
import axios from "axios";

export const Catalog = () => {
  const [category, setCategory] = useState(2);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRadioChange = (event) => {
    const selectedId = parseInt(event.target.value);
    setCategory(selectedId);
    fetchProductsByCategory(selectedId);
  };

  const handleSelectChange = (event) => {
    const selectedId = parseInt(event.target.value);
    setCategory(selectedId);
    fetchProductsByCategory(selectedId);
  };

  const fetchProductsByCategory = async (categoryId) => {
    console.log(categoryId, "FFERE");
    try {
      const response = await axios.post("/api/products/category", {
        categoryId: categoryId,
      });

      const data = await response.data.data;
      console.log("Получены данные:", data);

      setProducts(data || data || []);
    } catch (err) {
      console.error("Ошибка при загрузке товаров:", err);

      setProducts([]);
    }
  };

  const handleProductClick = (id) => {
    console.log(id, "ID");
  };

  return (
    <>
      <div className="main">
        <h2>Выберите категорию товара</h2>

        <div className="content__catalog">
          <label>
            <input
              type="radio"
              name="category"
              value="2"
              checked={category === "Смартфоны"}
              onChange={handleRadioChange}
            />
            Смартфоны
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="3"
              checked={category === "Компьютеры"}
              onChange={handleRadioChange}
            />
            Компьютеры
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="1"
              checked={category === "Телевизоры"}
              onChange={handleRadioChange}
            />
            Телевизоры
          </label>
        </div>

        {/* Выпадающий список */}
        <h3>или выберите из списка:</h3>
        <select value={category} onChange={handleSelectChange}>
          <option value="2">Смартфоны</option>
          <option value="3">Компьютеры</option>
          <option value="1">Телевизоры</option>
        </select>
      </div>
      <div className="polka"></div>

      {/* Отображение компонентов по выбранной категории */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard category={category} key={product.id} product={product} />
        ))}
      </div>
      {/* {category === 2 && <Smartfons data={products} category={category} />}
      {category === 1 && <Televisors data={products} category={category} />}
      {category === 3 && <Computers data={products} category={category} />} */}
    </>
  );
};
