import React from "react";
import "../../assets/css/MobileHero.css";
import DownWhite from "../../assets/DownWhite.png";
import { MobileNavBar } from "../components/secondary-components/MobileNavBar";

export function MobileHero() {
  return (
    <section>
      <div className="mobile-hero">
        <div className="hero-header">
          <MobileNavBar />
        </div>
        <div className="hero-content-mobile">
          <p className="home__design_paragraph-mobile">HOME DESIGN</p>
          <h4>Elegance for Interiors & Exteriors</h4>
          <p className="hero__paragraph-mobile">
            We provide everyone with modern, trendy, quality furniture
          </p>
          <a href="/" className="hero__more-mobile">
            <span>
              <img src={DownWhite} alt="" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
