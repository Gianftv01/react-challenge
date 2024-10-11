import React from "react";
import { useState } from "react";
import "../../../assets/css/shop/Header.css";
import Frame from "../../../assets/shop-images/Frame.png";
import Logotype from "../../../assets/shop-images/Needus..png";
import Search from "../../../assets/shop-images/search.png";
import BlackDown from "../../../assets/shop-images/BlackDown.png";
import Ellipse from "../../../assets/shop-images/Ellipse 1.png";
import Heart from "../../../assets/shop-images/akar-icons_heart.png";
import Cart from "../../../assets/shop-images/bi_cart.png";
import Slots from "../../../assets/shop-images/slots.png";
import Support from "../../../assets/shop-images/support.png";

export function Header() {
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const toggleCategories = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  return (
    <header className="shop__header">
      <div className="top-bar">
        <p>Welcome to Needus & Get the best product</p>
        <div className="language-currency">
          <span>
            ENG <img src={Frame} alt="" />
          </span>
          |
          <span>
            USD <img src={Frame} alt="" />
          </span>
        </div>
      </div>

      <div className="main-header">
        <div className="logo">
          <img src={Logotype} alt="" />
        </div>

        <div className="main-inputs">
          <div className="search-bar">
            <input type="text" placeholder="Search Products" />
            <button>
              <i>
                <img src={Search} alt="" />
              </i>
            </button>
          </div>

          <div className="categorys-bar">
            <input type="text" placeholder="All Categories" />
            <div className="categorys-icons">
              <i className="categorys-down">
                <img src={BlackDown} alt="" />
              </i>
              <span>Login</span>
              <span>Signup</span>
            </div>
          </div>
        </div>

        <div className="user-actions">
          <i>
            <img src={Heart} alt="" />
          </i>
          <i>
            <img src={Cart} alt="" />
          </i>
        </div>
      </div>

      <div className="main-nav">
        <div className="actions">
          <button className="category-button">
            <i onClick={toggleCategories}>
              <img src={Slots} alt="" />
            </i>
            All Categories
            <i
              className={`fa ${
                isCategoryOpen ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            >
              <img src={Frame} alt="" />
            </i>
          </button>
          {isCategoryOpen && (
            <ul className="category-dropdown">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
              <li>Category 5</li>
            </ul>
          )}
        </div>

        <div className="actions-links">
          <div>
            <ul className="nav-links">
              <li>
                HOME{" "}
                <i className="categorys-down">
                  <img src={Frame} alt="" />
                </i>
              </li>
              <li>
                ABOUT{" "}
                <i className="categorys-down">
                  <img src={Frame} alt="" />
                </i>
              </li>
              <li>
                PRODUCT{" "}
                <i className="categorys-down">
                  <img src={Frame} alt="" />
                </i>
              </li>
              <li>
                PAGES{" "}
                <i className="categorys-down">
                  <img src={Frame} alt="" />
                </i>
              </li>
              <li>
                CONTACT{" "}
                <i className="categorys-down">
                  <img src={Frame} alt="" />
                </i>
              </li>
            </ul>
          </div>

          <div>
            <span className="separator"></span>

            <div className="contact-info">
              <i>
                <img src={Support} alt="" />
              </i>{" "}
              <div>
                <p>CONTACT US 24/7</p>
                <p>+12012987481</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
