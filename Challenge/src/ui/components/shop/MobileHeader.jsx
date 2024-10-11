import React, { useState } from "react";
import "../../../assets/css/shop/MobileHeader.css";
import Slots from "../../../assets/shop-images/slots.png";
import Search from "../../../assets/shop-images/SearchBlack.png";
import Heart from "../../../assets/shop-images/akar-icons_heart.png";
import Cart from "../../../assets/shop-images/bi_cart.png";
import User from "../../../assets/shop-images/User.png";
import Logotype from "../../../assets/shop-images/Needus..png";

export function MobileHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-shop-mobile">
      <div className="header-shop-mobile-container">
        <div className="header-shop-mobile-menu-hamburger" onClick={toggleMenu}>
          <div className="header-shop-mobile-menu-icon">
            <img src={Slots} alt="" />
          </div>
        </div>

        {/* Logo */}
        <div className="header-shop-mobile-logo">
          <img src={Logotype} alt="" />
        </div>

        {/* Íconos de usuario */}
        <div className="header-shop-mobile-user-icons">
          <img src={Search} alt="" />
          <img src={User} alt="" />
          <img src={Heart} alt="" />
          <div className="header-shop-mobile-cart-icon">
            <img src={Cart} alt="" />
            <span className="header-shop-mobile-cart-count">6</span>
          </div>
        </div>
      </div>

      {/* Menú desplegable al hacer clic en el menú hamburguesa */}
      {isMenuOpen && (
        <nav className="header-shop-mobile-menu-dropdown">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
