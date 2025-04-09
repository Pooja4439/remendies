import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // <-- Ensure correct import
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";



const HomeCat = () => {


    
  return (
    <section className="homeCat">
      <div className="container">
        <h3 class="mb-4 hd">Product Categotries</h3>
        <Swiper
          slidesPerView={9}
          spaceBetween={1}
          navigation={true} // <-- Corrected "Navigation" to lowercase "navigation"
          slidesPerGroup={1}
          modules={[Navigation]}
          className="mySwiper"
        >
            
          <SwiperSlide>
            <div className="item text-center cursor">
              <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0" alt="Banner 2" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0" alt="Banner 3" className="w-100" />
            </div>
            <h6>Ayurveda</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0" alt="Banner 4" className="w-100" />
            </div>
            <h6>Lab Test</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/web-assets/images/icon_doc_consult_tile.webp?dim=720x0
" alt="Banner 5" className="w-100" />
            </div>
            <h6>Doctor Consult</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0" alt="Banner 6" className="w-100" />
            </div>
            <h6>Healthy Care</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0" alt="Banner 2" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0" alt="Banner 3" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0" alt="Banner 4" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/web-assets/images/icon_doc_consult_tile.webp?dim=720x0
" alt="Banner 5" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0" alt="Banner 6" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0" alt="Banner 7" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0" alt="Banner 2" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0" alt="Banner 3" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0" alt="Banner 4" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/web-assets/images/icon_doc_consult_tile.webp?dim=720x0
" alt="Banner 5" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0" alt="Banner 6" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0" alt="Banner 7" className="w-100" />
            </div>
            <h6>Medicine</h6>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
