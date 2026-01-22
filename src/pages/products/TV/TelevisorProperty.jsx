import React from "react";
import ProductCard from "../Smartfon/SmartphonesCard/ProductCard";
export default function TelevisorProperty(props) {
  const computers = props.data;
  const category = props.category;
  if (!computers || computers.length === 0) {
    return (
      <div className="empty-state">
        <h3>Смартфоны не найдены</h3>
        <p>Попробуйте изменить параметры поиска</p>
      </div>
    );
  }
  const handleProductClick = (id) => {
    console.log(id, "ID");
  };
  return (
    <div className="category-products">
      <div className="category-header">
        <h2>Смартфоны</h2>
        <div className="products-count">
          Найдено товаров: {computers.length}
        </div>
      </div>

      <div className="products-grid">
        {computers.map((product) => (
          <ProductCard
            category={category}
            key={product.id}
            product={product}
            onProductClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
}
