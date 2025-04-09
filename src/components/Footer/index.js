import { CiDeliveryTruck } from "react-icons/ci";
import { AiFillMedicineBox } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";
import { Link } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Top Information Section */}
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span><AiFillMedicineBox /></span>
            <span className="ml-2">Everyday Fresh Products</span>
          </div>
          <div className="col d-flex align-items-center">
            <span><CiDiscount1 /></span>
            <span className="ml-2">Daily Discount on Medicine</span>
          </div>
          <div className="col d-flex align-items-center">
            <span><HiOutlineDocumentCurrencyRupee /></span>
            <span className="ml-2">Best Price on Market</span>
          </div>
          <div className="col d-flex align-items-center">
            <span><CiDeliveryTruck /></span>
            <span className="ml-2">Free Delivery above ₹200</span>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="row mt-5">
          {/* Gym Nutrition */}
          <div className="col linkwrap">
            <h5>Gym Nutrition</h5>
            <ul>
              <li><Link href="#">Protein</Link></li>
              <li><Link href="#">Gainer</Link></li>
              <li><Link href="#">Pre-Workout</Link></li>
              <li><Link href="#">Post-Workout</Link></li>
              <li><Link href="#">BCAA</Link></li>
              <li><Link href="#">Creatine</Link></li>
              <li><Link href="#">Fat Burner</Link></li>
              <li><Link href="#">Vitamins</Link></li>
              <li><Link href="#">Omega-3</Link></li>
              <li><Link href="#">Carbs</Link></li>
              <li><Link href="#">Test Boost</Link></li>
              <li><Link href="#">Meal Shake</Link></li>
            </ul>
          </div>

          {/* Summer Essentials */}
          <div className="col linkwrap">
            <h5>Summer Essentials</h5>
            <ul>
              <li><Link href="#">Sunscreen</Link></li>
              <li><Link href="#">Sunglasses</Link></li>
              <li><Link href="#">Water Bottle</Link></li>
              <li><Link href="#">Cotton T-Shirts</Link></li>
              <li><Link href="#">Shorts</Link></li>
              <li><Link href="#">Flip Flops</Link></li>
              <li><Link href="#">Hat / Cap</Link></li>
              <li><Link href="#">Cooling Towel</Link></li>
              <li><Link href="#">Deodorant</Link></li>
              <li><Link href="#">Swimwear</Link></li>
              <li><Link href="#">Aloe Vera Gel</Link></li>
              <li><Link href="#">Light Perfume</Link></li>
            </ul>
          </div>

          {/* Medical Care & Wellness */}
          <div className="col linkwrap">
            <h5>Medical Care & Wellness</h5>
            <ul>
              <li><Link href="#">Eye Care</Link></li>
              <li><Link href="#">Dental Care</Link></li>
              <li><Link href="#">Skin Care</Link></li>
              <li><Link href="#">Heart Care</Link></li>
              <li><Link href="#">Diabetes Care</Link></li>
              <li><Link href="#">Orthopedic Care</Link></li>
              <li><Link href="#">Mental Health Care</Link></li>
              <li><Link href="#">Women's Health Care</Link></li>
              <li><Link href="#">Men's Health Care</Link></li>
              <li><Link href="#">Child Care</Link></li>
            </ul>
          </div>

          {/* Lab Tests */}
          <div className="col linkwrap">
            <h5>Lab Tests</h5>
            <ul>
              <li><Link href="#">Blood Test</Link></li>
              <li><Link href="#">Complete Blood Count (CBC)</Link></li>
              <li><Link href="#">Lipid Profile</Link></li>
              <li><Link href="#">Liver Function Test (LFT)</Link></li>
              <li><Link href="#">Kidney Function Test (KFT)</Link></li>
              <li><Link href="#">Thyroid Function Test</Link></li>
              <li><Link href="#">Diabetes Test (HbA1c)</Link></li>
              <li><Link href="#">Urine Routine & Microscopy</Link></li>
              <li><Link href="#">Electrolyte Panel</Link></li>
            </ul>
          </div>
          <div className="col linkwrap">
            <h5>Summer Essentials</h5>
            <ul>
              <li><Link href="#">Sunscreen</Link></li>
              <li><Link href="#">Sunglasses</Link></li>
              <li><Link href="#">Water Bottle</Link></li>
              <li><Link href="#">Cotton T-Shirts</Link></li>
              <li><Link href="#">Shorts</Link></li>
              <li><Link href="#">Flip Flops</Link></li>
              <li><Link href="#">Hat / Cap</Link></li>
              <li><Link href="#">Cooling Towel</Link></li>
              <li><Link href="#">Deodorant</Link></li>
              <li><Link href="#">Swimwear</Link></li>
              <li><Link href="#">Aloe Vera Gel</Link></li>
              <li><Link href="#">Light Perfume</Link></li>
            </ul>
          </div>

        </div>

        <div className="copyright mt-3 pt-3 pb-3 d-flex">
        <p className="mb-0">©Etheric Remedies 2025. All Rights Reserved.</p>
        <ul className="list list-inline ml-auto mb-0">
            <li className="list-inline-item ">
                <Link to="#"><FaFacebook /></Link>
                </li>
                <li className="list-inline-item">
                <Link to="#"><FaInstagram /></Link>
                </li>
                <li className="list-inline-item">
                <Link to="#"><FaLinkedin /></Link>
                
            </li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
