import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Zap,
  Battery,
  Camera,
  Wifi,
  Palette,
  Cpu,
  MemoryStick,
  Database,
  Radio,
  CheckCircle,
  XCircle,
  Star,
  ShoppingBag,
  Heart,
  Share2,
  ArrowRight,
  Sparkles,
  Shield,
  Volume2,
} from "lucide-react";
import "./detail.scss";

const PhoneSpecsPage = () => {
    const { category, id } = useParams();
    console.log(id, category,  "FFGFGFGF")
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Mock данные для демонстрации
    const mockPhone = {
      id: id,
      name: "Galaxy S24 Ultra",
      brand: "Samsung",
      model: "SM-S928B",
      sku: "8806094779048",
      price: 119999,
      oldPrice: 139999,
      rating: 4.8,
      reviews: 342,
      tags: ["Флагман", "Камера 200MP", "AI-функции"],

      images: [
        "https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=800",
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w-800",
        "https://images.unsplash.com/photo-1598327105854-c8674faddf74?w=800",
      ],

      colors: [
        { name: "Титановый черный", value: "#1a1a1a", available: true },
        { name: "Титановый серый", value: "#8a8a8a", available: true },
        { name: "Титановый фиолетовый", value: "#7c3aed", available: false },
        { name: "Титановый желтый", value: "#f59e0b", available: true },
      ],

      specifications: {
        display: {
          diagonal: "6.8''",
          type: "Dynamic AMOLED 2X",
          resolution: "3088 x 1440",
          refreshRate: "120 Гц",
          protection: "Gorilla Glass Armor",
          brightness: "2600 нит",
        },
        performance: {
          processor: "Snapdragon 8 Gen 3",
          gpu: "Adreno 750",
          ram: "12 ГБ LPDDR5X",
          storage: "256 ГБ UFS 4.0",
          cooling: "Vapor Chamber",
        },
        camera: {
          main: "200 МП с OIS",
          ultraWide: "12 МП, 120°",
          telephoto: "50 МП, 5x оптический зум",
          periscope: "10 МП, 10x оптический зум",
          front: "12 МП",
          video: "8K @ 30fps",
        },
        battery: {
          capacity: "5000 мА·ч",
          charging: "45 Вт Super Fast Charging 2.0",
          wireless: "15 Вт Fast Wireless Charging 2.0",
          reverse: "4.5 Вт Wireless PowerShare",
        },
        connectivity: {
          cellular: "5G (Sub-6 и ммВолны)",
          wifi: "Wi-Fi 6E (802.11ax)",
          bluetooth: "5.3",
          nfc: true,
          uwb: true,
          port: "USB Type-C 3.2",
        },
        os: "Android 14 + One UI 6.1",
        sim: "Dual SIM (2 Nano + eSIM)",
        audio: "Стереодинамики, Dolby Atmos",
        biometrics: {
          fingerprint: "Ультразвуковой сканер",
          face: "Распознавание лица 2D",
        },
        dimensions: "162.3 x 79 x 8.6 мм",
        weight: "232 г",
        waterResistance: "IP68",
        colors: "Титановый черный, серый, фиолетовый, желтый",
      },
    };

    setTimeout(() => {
      setPhone(mockPhone);
      setSelectedColor(mockPhone.colors[0]);
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <Smartphone className="spinning-phone" size={48} />
          <p>Загружаем характеристики...</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  const discount = phone.oldPrice
    ? Math.round((1 - phone.price / phone.oldPrice) * 100)
    : 0;

  const specsList = [
    { icon: Smartphone, label: "Бренд", value: phone.brand, color: "#3b82f6" },
    { icon: Cpu, label: "Модель", value: phone.model, color: "#8b5cf6" },
    { icon: Database, label: "Артикул", value: phone.sku, color: "#10b981" },
    {
      icon: Smartphone,
      label: "Диагональ",
      value: phone.specifications.display.diagonal,
      color: "#ef4444",
    },
    {
      icon: MemoryStick,
      label: "Экран",
      value: phone.specifications.display.type,
      color: "#f59e0b",
    },
    {
      icon: Zap,
      label: "Тип матрицы",
      value: phone.specifications.display.type,
      color: "#06b6d4",
    },
    {
      icon: Radio,
      label: "Частота",
      value: phone.specifications.display.refreshRate,
      color: "#ec4899",
    },
    {
      icon: MemoryStick,
      label: "Память",
      value: phone.specifications.performance.storage,
      color: "#84cc16",
    },
    {
      icon: Cpu,
      label: "ОЗУ",
      value: phone.specifications.performance.ram,
      color: "#f97316",
    },
    {
      icon: Camera,
      label: "Камера",
      value: phone.specifications.camera.main,
      color: "#8b5cf6",
    },
    {
      icon: Battery,
      label: "Аккумулятор",
      value: phone.specifications.battery.capacity,
      color: "#10b981",
    },
    {
      icon: Shield,
      label: "ОС",
      value: phone.specifications.os,
      color: "#3b82f6",
    },
    {
      icon: Cpu,
      label: "Процессор",
      value: phone.specifications.performance.processor,
      color: "#ef4444",
    },
    {
      icon: Radio,
      label: "SIM",
      value: phone.specifications.sim,
      color: "#8b5cf6",
    },
    {
      icon: Radio,
      label: "Порт",
      value: phone.specifications.connectivity.port,
      color: "#f59e0b",
    },
    {
      icon: Palette,
      label: "Цвет",
      value: selectedColor?.name || phone.specifications.colors,
      color: "#ec4899",
    },
    {
      icon: Wifi,
      label: "5G",
      value: phone.specifications.connectivity.cellular.includes("5G"),
      color: "#06b6d4",
      isBoolean: true,
    },
    {
      icon: Radio,
      label: "NFC",
      value: phone.specifications.connectivity.nfc,
      color: "#84cc16",
      isBoolean: true,
    },
    {
      icon: Volume2,
      label: "Аудио",
      value: phone.specifications.audio,
      color: "#f97316",
    },
    {
      icon: Shield,
      label: "Защита",
      value: phone.specifications.waterResistance,
      color: "#3b82f6",
    },
  ];

  return (
    <div className="phone-specs-page">
      {/* Фон с градиентом */}
      <div className="background-gradient"></div>

      {/* Декоративные элементы */}
      <div className="floating-shapes">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape square"></div>
      </div>

      <div className="container">
        {/* Хедер */}
        <header className="page-header">
          <Link to="/products">
            <button className="back-button">
              <ArrowRight className="rotate-180" /> Назад
            </button>
          </Link>

          <h1 className="page-title">
            <Sparkles className="sparkle-icon" />
            Характеристики
            <span className="title-glow">
              {phone.brand} {phone.name}
            </span>
          </h1>
          <div className="header-actions">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={() => setFavorite(!favorite)}
            >
              <Heart size={20} />
            </button>
            <button className="share-btn">
              <Share2 size={20} />
            </button>
          </div>
        </header>

        <div className="product-overview">
          {/* Левая часть - изображение */}
          <div className="image-section">
            <div
              className={`image-container ${show3D ? "perspective-mode" : ""}`}
            >
              <img
                src={phone.images[activeImage]}
                alt={`${phone.brand} ${phone.name}`}
                className="product-image"
              />

              {discount > 0 && (
                <div className="discount-badge">-{discount}%</div>
              )}

              <div className="image-controls">
                <button
                  className="toggle-3d"
                  onClick={() => setShow3D(!show3D)}
                >
                  {show3D ? "2D" : "3D"}
                </button>
              </div>
            </div>

            {/* Миниатюры */}
            <div className="image-thumbnails">
              {phone.images.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail ${activeImage === index ? "active" : ""}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`Вид ${index + 1}`} />
                </button>
              ))}
            </div>

            {/* Выбор цвета */}
            <div className="color-selector">
              <h3>Цвета устройства</h3>
              <div className="color-options">
                {phone.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-option ${!color.available ? "unavailable" : ""} ${selectedColor?.name === color.name ? "selected" : ""}`}
                    onClick={() => color.available && setSelectedColor(color)}
                    style={{ "--color": color.value }}
                    title={color.name}
                  >
                    {!color.available && <XCircle size={12} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Правая часть - основная информация */}
          <div className="info-section">
            <div className="product-header">
              <div className="brand-badge">
                <Smartphone size={16} />
                {phone.brand}
              </div>

              <h2 className="product-name">
                {phone.name}
                <span className="model">{phone.model}</span>
              </h2>

              <div className="tags">
                {phone.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Рейтинг */}
            <div className="rating-section">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(phone.rating) ? "filled" : ""}
                  />
                ))}
                <span className="rating">{phone.rating}</span>
                <span className="reviews">({phone.reviews} отзывов)</span>
              </div>
            </div>

            {/* Цена */}
            <div className="price-section">
              <div className="current-price">{formatPrice(phone.price)} ₽</div>
              {phone.oldPrice && (
                <div className="old-price">{formatPrice(phone.oldPrice)} ₽</div>
              )}
              <div className="price-hint">В кредит от 3 499 ₽/мес</div>
            </div>

            {/* Кнопки действий */}
            <div className="action-buttons">
              <button className="buy-now">
                <ShoppingBag size={20} />
                Купить сейчас
              </button>
              <button className="add-to-cart">Добавить в корзину</button>
            </div>

            {/* Быстрые характеристики */}
            <div className="quick-specs">
              <h3>Ключевые особенности</h3>
              <div className="quick-grid">
                <div className="quick-item">
                  <Camera size={18} />
                  <span>{phone.specifications.camera.main.split(" ")[0]}</span>
                </div>
                <div className="quick-item">
                  <Battery size={18} />
                  <span>{phone.specifications.battery.capacity}</span>
                </div>
                <div className="quick-item">
                  <Cpu size={18} />
                  <span>
                    {phone.specifications.performance.processor.split(" ")[0]}
                  </span>
                </div>
                <div className="quick-item">
                  <MemoryStick size={18} />
                  <span>{phone.specifications.performance.ram}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Основные характеристики */}
        <div className="specs-section">
          <div className="section-header">
            <h2>Все характеристики</h2>
            <p>Полная информация о устройстве</p>
          </div>

          <div className="specs-grid">
            {specsList.map((spec, index) => (
              <div
                key={index}
                className="spec-card"
                style={{
                  "--card-color": spec.color,
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className="spec-icon"
                  style={{ backgroundColor: spec.color }}
                >
                  <spec.icon size={20} />
                </div>

                <div className="spec-content">
                  <h4>{spec.label}</h4>
                  <div className="spec-value">
                    {spec.isBoolean ? (
                      spec.value ? (
                        <span className="boolean-true">
                          <CheckCircle size={16} />
                          Есть
                        </span>
                      ) : (
                        <span className="boolean-false">
                          <XCircle size={16} />
                          Нет
                        </span>
                      )
                    ) : (
                      spec.value
                    )}
                  </div>
                </div>

                <div className="spec-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="extra-info">
          <div className="info-card">
            <Shield size={24} />
            <h3>Гарантия 24 месяца</h3>
            <p>Официальная гарантия производителя</p>
          </div>
          <div className="info-card">
            <Zap size={24} />
            <h3>Быстрая доставка</h3>
            <p>Завтра в любой пункт выдачи</p>
          </div>
          <div className="info-card">
            <CheckCircle size={24} />
            <h3>Проверка качества</h3>
            <p>Каждый телефон тестируется</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSpecsPage;
