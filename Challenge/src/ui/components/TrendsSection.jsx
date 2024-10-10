import React, { useRef, useEffect } from "react";
import "../../assets/css/TrendsSection.css";
import { SubscribeInput } from "./global-components/SubscribeInput";
import Rigth from "../../assets/Right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Rectangle1 from "../../assets/carrousel-images/Rectangle1.png";
import Rectangle2 from "../../assets/carrousel-images/Rectangle2.png";
import Rectangle3 from "../../assets/carrousel-images/Rectangle3.png";
import Rectangle4 from "../../assets/carrousel-images/Rectangle4.png";
import Rectangle5 from "../../assets/carrousel-images/Rectangle5.png";
import Rectangle6 from "../../assets/carrousel-images/Rectangle6.png";

import { Navigation } from "swiper/modules";

export function TrendsSection() {
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
    <section className="page-width">
      <div className="trends-section">
        <div className="trends-header">
          <div className="trends__header__left">
            <h2>Be aware of the latest trends</h2>
            <p>Stay informed of new trends, but also of our various offers.</p>
            <div>
              <a>
                Learn more <img src={Rigth} alt="" />
              </a>
            </div>
          </div>
          <div>
            <SubscribeInput buttonColor="brown" successColor="green" />
          </div>
        </div>

        <div className="carrousel">
          <Swiper
            ref={swiperRef}
            slidesPerView={7}
            spaceBetween={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1366: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1600: {
                slidesPerView: 6.5,
                spaceBetween: 0,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Rectangle2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="inspirations">
          <div className="inspiration-title">
            <h3>Inspirations</h3>
          </div>
          <div className="inspiration-content">
            <p>
              Our experts are keen to stay on top of trends in order to offer
              you new inspirations for your interior and exterior every day.
              Remember that to inspire you we have to inspire ourselves and we
              want to share that with you.
            </p>
          </div>

          <div className="inspiration-swiper">
            <div className="inspiration-buttons">
              <button ref={prevRef} className="swiper-button-prev"></button>
              <button ref={nextRef} className="swiper-button-next"></button>
            </div>
            <div className="inspiration-span">
              <span>01/05</span>
            </div>
          </div>
        </div>

        <div className="carrousel-mobile">
          <Swiper
            slidesPerView={2}
            spaceBetween={"auto"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img src={Rectangle2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
