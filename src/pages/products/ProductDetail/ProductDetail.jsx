import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Smartphone, Tv, Monitor, Loader, AlertCircle } from "lucide-react";
import ComputerProperty from "../Computers/ComputerProperty";
import SmartfonProperty from "../Smartfon/SmartfonProperty";
import TelevisorProperty from "../TV/TelevisorProperty";
import axios from "axios";
import "./detail.scss";

export default function ProductDetail() {
  const { id, category } = useParams();
  console.log(id, category); // /product/:category/:id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = axios.create({
    baseURL: "http://localhost:5771", // Базовый URL API
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Запрос к вашему API
        const response = await api.post("/api/property/all", {
          moment_id: parseInt(id),
          categoryId: parseInt(category),
        });
        const data = await response.data.data;
        console.log(data, "DDDD");
        setProduct(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, category]);
  console.log(product, "product");
  // Функция для рендеринга нужного шаблона

  // Функция для иконки категории
  const getCategoryIcon = () => {
    switch (category) {
      case "smartphones":
        return <Smartphone size={24} />;
      case "tv":
        return <Tv size={24} />;
      case "computers":
        return <Monitor size={24} />;
      default:
        return <Smartphone size={24} />;
    }
  };

  // Функция для названия категории
  const getCategoryName = () => {
    const names = {
      smartphones: "Смартфон",
      tv: "Телевизор",
      computers: "Компьютер",
    };
    return names[category] || "Товар";
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Loader className="spinner" size={48} />
        <p>Загружаем характеристики...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <AlertCircle size={48} />
        <h3>Ошибка загрузки</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found">
        <h2>Товар не найден</h2>
      </div>
    );
  }
  const renderSpecsTemplate = () => {
    if (!product?.specifications) return null;
    const categoryId = parseInt(category);
    console.log(category, "CATEG");
    switch (categoryId) {
      case 2:
        return <SmartfonProperty specs={product} />;
      case 1:
        return <TelevisorProperty specs={product.specifications} />;
      case 3:
        return <ComputerProperty specs={product.specifications} />;
    }
  };

  return (
    <div className="product-detail-page">
      {/* Хлебные крошки */}
      <nav className="breadcrumbs">
        <a href="/">Главная</a> /
        <a href={`/catalog/${category}`}>{getCategoryName()}</a> /
        <span>{product.name}</span>
      </nav>

      {/* Заголовок с иконкой категории */}
      <div className="product-header">
        <div className="category-badge">
          {getCategoryIcon()}
          <span>{getCategoryName()}</span>
        </div>
        <h1>
          {product.brand} {product.name}
        </h1>
        <p className="product-sku">Артикул: {product.sku}</p>
      </div>

      <div className="product-content">
        {/* Галерея изображений (общая для всех) */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.main_image} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {product.second_image && (
              <img src={product.second_image} alt="Вид 2" />
            )}
            {product.third_image && (
              <img src={product.third_image} alt="Вид 3" />
            )}
            {product.four_image && <img src={product.four_image} alt="Вид 4" />}
          </div>
        </div>

        {/* Блок с ценой и кнопками (общий для всех) */}
        <div className="product-sidebar">
          <div className="price-block">
            <div className="current-price">{product.price} ₽</div>
            <button className="buy-button">Купить</button>
            <button className="cart-button">В корзину</button>
          </div>

          {/* Общие характеристики (для всех категорий) */}
          <div className="common-specs">
            <h3>Общие характеристики</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span>Бренд:</span>
                <strong>{product.brand}</strong>
              </div>
              <div className="spec-item">
                <span>Рейтинг:</span>
                <strong>{product.rating} ★</strong>
              </div>
              <div className="spec-item">
                <span>Гарантия:</span>
                <strong>{product.warranty_months} мес.</strong>
              </div>
              <div className="spec-item">
                <span>Наличие:</span>
                <strong className={product.in_stock ? "in-stock" : "out-stock"}>
                  {product.in_stock ? "В наличии" : "Нет в наличии"}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-section">
        <h3>Описание</h3>
        <p>{product.description}</p>
      </div>
      {/* Специфические характеристики (рендерим нужный шаблон) */}
      <div className="specifications-section">
        <h2>Технические характеристики</h2>
        {renderSpecsTemplate()}
      </div>

      {/* Общее описание */}
    </div>
  );
}

// Дефолтный шаблон для неизвестных категорий
const DefaultSpecsTemplate = ({ specs }) => (
  <div className="default-specs">
    <pre>{JSON.stringify(specs, null, 2)}</pre>
  </div>
);
