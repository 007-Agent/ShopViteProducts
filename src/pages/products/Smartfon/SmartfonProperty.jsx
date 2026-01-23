import React from "react";
import "./smartdons.scss";

const SmartfonProperty = ({ specs }) => {
  const { specifications, warranty_months, brand, name } = specs;

  return (
    <div className="phone-specs">
      <div className="phone-specs__header">
        <h2 className="phone-specs__title">Характеристики {name}</h2>
        <div className="phone-specs__brand-badge">{brand}</div>
      </div>

      <div className="phone-specs__content">
        {/* Секция экрана */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">📱</span>
            Экран
          </h3>
          <div className="spec-section__items">
            <div className="spec-item">
              <span className="spec-item__label">Диагональ:</span>
              <span className="spec-item__value">
                {specifications.screen_size}"
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-item__label">Разрешение:</span>
              <span className="spec-item__value">
                {specifications.screen_resolution}
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-item__label">Тип матрицы:</span>
              <span className="spec-item__value">
                {specifications.screen_type}
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-item__label">Частота обновления:</span>
              <span className="spec-item__value">
                {specifications.refresh_rate} Гц
              </span>
            </div>
          </div>
        </div>

        {/* Секция производительности */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">⚙️</span>
            Производительность
          </h3>
          <div className="spec-section__items">
            <div className="spec-item">
              <span className="spec-item__label">Оперативная память:</span>
              <span className="spec-item__value">{specifications.ram} ГБ</span>
            </div>
            <div className="spec-item">
              <span className="spec-item__label">Встроенная память:</span>
              <span className="spec-item__value">
                {specifications.storage || "256"} ГБ
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-item__label">Процессор:</span>
              <span className="spec-item__value">
                {specifications.processor}
              </span>
            </div>
            {specifications.battery_capacity && (
              <div className="spec-item">
                <span className="spec-item__label">Батарея:</span>
                <span className="spec-item__value">
                  {specifications.battery_capacity} мАч
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Секция камеры, если есть данные */}
        {(specifications.camera_main || specifications.camera_front) && (
          <div className="spec-section">
            <h3 className="spec-section__title">
              <span className="spec-section__icon">📷</span>
              Камера
            </h3>
            <div className="spec-section__items">
              {specifications.camera_main && (
                <div className="spec-item">
                  <span className="spec-item__label">Основная камера:</span>
                  <span className="spec-item__value">
                    {specifications.camera_main}
                  </span>
                </div>
              )}
              {specifications.camera_front && (
                <div className="spec-item">
                  <span className="spec-item__label">Фронтальная камера:</span>
                  <span className="spec-item__value">
                    {specifications.camera_front}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Секция дополнительно */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">📋</span>
            Дополнительно
          </h3>
          <div className="spec-section__items">
            <div className="spec-item">
              <span className="spec-item__label">Гарантия:</span>
              <span className="spec-item__value">
                {warranty_months} месяцев
              </span>
            </div>
            {specifications.os && (
              <div className="spec-item">
                <span className="spec-item__label">Операционная система:</span>
                <span className="spec-item__value">{specifications.os}</span>
              </div>
            )}
            {specifications.connectivity && (
              <div className="spec-item">
                <span className="spec-item__label">
                  Беспроводные интерфейсы:
                </span>
                <span className="spec-item__value">
                  {specifications.connectivity}
                </span>
              </div>
            )}
            {specifications.weight && (
              <div className="spec-item">
                <span className="spec-item__label">Вес:</span>
                <span className="spec-item__value">
                  {specifications.weight} г
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="phone-specs__footer">
        <div className="specs-note">
          <span className="specs-note__icon">ℹ️</span>
          <span className="specs-note__text">
            Характеристики могут незначительно отличаться в зависимости от
            региона
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmartfonProperty;
