import React, { useState } from "react";
import "../../../assets/css/MobileNavBar.css";
import logotype from "../../../assets/LogotypeWhite.png";

export function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-mobile">
      <div className="header__logo-mobile">
        <a href="/">
          <img src={logotype} alt="Logo" />
        </a>
      </div>
      <div className="header__toggle" onClick={toggleMenu}>
        {/* Icono de menú hamburguesa */}
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
      <nav
        className={`header__nav__mobile ${
          isOpen ? "header__nav__mobile--open" : ""
        }`}
      >
        <ul>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/rooms">Rooms</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/inspirations">Inspirations</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
