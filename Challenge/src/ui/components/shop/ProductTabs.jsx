import React, { useState } from "react";
import "../../../assets/css/shop/ProductTabs.css";

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div>
            <p>
              The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around
              OLED TV we ve tested. Although all OLEDs deliver similar fantastic
              picture quality, this one stands out for its value because it has
              many gaming oriented features that are great for gamers.
            </p>
            <p>
              *Only 65G2 is shown in the image for example purposes. All 2022 LG
              OLED models feature eco-friendly packaging.
            </p>
            <p>
              **65C2 Stand model is at a minimum 39% lighter than the C1 series.
              More...
            </p>
          </div>
        );
      case "specification":
        return <p>Processor: α9 Gen5, Display: 4K OLED, Dolby Vision, etc.</p>;
      case "reviews":
        return <p>⭐⭐⭐⭐⭐ This TV is amazing, highly recommend it!</p>;
      default:
        return null;
    }
  };

  return (
    <div className="product-tabs">
      <ul className="tab-buttons">
        <li
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </li>
        <li
          className={activeTab === "specification" ? "active" : ""}
          onClick={() => setActiveTab("specification")}
        >
          Specification
        </li>
        <li
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </li>
      </ul>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}
