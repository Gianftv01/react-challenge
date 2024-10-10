import React from "react";
import { Hero } from "../components/Hero";
import { ServicesSection } from "../components/ServicesSections";
import { TrendsSection } from "../components/TrendsSection";
import { Footer } from "../components/Footer";
import { MobileHero } from "../components/MobileHero";

export function Landing() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <TrendsSection />
      <Footer />
    </div>
  );
}
