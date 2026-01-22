import React from "react";
import ProductCard from "./SmartphonesCard/ProductCard";

const SmartfonProperty = (props) => {
  const smartphones = props.data;
  const category = props.category;
  if (!smartphones || smartphones.length === 0) {
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
          Найдено товаров: {smartphones.length}
        </div>
      </div>

      <div className="products-grid">
        {smartphones.map((product) => (
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
};
export default SmartfonProperty;
