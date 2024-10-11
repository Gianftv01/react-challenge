import React from "react";
import { SubscribeInput } from "../global-components/SubscribeInput";
import "../../../assets/css/shop/NewsletterSection.css";

export function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Join our newsletter and get offers</h2>
        <p>Sign up to our newsletter</p>
      </div>
      <div className="newsletter-form">
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="subscribe-button-letter">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
}
