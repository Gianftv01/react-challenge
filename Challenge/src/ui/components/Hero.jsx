import React from "react";
import "../../assets/css/Hero.css";
import heroImage from "../../assets/Picture.png";
import { NavBar } from "./secondary-components/NavBar";
import Down from "../../assets/Down.png";

export function Hero() {
  return (
    <section>
      <div className="hero">
        <div className="hero__text">
          <div>
            <NavBar />
            <div className="hero__content">
              <p className="home__design_paragraph">HOME DESIGN</p>
              <h1>Elegance for Interiors & Exteriors</h1>
              <p className="hero__paragraph">
                We provide everyone with modern, trendy, quality furniture
              </p>
              <a href="#section" className="hero__more">
                <span>
                  <img src={Down} alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="Decorative Lamps" />
        </div>
      </div>
    </section>
  );
}
