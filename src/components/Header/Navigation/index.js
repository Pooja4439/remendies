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
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                       

                      </div>
                    </li>
                    <li className='list-inline-item'>
                      <Link to="/summer-essentials">Summer Essentials <FaAngleDown /></Link>
                      <div className='submenu shadow'>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                        <Link to="/"><Button>Tablet</Button></Link>
                       
                        <Link to="/"><Button>Tablet</Button></Link>
                       

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
