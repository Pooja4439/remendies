import React, { forwardRef, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { FaRegHeart, FaHeart, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { Button } from "@mui/material";
import QuantityBox from "../QuantityBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModel = ({ open, onClose }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const sliderRef = useRef();

  const productImages = [
    "https://onemg.gumlet.io/cropped/qjys82eviouy3hybmazk.jpg",
    "https://onemg.gumlet.io/cropped/eibibfaujrjkjytf3dy2.jpg",
    "https://onemg.gumlet.io/cropped/u1xrvck0him2rrrekdra.jpg",
    "https://onemg.gumlet.io/cropped/irhpx9etwpxvfxai6xy7.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return <div className="custom-arrow next" onClick={onClick}><FaAngleRight /></div>;
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return <div className="custom-arrow prev" onClick={onClick}><FaAngleLeft /></div>;
  }

  return (
    <Dialog open={open} keepMounted onClose={onClose} TransitionComponent={Transition} fullWidth maxWidth="md">
      <div className="popup-content p-4">
        <IconButton onClick={onClose} style={{ position: "absolute", right: 10, top: 10 }}>
          <CloseIcon />
        </IconButton>

        {/* Heading Section */}
        <div className="mb-3">
          <h4 className="font-weight-bold">PharMeasy Apple Cider Vinegar</h4>
          <p className="text-muted">Raw, Unfiltered with the Mother - Boosts Metabolism & Immunity</p>
        </div>

        {/* Slider and Details Section */}
        <div className="row">
          <div className="col-md-6">
            <Slider ref={sliderRef} {...settings}>
              {productImages.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Product ${index + 1}`} className="img-fluid w-100" style={{ height: "300px", objectFit: "contain", borderRadius: "10px" }} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center mb-2">
              <strong>Brand:</strong>
              <span className="ml-2">Welch's</span>
              <Rating value={4.5} size="small" precision={0.5} readOnly className="ml-3" />
            </div>

            {/* Price Section like Amazon */}
            <div className="mb-2">
              <h5><span className="text-danger">-21%</span> &nbsp; <strong>$7.35</strong></h5>
              <p className="text-muted">M.R.P: <del>$9.35</del></p>
              <span className="badge bg-dark text-light p-1">Fulfilled</span>
              <p className="text-muted mt-2">Inclusive of all taxes</p>
            </div>

            {/* Delivery */}
            <p><strong>FREE Delivery</strong> by <strong>Wednesday, 10 April</strong><br />Order within <span className="text-success">7 hrs 59 mins</span></p>
            <p><strong>In stock</strong></p>
            <div className="mt-3 d-flex gap-2 flex-wrap">
              <Button
                variant="outlined"
                className="btn-round btn-big"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                {isWishlisted ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />} &nbsp; Wishlist
              </Button>
              <Button variant="outlined" className="btn-round btn-big ml-2">
                <MdCompareArrows /> &nbsp; Compare
              </Button>
            </div>
{/* Quantity + Add to Cart */}
<div className="mt-3 d-flex gap-2 align-items-center flex-wrap">
  <QuantityBox />
  <Button variant="contained" className="btn-blue btn-round btn-big">Add to Cart</Button>
</div>

{/* Buy Now - normal size */}
<div className="mt-2">
  <Button variant="contained" className=" btn-blue btn-round btn-big">Buy Now</Button>
</div>

            <div className="mt-4">
              <h6 style={{ color: "#123897", fontWeight: "bold" }}>Offers</h6>
              <div className="border p-2 mb-2 bg-light">
                <strong>Cashback:</strong> Up to ₹14.00 cashback as Amazon Pay Balance
              </div>
              <div className="border p-2 mb-2 bg-light">
                <strong>Bank Offer:</strong> Up to ₹1,000.00 discount on select Credit Cards
              </div>
              <div className="border p-2 mb-2 bg-light">
                <strong>Partner Offer:</strong> Get GST invoice and save up to 28% on business purchases
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Product Info Sections */}
        <div className="product-details">
          <div className="mb-4">
            <h6><strong>Product Description</strong></h6>
            <p>PharMeasy Apple Cider Vinegar is made from the finest Himalayan apples. It is raw, unfiltered, and contains the "mother" for powerful health benefits.</p>
          </div>

          <div className="mb-4">
            <h6><strong>Key Benefits</strong></h6>
            <ul>
              <li>Boosts digestion and metabolism</li>
              <li>Supports weight management</li>
              <li>Improves skin and hair health</li>
              <li>Rich in enzymes and antioxidants</li>
            </ul>
          </div>

          <div className="mb-4">
            <h6><strong>Directions for Use</strong></h6>
            <p>Mix 1-2 tablespoons in water. Drink on an empty stomach daily or as advised by a doctor.</p>
          </div>

          <div className="mb-4">
            <h6><strong>Safety Information</strong></h6>
            <ul>
              <li>Do not exceed the recommended dose</li>
              <li>Consult a doctor if pregnant or under medication</li>
              <li>Keep out of reach of children</li>
            </ul>
          </div>

          <div className="mb-4">
            <h6><strong>Ingredients</strong></h6>
            <p>100% Natural Apple Juice fermented to 5% acidity.</p>
          </div>

          <div className="mb-4">
            <h6><strong>Storage Instructions</strong></h6>
            <p>Store in a cool, dry place. Shake well before use. Refrigeration not required.</p>
          </div>

          <div className="mb-4">
            <h6><strong>Disclaimer</strong></h6>
            <p>This product is not intended to diagnose, treat, cure or prevent any disease.</p>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModel;
