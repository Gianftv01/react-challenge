import React from "react";
import "../../../assets/css/NavBar.css";
import logotype from "../../../assets/Logotype.svg";

export function NavBar() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src={logotype} alt="" />
        </a>
      </div>
      <nav className="header__nav">
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
