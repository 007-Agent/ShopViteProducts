import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Eye, Zap } from "lucide-react";
import "./smart.scss";
const ProductCard = ({ product, onProductClick, category }) => {
  console.log(category, "CATTT");
  // Форматируем цену
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };
  const navigate = useNavigate();
  const calculateDiscount = () => {
    if (product.oldPrice && product.oldPrice > product.price) {
      const discount = Math.round((1 - product.price / product.oldPrice) * 100);
      return discount;
    }
    return null;
  };

  const handleCardClick = () => {
    navigate(`/product/${category}/${product.id}`);
  };
  const getCategoryName = (categoryId) => {
    switch (categoryId) {
      case 1:
        return "Телевизор";
      case 2:
        return "Смартфон";
      case 3:
        return "Ноутбук";
      default:
        return "Товар";
    }
  };

  const discount = calculateDiscount();

  return (
    <div className="product-card-wrapper">
      <div className="product-card" onClick={handleCardClick}>
        {/* Бейдж скидки */}
        {discount && <div className="discount-badge">-{discount}%</div>}

        {/* Бейдж хит продаж */}
        {product.isPopular && (
          <div className="popular-badge">
            <Zap size={12} /> Хит
          </div>
        )}

        <div className="product-image-container">
          <img
            src={product.main_image}
            alt={`${product.brand} `}
            className="product-image"
          />

          <button
            className="quick-view"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Eye size={18} />
          </button>
        </div>

        {/* Информация о товаре */}
        <div className="product-info">
          {/* Бренд */}
          <div className="product-brand">{product.brand}</div>

          {/* Название модели */}
          <h3 className="product-title">
            {getCategoryName(category)} {product.brand} {product.name}
          </h3>

          {/* Цена */}
          <div className="product-pricing">
            <div className="price-current">
              Цена: {formatPrice(product.price)} ₽
            </div>
            {product.oldPrice && product.oldPrice > product.price && (
              <div className="price-old">{formatPrice(product.oldPrice)} ₽</div>
            )}
          </div>

          {/* Рейтинг и отзывы */}
          <div className="product-rating-section">
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className={`star ${
                    index < Math.floor(product.rating) ? "filled" : ""
                  }`}
                />
              ))}
              <span className="rating-value">{product.rating}</span>
            </div>
            <div className="reviews">{product.reviews_count || 0} отзывов</div>
          </div>

          {/* Кнопка добавления в корзину */}
          <button
            className="add-to-cart-button"
            onClick={(e) => {
              e.stopPropagation();
              // Логика добавления в корзину
            }}
          >
            <ShoppingCart size={16} />В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
