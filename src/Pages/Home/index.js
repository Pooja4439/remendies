import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css";
import "swiper/css/navigation"; // Ensure navigation styles are included
import HomeBanner from "../../components/HomeBanner";
import discount from "../../assets/images/discount.jpg";
import cart from "../../assets/images/cart.png";
import Button from "@mui/material/Button";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductItem from "../../components/ProductItem";
import HomeCat from "../../components/HomeCat";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import news from "../../assets/images/news.png";
import { IoIosMail } from "react-icons/io";
import LabTest from "../../components/LabTest";
const Home = () => {
    return (
        <>
            <HomeBanner />
            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        {/* Left Banner */}
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={discount} alt="Discount Offer" className="cursor w-100" />
                            </div>
                        </div>

                        {/* Best Seller Section */}
                        <div className="col-md-9">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">Best Seller</h3>
                                    <p className="text-dark text-sml mb-0">
                                        Do not miss the current offers. Book your medicine online.
                                    </p>
                                </div>
                                <Button className="viewAllBtn ml-auto">
                                    View All <FaArrowRight />
                                </Button>
                            </div>

                            {/* Product Slider */}
                            <div className="product_row w-100 mt-4 position-relative">
                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={10}
                                    navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // Link navigation
                                    modules={[Navigation]} 
                                    className="mySwiper"
                                >
                                    {[...Array(10)].map((_, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductItem />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Custom Navigation Buttons */}
                                <div className="custom-prev custom-arrow">
                                    <FaChevronLeft />
                                </div>
                                <div className="custom-next custom-arrow">
                                    <FaChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Left Banner */}
                        <div className="col-md-3">
                           <div className="sticky">
                           <div className="banner">
                                <img src={discount} alt="Discount Offer" className="cursor w-100" />
                            </div>
                            <div className="banner mt-4">
                                <img src={cart} alt="Discount Offer" className="cursor w-100" />
                            </div>
                           </div>
                        </div>

                        {/* New Products Section */}
                        <div className="col-md-9">
                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">New Products</h3>
                                    <p className="text-dark text-sml mb-0">
                                        Check out the new products with updated stocks
                                    </p>
                                </div>
                                <Button className="viewAllBtn ml-auto">
                                    View All <FaArrowRight />
                                </Button>
                            </div>

                            {/* Product Slider */}
                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                            <ProductItem />
                             <ProductItem />
                               <ProductItem />
                              <ProductItem />
                              <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                 <ProductItem />
                                          </div>                                           
                                                <div className="d-flex mt-4 md-5 bannerSec">
                                                  <div className="banner">
                                <img src={card1} alt="Discount Offer" className="cursor w-100" />
                            </div>

                            <div className="banner">
                                <img src={card2} alt="Discount Offer" className="cursor w-100" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <LabTest/> 
            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                         <p className="text-white mb-1">$20 discount for your first order</p>
                         <h4 className="text-white">Join Our newsletter and get...</h4>
                         <p className="text-light"> Join Our email subscription now to get updates<br/>on promotions and coupans.</p>


                         <form>
                         <IoIosMail />
                            <input type ="text" placeholder="Your Email Address"/>
                            <Button>Subscribe</Button>
                         </form>
                        </div>
                        <div className="col-md-6">
                            <img src={news} class="w-100 img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
           
         
        </>
    );
};

export default Home;
