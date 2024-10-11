import React, { useState } from "react";
import "../../../assets/css/SubscribeInput.css";

export function SubscribeInput({
  buttonColor = "orange",
  successColor = "black",
}) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="subscribe-container">
      <form action="" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="email@address.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="subscribe-input"
        />
        <button
          className="subscribe-button"
          style={{
            backgroundColor: isSubscribed ? successColor : buttonColor,
          }}
        >
          {isSubscribed ? "SUBSCRIBED!" : "SUBSCRIBE"}
        </button>
      </form>
    </div>
  );
}
