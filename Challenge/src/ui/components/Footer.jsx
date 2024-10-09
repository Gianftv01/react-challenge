import React from "react";
import "../../assets/css/Footer.css";
import logotype from "../../assets/Logotype.svg";
import planet from "../../assets/Planet.png";
import Right from "../../assets/Right.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Agence from "../../assets/Agence.png";

export function Footer() {
  return (
    <section className="page-width">
      <div className="footer">
        <div className="footer__header">
          <div>
            <a href="/">
              <img className="footer__logotype" src={logotype} alt="" />
            </a>
          </div>
          <div>
            <h3>Products</h3>
            <ul>
              <li>Furniture</li>
              <li>Decoration</li>
              <li>Storage</li>
              <li>Baby and child</li>
              <li>Connected home</li>
            </ul>
          </div>
          <div>
            <h3>Rooms</h3>
            <ul>
              <li>Living room</li>
              <li>Dining room</li>
              <li>Cooked</li>
              <li>Bedroom</li>
              <li>Bathroom</li>
              <li>Office</li>
              <li>Laundry</li>
              <li>Garage</li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>Click and collect</li>
              <li>Conception</li>
              <li>Installation</li>
              <li>Advices</li>
              <li>Gift card</li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li>Our story</li>
              <li>Our stores</li>
              <li>Our partners</li>
            </ul>
          </div>
          <div>
            <h3>We respect our planet</h3>
            <div>
              <img className="footer__image" src={planet} alt="" />
            </div>
            <p>
              We’re taking positive steps to reduce our impact on the planet.
              For us, that means retailing responsibly.
            </p>
            <div>
              <a>
                Learn more <img src={Right} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__icons">
          <div>
            <img src={Facebook} width="24" height="24" alt="" />
          </div>
          <div>
            <img src={Twitter} alt="" />
          </div>
          <div>
            <img src={Instagram} alt="" />
          </div>
          <div>
            <img src={Linkedin} alt="" />
          </div>
        </div>

        <div className="footer__policy">
          <div>
            <a href="/">
              <img src={Agence} alt="" />
            </a>
          </div>
          <div>
            <a href="/">Privacy policy</a>
            <a href="/">Term of service</a>
            <a href="/">Language</a>
          </div>
        </div>
      </div>
    </section>
  );
}
