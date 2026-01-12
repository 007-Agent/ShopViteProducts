import React, { useState } from "react";
import "./catalog.scss";
import Televisors from "./TV/Televisors";
import Smartfons from "./Smartfon/Smartfons";
import Computers from "./Computers/Computers";

export const Catalog = () => {
  const [category, setCategory] = useState("Смартфоны");

  const handleRadioChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
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
              value="Смартфоны"
              checked={category === "Смартфоны"}
              onChange={handleRadioChange}
            />
            Смартфоны
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Компьютеры"
              checked={category === "Компьютеры"}
              onChange={handleRadioChange}
            />
            Компьютеры
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Телевизоры"
              checked={category === "Телевизоры"}
              onChange={handleRadioChange}
            />
            Телевизоры
          </label>
        </div>

        {/* Выпадающий список */}
        <h3>или выберите из списка:</h3>
        <select value={category} onChange={handleSelectChange}>
          <option value="Смартфоны">Смартфоны</option>
          <option value="Компьютеры">Компьютеры</option>
          <option value="Телевизоры">Телевизоры</option>
        </select>
      </div>
      <div className="polka"></div>

      {/* Отображение компонентов по выбранной категории */}
      {category === "Смартфоны" && <Smartfons />}
      {category === "Телевизоры" && <Televisors />}
      {category === "Компьютеры" && <Computers />}
    </>
  );
};
