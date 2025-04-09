import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import ProductModel from "../../components/ProductModel";


const ProductItem = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <div className="item productItem">
        <div className="imgWrapper">
          <img
            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=360x0"
            alt="Medicine Category 1"
            className="w-100"
          />
          <span className="badge badge-primary fs-6">28%</span>
          <div className="actions">
            <button onClick={() => setOpenPopup(true)}>
              <AiOutlineFullscreen />
            </button>
            <button>
              <IoIosHeartEmpty />
            </button>
          </div>
        </div>

        <div className="info">
          <h4>Werther's Original Caramel Hard Candies</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$14.00</span>
          </div>
        </div>
      </div>

      {/* Popup Dialog */}
      <ProductModel open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default ProductItem;
