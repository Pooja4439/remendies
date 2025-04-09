import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import eye from "../../assets/images/eye.jpg";
import hair from "../../assets/images/hair.jpg";
import dental from "../../assets/images/dental.jpg";
import skin from "../../assets/images/skin.jpg";
import heart from "../../assets/images/heart.jpg";
import child from "../../assets/images/child.jpg";
import diabtise from "../../assets/images/diabtise.jpg";
import bone from "../../assets/images/bone.jpg";
import pregnant from "../../assets/images/pregnant.png";

const LabTest = () => {
  return (
    <section className="labtest">
      <div className="container">
        <h3 className="mb-4 hd">Product Categories</h3>
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          slidesPerGroup={1}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item bg-eye">
              <img src={eye} alt="Eye Care" className="product-img" />
              <h6>Eye Care</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item bg-hair">
              <img src={hair} alt="Hair Care" className="product-img" />
              <h6>Hair Care</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item bg-dental">
              <img src={dental} alt="Dental Care" className="product-img" />
              <h6>Dental Care</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item bg-skin">
              <img src={skin} alt="Skin Care" className="product-img" />
              <h6>Skin Care</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item bg-heart">
              <img src={heart} alt="Heart Care" className="product-img" />
              <h6>Heart Care</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item bg-baby">
              <img src={child} alt="Mom & Baby Essentials" className="product-img" />
              <h6>Mom & Baby Essentials</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item bg-diabetes">
              <img src={diabtise} alt="Diabetes Care" className="product-img" />
              <h6>Diabetes Care</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item bg-bone">
              <img src={bone} alt="Orthopedic Care" className="product-img" />
              <h6>Orthopedic Care</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item bg-maternity">
              <img src={pregnant} alt="Maternity Care" className="product-img" />
              <h6>Maternity Care</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default LabTest;
