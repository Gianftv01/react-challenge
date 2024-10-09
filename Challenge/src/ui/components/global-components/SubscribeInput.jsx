import React, { useState } from "react";
import "../../../assets/css/SubscribeInput.css";

export function SubscribeInput() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    setEmail(email);
  };

  return (
    <div className="subscribe-container">
      <form action="" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="email@address.com"
          value={email}
          className="subscribe-input"
        />
        <button className="subscribe-button">Subscribe</button>
      </form>
    </div>
  );
}
