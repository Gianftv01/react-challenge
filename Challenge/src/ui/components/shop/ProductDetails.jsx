import React from "react";
import "../../../assets/css/shop/ProductDetails.css";
import { ProductTabs } from "./ProductTabs";
import MainImage from "../../../assets/shop-images/mainImage.png";
import Thumb1 from "../../../assets/shop-images/thab1.png";
import Thumb2 from "../../../assets/shop-images/thab2.png";
import Thumb3 from "../../../assets/shop-images/thab3.png";
import Thumb4 from "../../../assets/shop-images/thab4.png";
import star1 from "../../../assets/shop-images/Star 1.png";
import star2 from "../../../assets/shop-images/Star 5.png";

export function ProductDetails() {
  return (
    <section className="product-section">
      <div className="product-details">
        <div className="product-images">
          <div className="thumbnail-images">
            <img src={Thumb1} alt="Thumbnail 1" />
            <img src={Thumb2} alt="Thumbnail 2" />
            <img src={Thumb3} alt="Thumbnail 3" />
            <img src={Thumb4} alt="Thumbnail 4" />
          </div>
          <div>
            <div className="main-image">
              <img src={MainImage} alt="Main Product" />
            </div>
            <p className="image-caption">
              *LG C2 42 (106cm) 4K Smart OLED evo TV
            </p>
          </div>
        </div>

        <div className="product-info">
          <p className="product-brand">Brand: LG</p>
          <p className="product-model">Model: OLED42C2PSA</p>
          <p className="product-availability">Availability: Only 2 in Stock</p>

          <h1>LG C2 42 (106CM) 4K SMART OLED EVO TV | WEBOS | CINEMA HDR</h1>
          <div className="product-rating">
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
          </div>
          <ul className="product-features">
            <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
            <li>
              Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
            </li>
            <li>Hands-free Voice Control, Always Ready</li>
            <li>
              Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
            </li>
            <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
          </ul>

          <div className="product-sizes">
            <div>
              <button className="size-option active">106 cm (42)</button>
              <button className="size-option">121 cm (48)</button>
              <button className="size-option">139 cm (55)</button>
            </div>
            <div>
              <button className="size-option">164 cm (65)</button>
              <button className="size-option">196 cm (77)</button>
              <button className="size-option">210 cm (83)</button>
            </div>
          </div>

          <div className="product-price">
            <div>
              <p className="price-note">USD(incl. of all taxes)</p>
              <span className="current-price">$600.72</span>
              <span className="original-price">$800.00</span>
            </div>
            <div className="product-buttons">
              <button className="quantity-control">-</button>
              <input type="text" value="1" readOnly />
              <button className="quantity-control">+</button>
            </div>
          </div>

          <div className="product-actions">
            <button className="buy-now-button">Buy Now</button>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <ProductTabs />
    </section>
  );
}
