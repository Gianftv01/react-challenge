import React, { useState, useEffect } from "react";
import "../../../assets/css/shop/Footer.css";
import Facebook from "../../../assets/icons/FacebookWhite.png";
import WhatsApp from "../../../assets/icons/WhatsappWhite.png";
import Instagram from "../../../assets/icons/IgWhite.png";
import Youtube from "../../../assets/icons/YoutubeWhite.png";
import Location from "../../../assets/icons/akar-icons_location.png";
import Phone from "../../../assets/icons/clarity_mobile-phone-line.png";

export function Footer() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    if (isMobile) {
      setActiveSection(activeSection === section ? null : section);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ABOUT US */}
        <div
          className="footer-column about-us"
          onClick={() => toggleSection("about")}
        >
          <h3>ABOUT US</h3>
          {(activeSection === "about" || !isMobile) && (
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor
                nec laoreet.
              </p>
              <div className="social-icons">
                <img src={Facebook} alt="Facebook" />
                <img src={WhatsApp} alt="WhatsApp" />
                <img src={Instagram} alt="Instagram" />
                <img src={Youtube} alt="Youtube" />
              </div>
            </>
          )}
        </div>

        {/* INFORMATION */}
        <div className="footer-column" onClick={() => toggleSection("info")}>
          <h3>INFORMATION</h3>
          {(activeSection === "info" || !isMobile) && (
            <ul>
              <li>About</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Sales</li>
              <li>Terms & Conditions</li>
              <li>EMI Payment</li>
            </ul>
          )}
        </div>

        {/* ACCOUNT */}
        <div className="footer-column" onClick={() => toggleSection("account")}>
          <h3>ACCOUNT</h3>
          {(activeSection === "account" || !isMobile) && (
            <ul>
              <li>My Account</li>
              <li>My Orders</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Wishlist</li>
              <li>Account Details</li>
            </ul>
          )}
        </div>

        {/* STORE */}
        <div className="footer-column" onClick={() => toggleSection("store")}>
          <h3>STORE</h3>
          {(activeSection === "store" || !isMobile) && (
            <ul>
              <li>Affiliate</li>
              <li>Discounts</li>
              <li>Sale</li>
              <li>Contact</li>
              <li>All Collections</li>
            </ul>
          )}
        </div>

        {/* CONTACT US */}
        <div
          className="footer-column contact-us"
          onClick={() => toggleSection("contact")}
        >
          <h3>CONTACT US</h3>
          {(activeSection === "contact" || !isMobile) && (
            <>
              <p>
                If you have any query, please contact us{" "}
                <a href="mailto:needus24@gmail.com">needus24@gmail.com</a>
              </p>
              <div>
                <img src={Location} alt="Location" />
                <p>California, USA</p>
              </div>
              <div>
                <img src={Phone} alt="Phone" />
                <p>+12012987481</p>
              </div>
            </>
          )}
        </div>
        <div className="footer-bottom">
          <p>Copyright. 2023 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
