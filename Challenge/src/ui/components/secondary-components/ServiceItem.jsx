import React from "react";
import "../../../assets/css/ServiceItem.css";

export function ServiceItem({ title, content }) {
  return (
    <div className="service-item">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
