import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";



// Custom Left Arrow Component
const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
        <FaChevronLeft />
    </div>
);

// Custom Right Arrow Component
const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
        <FaChevronRight />
    </div>
);

const HomeBanner = () => {
    // Banner slider settings
    var bannerSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

   
    
    return (
        <div>
            {/* Home Banner Section */}
            <div className="homeBannerSection">
                <Slider {...bannerSettings}>
                    <div className="item">
                        <img src={banner1} alt="Banner 1" className="w-100" />
                    </div>
                    <div className="item">
                        <img src={banner2} alt="Banner 2" className="w-100" />
                    </div>
                    <div className="item">
                        <img src={banner3} alt="Banner 3" className="w-100" />
                    </div>
                </Slider>
            </div>

          
        </div>
    );
};

export default HomeBanner;
