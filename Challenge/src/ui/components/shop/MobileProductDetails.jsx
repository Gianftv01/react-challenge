import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Thumb1 from "../../../assets/shop-images/thab1.png";
import Thumb2 from "../../../assets/shop-images/thab2.png";
import Thumb3 from "../../../assets/shop-images/thab3.png";
import Thumb4 from "../../../assets/shop-images/thab4.png";
import MainImage from "../../../assets/shop-images/mainImage.png";
import Star1 from "../../../assets/shop-images/Star 1.png";
import Star2 from "../../../assets/shop-images/Star 5.png";
import "../../../assets/css/shop/MobileProductDetails.css";
import { ProductTabs } from "./ProductTabs";

export function MobileProductDetails() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);
  return (
    <section className="product-details-mobile">
      <div className="main-image-mobile">
        <img src={MainImage} alt="Main Product" />
        <p className="image-caption-mobile">
          *LG C2 42 (106cm) 4K Smart OLED evo TV
        </p>
      </div>
      <div className="swiper-container">
        <div style={{ display: "flex" }}>
          <button ref={prevRef} className="swiper-button-prev"></button>
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            centeredSlides={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Thumb1} alt="Thumbnail 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Thumb2} alt="Thumbnail 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Thumb3} alt="Thumbnail 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Thumb4} alt="Thumbnail 4" />
            </SwiperSlide>
          </Swiper>
          <button ref={nextRef} className="swiper-button-next"></button>
        </div>
      </div>

      {/* Información del producto */}
      <div className="product-info-mobile">
        <p className="product-brand-mobile">Brand: LG</p>
        <p className="product-model-mobile">Model: OLED42C2PSA</p>
        <p className="product-availability-mobile">Only 2 in Stock</p>

        <h1>LG C2 42 (106CM) 4K SMART OLED EVO TV | WEBOS | CINEMA HDR</h1>

        <div className="product-rating-mobile">
          <img src={Star1} alt="Rating 1" />
          <img src={Star1} alt="Rating 2" />
          <img src={Star1} alt="Rating 3" />
          <img src={Star2} alt="Rating 4" />
          <img src={Star2} alt="Rating 5" />
        </div>

        <ul className="product-features-mobile">
          <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
          <li>
            Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
          </li>
          <li>Hands-free Voice Control, Always Ready</li>
          <li>
            Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
          </li>
          <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
        </ul>

        {/* Tamaños disponibles */}
        <div className="product-sizes-mobile">
          <button className="size-option-mobile active">106 cm (42)</button>
          <button className="size-option-mobile">121 cm (48)</button>
          <button className="size-option-mobile">139 cm (55)</button>
          <button className="size-option-mobile">164 cm (65)</button>
          <button className="size-option-mobile">196 cm (77)</button>
          <button className="size-option-mobile">210 cm (83)</button>
        </div>

        {/* Precio y botones de compra 
        <div className="product-price-mobile">
          <p className="price-note-mobile">USD (incl. of all taxes)</p>
          <span className="current-price-mobile">$600.72</span>
          <span className="original-price-mobile">$800.00</span>
        </div>

        <div className="product-actions-mobile">
          <button className="buy-now-mobile">Buy Now</button>
          <button className="add-to-cart-mobile">Add to Cart</button>
        </div>
        */}
        <ProductTabs />
      </div>
    </section>
  );
}
