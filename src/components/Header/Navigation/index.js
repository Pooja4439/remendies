import { Link } from "react-router-dom";  // ✅ Import Link
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import Button from "@mui/material/Button"; // ✅ Import Button from Material-UI
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {

const[isOpenSidebarVal, setisOpenSidebarVal]=useState(false);

    return (
      <nav>
        <div className="container">
          <div className='row'>
            <div className='col-sm-2 navPart1'>
              <div className='catWrapper'>
              <button className='allCatTab align-items-center'onClick={() => setisOpenSidebarVal(!isOpenSidebarVal)}>
                <span className='icon1 mr-2'><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2"><FaAngleDown /></span>  
              </button>
              <div className={`sidebarNav ${isOpenSidebarVal ? "open" : ""}`}>
                <ul>
                    <li><Link to="/"><Button>Hajmola<FaAngleRight /></Button></Link>
                    <div className="submenu">
                    <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                    </div>
                    </li>
                    <li><Link to="/"><Button>Jhandubam<FaAngleRight /></Button></Link>
                    <div className="submenu">
                    <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                    </div>
                    </li>
                    <li><Link to="/"><Button>Boroline<FaAngleRight /></Button></Link>
                    <div className="submenu">
                    <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                    </div>
                    
                    </li>
                    <li><Link to="/"><Button>Laal Baam<FaAngleRight /></Button></Link>
                    <div className="submenu">
                    <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                    </div>
                    </li>
                    <li><Link to="/"><Button>Kala Baam<FaAngleRight /></Button></Link>

                    <div className="submenu">
                    <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                    </div>
                    </li>
                    <li><Link to="/"><Button>Laal Baam</Button></Link></li>
                    <li><Link to="/"><Button>Laal Baam</Button></Link></li>
                    <li><Link to="/"><Button>Laal Baam</Button></Link></li>

                        </ul>
              </div>
            </div>
            </div>
            <div className='col-sm-10 navPart2 d-flex align-items-center'>
                <ul className='list list-inline w-100'>
                    <li className='list-inline-item'>
                      <Link to="/"><FaHome /> Tablet</Link>
                      <div className='submenu shadow'>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                       

                      </div>
                    </li>
                    <li className='list-inline-item'>
                      <Link to="/medicine"><GiMedicines /> Medicine <FaAngleDown /></Link>
                      <div className='submenu shadow'>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                       

                      </div>
                    </li>
                    <li className='list-inline-item'>
  <Link to="/lab-test">Lab Test <FaAngleDown /></Link>
  <div className='submenu shadow'>
    <Link to="/lab-test/cbc"><Button>Complete Blood Count (CBC)</Button></Link>
    <Link to="/lab-test/lft"><Button>Liver Function Test (LFT)</Button></Link>
    <Link to="/lab-test/kft"><Button>Kidney Function Test (KFT)</Button></Link>
    <Link to="/lab-test/rbs"><Button>Random Blood Sugar (RBS)</Button></Link>
    <Link to="/lab-test/hba1c"><Button>HbA1c (Diabetes)</Button></Link>
    <Link to="/lab-test/thyroid"><Button>Thyroid Panel (T3, T4, TSH)</Button></Link>
    <Link to="/lab-test/urine"><Button>Urine Routine</Button></Link>
    <Link to="/lab-test/lipid"><Button>Lipid Profile</Button></Link>
    <Link to="/lab-test/vitamin-d"><Button>Vitamin D</Button></Link>
    <Link to="/lab-test/vitamin-b12"><Button>Vitamin B12</Button></Link>
    <Link to="/lab-test/iron"><Button>Iron Studies</Button></Link>
    <Link to="/lab-test/covid"><Button>COVID-19 RT-PCR</Button></Link>
  </div>
</li>

<li className='list-inline-item'>
  <Link to="/summer-essentials">Summer Essentials <FaAngleDown /></Link>
  <div className='submenu shadow'>
    <Link to="/summer-essentials/face-wash"><Button>Face Wash</Button></Link>
    <Link to="/summer-essentials/moisturizer"><Button>Moisturizer</Button></Link>
    <Link to="/summer-essentials/sunscreen"><Button>Sunscreen</Button></Link>
    <Link to="/summer-essentials/aloevera-gel"><Button>Aloe Vera Gel</Button></Link>
    <Link to="/summer-essentials/lip-balm"><Button>Lip Balm</Button></Link>
    <Link to="/summer-essentials/face-mist"><Button>Face Mist</Button></Link>
    <Link to="/summer-essentials/body-lotion"><Button>Body Lotion</Button></Link>
    <Link to="/summer-essentials/talcum-powder"><Button>Talcum Powder</Button></Link>
    <Link to="/summer-essentials/deodorant"><Button>Deodorant</Button></Link>
    <Link to="/summer-essentials/body-spray"><Button>Body Spray</Button></Link>
    <Link to="/summer-essentials/anti-fungal-powder"><Button>Anti-Fungal Powder</Button></Link>
    <Link to="/summer-essentials/after-sun-lotion"><Button>After Sun Lotion</Button></Link>
    <Link to="/summer-essentials/toner"><Button>Facial Toner</Button></Link>
    <Link to="/summer-essentials/face-scrub"><Button>Face Scrub</Button></Link>
    <Link to="/summer-essentials/eye-gel"><Button>Eye Cooling Gel</Button></Link>
    <Link to="/summer-essentials/soothing-mask"><Button>Soothing Face Mask</Button></Link>
    <Link to="/summer-essentials/cooling-mask"><Button>Cooling Sheet Mask</Button></Link>
    <Link to="/summer-essentials/rose-water"><Button>Rose Water</Button></Link>
    <Link to="/summer-essentials/face-pack"><Button>Herbal Face Pack</Button></Link>
    <Link to="/summer-essentials/cooling-pads"><Button>Cooling Pads</Button></Link>
    <Link to="/summer-essentials/hand-sanitizer"><Button>Hand Sanitizer</Button></Link>
    <Link to="/summer-essentials/hand-wash"><Button>Hand Wash</Button></Link>
    <Link to="/summer-essentials/wet-wipes"><Button>Wet Wipes</Button></Link>
    <Link to="/summer-essentials/cooling-eye-drops"><Button>Cooling Eye Drops</Button></Link>
    <Link to="/summer-essentials/nasal-spray"><Button>Nasal Spray</Button></Link>
    <Link to="/summer-essentials/mouthwash"><Button>Mouthwash</Button></Link>
    <Link to="/summer-essentials/oral-rehydration"><Button>ORS (Oral Rehydration)</Button></Link>
    <Link to="/summer-essentials/electrolyte-drinks"><Button>Electrolyte Drinks</Button></Link>
    <Link to="/summer-essentials/energy-drinks"><Button>Energy Drinks</Button></Link>
    <Link to="/summer-essentials/herbal-tea"><Button>Herbal Tea (Cooling)</Button></Link>
    <Link to="/summer-essentials/green-tea"><Button>Green Tea</Button></Link>
    <Link to="/summer-essentials/probiotic-drinks"><Button>Probiotic Drinks</Button></Link>
    <Link to="/summer-essentials/detox-water"><Button>Detox Water Mixes</Button></Link>
    <Link to="/summer-essentials/fruit-juices"><Button>Fruit Juices</Button></Link>
    <Link to="/summer-essentials/coconut-water"><Button>Coconut Water</Button></Link>
    <Link to="/summer-essentials/hydration-capsules"><Button>Hydration Capsules</Button></Link>
    <Link to="/summer-essentials/cooling-gel-pads"><Button>Cooling Gel Pads</Button></Link>
    <Link to="/summer-essentials/bathing-bar"><Button>Bathing Bar (Herbal)</Button></Link>
    <Link to="/summer-essentials/body-wash"><Button>Body Wash</Button></Link>
    <Link to="/summer-essentials/foot-cream"><Button>Foot Cream</Button></Link>
    <Link to="/summer-essentials/hair-serum"><Button>Hair Serum</Button></Link>
    <Link to="/summer-essentials/hair-oil"><Button>Cooling Hair Oil</Button></Link>
    <Link to="/summer-essentials/shampoo"><Button>Anti-Dandruff Shampoo</Button></Link>
    <Link to="/summer-essentials/conditioner"><Button>Hair Conditioner</Button></Link>
    <Link to="/summer-essentials/cooling-hair-mask"><Button>Cooling Hair Mask</Button></Link>
    <Link to="/summer-essentials/anti-lice-shampoo"><Button>Anti-Lice Shampoo</Button></Link>
    <Link to="/summer-essentials/baby-wipes"><Button>Baby Wipes</Button></Link>
    <Link to="/summer-essentials/baby-powder"><Button>Baby Powder</Button></Link>
  </div>
</li>

                    <li className='list-inline-item'>
                      <Link to="/sports-nutrition">Sports Nutrition <FaAngleDown /></Link>
                      <div className='submenu shadow'>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                       

                      </div>
                    </li>
                    <li className='list-inline-item'>
                      <Link to="/health-food">Health Food <FaAngleDown /></Link>
                      <div className='submenu shadow'>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                       

                      </div>
                    </li>
                    <li className='list-inline-item'>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navigation;
