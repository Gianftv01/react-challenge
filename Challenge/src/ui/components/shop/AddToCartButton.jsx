import React from "react";
import "../../../assets/css/shop/AddToCartButton.css";
import cart from "../../../assets/shop-images/bi_cart.png";

export function AddToCartButton() {
  return (
    <button className="add-to-cart-button">
      <img src={cart} alt="cart icon" className="cart-icon" />
      Add to cart
    </button>
  );
}
