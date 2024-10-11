import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../assets/shop-images/image 7.png";
import image2 from "../../../assets/shop-images/image 8.png";
import image3 from "../../../assets/shop-images/image 9.png";
import image4 from "../../../assets/shop-images/image 10.png";
import { AddToCartButton } from "../shop/AddToCartButton";
import "../../..//assets/css/shop/RelatedProducts.css";

// Simulando la constante de productos
const products = [
  {
    id: 1,
    name: "Sony BRAVIA XR Android TV",
    price: "$800.22",
    originalPrice: "$1000.00",
    img: image1,
    tag: { text: "NEW", color: "green" },
  },
  {
    id: 2,
    name: "Mi P1 Smart Android HD TV",
    price: "$400.00",
    img: image3,
    tag: { text: "-10%", color: "red" },
  },
  {
    id: 3,
    name: "Konka OLED Android TV",
    price: "$700.00",
    img: image1,
    tag: { text: "HOT", color: "orange" },
  },
  {
    id: 4,
    name: "TCL Roku Android TV",
    price: "$800.00",
    img: image3,
    tag: { text: "2 Years Warranty", color: "purple" },
  },
  {
    id: 5,
    name: "TCL Roku Android TV",
    price: "$800.00",
    img: image1,
    tag: { text: "2 Years Warranty", color: "purple" },
  },
];

export function RelatedProducts() {
  return (
    <div className="related-products-swiper">
      <h2>Related Products</h2>
      <Swiper
        slidesPerView={1} // Mostrar dos productos por vez, ajusta según sea necesario
        spaceBetween={20} // Espacio entre productos
        pagination={{ clickable: true }} // Paginación activa
        loop={true} // Loop infinito
        modules={[Pagination, Navigation]}
        className="related-products-swiper-container"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <section className="product-card">
              <div
                className="product-tag"
                style={{ backgroundColor: product.tag.color }}
              >
                {product.tag.text}
              </div>
              <img
                className="product-image"
                src={product.img}
                alt={product.name}
              />
              <AddToCartButton />
            </section>
            <div className="product-card-desc">
              <p className="product-name">{product.name}</p>
              <p className="product-card-price">
                {product.price}{" "}
                {product.originalPrice && (
                  <span className="original-price">
                    {product.originalPrice}
                  </span>
                )}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
