import ProductCard from "../Smartfon/SmartphonesCard/ProductCard";
import React from "react";
import "./comps.scss";

const ComputerProperty = ({ specs }) => {
  const { specifications, warranty_months, brand, name } = specs;

  return (
    <div className="computer-specs">
      <div className="computer-specs__header">
        <h2 className="computer-specs__title">Характеристики {name}</h2>
        <div className="computer-specs__brand-badge">{brand}</div>
      </div>

      <div className="computer-specs__content">
        {/* Основные характеристики */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">💻</span>
            Основные характеристики
          </h3>
          <div className="spec-section__items">
            <div className="spec-item">
              <span className="spec-item__label">Тип устройства:</span>
              <span className="spec-item__value">
                {specifications.type || "Ноутбук"}
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-item__label">Процессор:</span>
              <span className="spec-item__value">
                {specifications.processor}
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-item__label">Количество ядер:</span>
              <span className="spec-item__value">
                {specifications.processor_cores} ядер
              </span>
            </div>
            {specifications.processor_ghz && (
              <div className="spec-item">
                <span className="spec-item__label">Частота процессора:</span>
                <span className="spec-item__value">
                  {specifications.processor_ghz} ГГц
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Память и хранилище */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">🧠</span>
            Память и хранилище
          </h3>
          <div className="spec-section__items">
            <div className="spec-item">
              <span className="spec-item__label">Оперативная память:</span>
              <span className="spec-item__value">{specifications.ram} ГБ</span>
            </div>
            {specifications.ram_type && (
              <div className="spec-item">
                <span className="spec-item__label">Тип памяти:</span>
                <span className="spec-item__value">
                  {specifications.ram_type}
                </span>
              </div>
            )}
            {specifications.ram_speed && (
              <div className="spec-item">
                <span className="spec-item__label">Скорость памяти:</span>
                <span className="spec-item__value">
                  {specifications.ram_speed} МГц
                </span>
              </div>
            )}
            <div className="spec-item">
              <span className="spec-item__label">Встроенная память:</span>
              <span className="spec-item__value">
                {specifications.storage} ГБ
              </span>
            </div>
            {specifications.storage_type && (
              <div className="spec-item">
                <span className="spec-item__label">Тип накопителя:</span>
                <span className="spec-item__value">
                  {specifications.storage_type}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Графика */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">🎮</span>
            Графика
          </h3>
          <div className="spec-section__items">
            {specifications.gpu && (
              <div className="spec-item">
                <span className="spec-item__label">Видеокарта:</span>
                <span className="spec-item__value">{specifications.gpu}</span>
              </div>
            )}
            {specifications.gpu_memory && (
              <div className="spec-item">
                <span className="spec-item__label">Память видеокарты:</span>
                <span className="spec-item__value">
                  {specifications.gpu_memory} ГБ
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Экран */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">🖥️</span>
            Экран
          </h3>
          <div className="spec-section__items">
            <div className="spec-item">
              <span className="spec-item__label">Диагональ:</span>
              <span className="spec-item__value">
                {specifications.screen_size_laptop}"
              </span>
            </div>
            {specifications.screen_resolution_laptop && (
              <div className="spec-item">
                <span className="spec-item__label">Разрешение:</span>
                <span className="spec-item__value">
                  {specifications.screen_resolution_laptop}
                </span>
              </div>
            )}
            {specifications.screen_refresh_rate && (
              <div className="spec-item">
                <span className="spec-item__label">Частота обновления:</span>
                <span className="spec-item__value">
                  {specifications.screen_refresh_rate} Гц
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Батарея и автономность */}
        {specifications.battery_life_hours && (
          <div className="spec-section">
            <h3 className="spec-section__title">
              <span className="spec-section__icon">🔋</span>
              Автономность
            </h3>
            <div className="spec-section__items">
              <div className="spec-item">
                <span className="spec-item__label">
                  Время работы от батареи:
                </span>
                <span className="spec-item__value">
                  {specifications.battery_life_hours} часов
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Разъемы и подключение */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">🔌</span>
            Разъемы и подключение
          </h3>
          <div className="spec-section__items">
            {specifications.usb_ports && (
              <div className="spec-item">
                <span className="spec-item__label">USB-порты:</span>
                <span className="spec-item__value">
                  {specifications.usb_ports}
                </span>
              </div>
            )}
            {specifications.hdmi_ports && (
              <div className="spec-item">
                <span className="spec-item__label">HDMI-порты:</span>
                <span className="spec-item__value">
                  {specifications.hdmi_ports}
                </span>
              </div>
            )}
            {specifications.display_ports && (
              <div className="spec-item">
                <span className="spec-item__label">DisplayPort:</span>
                <span className="spec-item__value">
                  {specifications.display_ports}
                </span>
              </div>
            )}
            {specifications.ethernet_gbit && (
              <div className="spec-item">
                <span className="spec-item__label">Ethernet:</span>
                <span className="spec-item__value">
                  {specifications.ethernet_gbit} Гбит/с
                </span>
              </div>
            )}
            {specifications.wifi_standard && (
              <div className="spec-item">
                <span className="spec-item__label">Wi-Fi:</span>
                <span className="spec-item__value">
                  {specifications.wifi_standard}
                </span>
              </div>
            )}
            {specifications.bluetooth_version && (
              <div className="spec-item">
                <span className="spec-item__label">Bluetooth:</span>
                <span className="spec-item__value">
                  {specifications.bluetooth_version}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Дополнительные характеристики */}
        <div className="spec-section">
          <h3 className="spec-section__title">
            <span className="spec-section__icon">📋</span>
            Дополнительно
          </h3>
          <div className="spec-section__items">
            <div className="spec-item">
              <span className="spec-item__label">Операционная система:</span>
              <span className="spec-item__value">
                {specifications.preinstalled_os || "Не установлена"}
              </span>
            </div>
            {specifications.weight_kg && (
              <div className="spec-item">
                <span className="spec-item__label">Вес:</span>
                <span className="spec-item__value">
                  {specifications.weight_kg} кг
                </span>
              </div>
            )}
            {specifications.cooling_system && (
              <div className="spec-item">
                <span className="spec-item__label">Система охлаждения:</span>
                <span className="spec-item__value">
                  {specifications.cooling_system}
                </span>
              </div>
            )}
            {specifications.case_type && (
              <div className="spec-item">
                <span className="spec-item__label">Тип корпуса:</span>
                <span className="spec-item__value">
                  {specifications.case_type}
                </span>
              </div>
            )}
            {specifications.motherboard && (
              <div className="spec-item">
                <span className="spec-item__label">Материнская плата:</span>
                <span className="spec-item__value">
                  {specifications.motherboard}
                </span>
              </div>
            )}
            {specifications.power_supply && (
              <div className="spec-item">
                <span className="spec-item__label">Блок питания:</span>
                <span className="spec-item__value">
                  {specifications.power_supply}
                </span>
              </div>
            )}
            {specifications.rgb_lighting !== undefined && (
              <div className="spec-item">
                <span className="spec-item__label">RGB-подсветка:</span>
                <span className="spec-item__value">
                  {specifications.rgb_lighting ? "Да" : "Нет"}
                </span>
              </div>
            )}
            <div className="spec-item">
              <span className="spec-item__label">Гарантия:</span>
              <span className="spec-item__value">
                {warranty_months} месяцев
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="computer-specs__footer">
        <div className="specs-note">
          <span className="specs-note__icon">ℹ️</span>
          <span className="specs-note__text">
            Характеристики могут незначительно отличаться в зависимости от
            конфигурации и региона
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComputerProperty;
