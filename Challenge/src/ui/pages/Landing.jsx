import React from "react";
import { Hero } from "../components/Hero";
import { ServicesSection } from "../components/ServicesSections";
import { TrendsSection } from "../components/TrendsSection";
import { Footer } from "../components/Footer";
import { MobileHero } from "../components/MobileHero";

export function Landing() {
  return (
    <div className="LandingContainer">
      <div className="productDesktop">
        <Hero />
      </div>
      <div className="mobile">
        <MobileHero />
      </div>
      <ServicesSection />
      <TrendsSection />
      <Footer />
    </div>
  );
}
