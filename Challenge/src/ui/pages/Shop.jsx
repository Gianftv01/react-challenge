import React from "react";
import { Header } from "../components/shop/Header";
import { Banner } from "../components/shop/Banner";
import { ProductDetails } from "../components/shop/ProductDetails";
import { RelatedProducts } from "../components/shop/RelatedProducts";
import { NewsletterSection } from "../components/shop/NewsletterSection";
import { Footer } from "../components/shop/Footer";
import { MobileHeader } from "../components/shop/MobileHeader";
import { MobileProductDetails } from "../components/shop/MobileProductDetails";

export function Shop() {
  return (
    <div className="ShopContainer">
      <div className="productDesktop">
        <Header />
      </div>
      <div className="mobile">
        <MobileHeader />
      </div>
      <Banner />
      <div className="productDesktop">
        <ProductDetails />
      </div>
      <div className="mobile">
        <MobileProductDetails />
      </div>
      <RelatedProducts />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
