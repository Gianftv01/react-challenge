import React from "react";
import "../../assets/css/ServicesSection.css";
import { ServiceItem } from "./secondary-components/ServiceItem";
import Rigth from "../../assets/Right.svg";

export function ServicesSection() {
  return (
    <section className="page-width">
      <div className="services-section">
        <div className="services-section__left">
          <h2>We stay by your side to design your projects</h2>
          <a href="#more" className="find-out-more">
            Find out more
            <span>
              <img src={Rigth} alt="" />
            </span>
          </a>
        </div>
        <div className="services-section__right">
          <ServiceItem
            title={"Our Advices"}
            content={
              "What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there."
            }
          />
          <ServiceItem
            title={"Click and Collect"}
            content={
              "Adapted and contactless. Free from €200 of purchases in stores offering the service."
            }
          />
          <ServiceItem
            title={"Conception Service"}
            content={
              "Personalized service with an expert advisor for your interior and exterior decoration or layout projects."
            }
          />
          <ServiceItem
            title={"Installation Service"}
            content={
              "Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner."
            }
          />
        </div>
      </div>
    </section>
  );
}
