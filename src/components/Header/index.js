import { Link } from 'react-router-dom';
import Logo from '../../assets/images/etheric.png';
import CountryDropdown from '../CountryDropdown';
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';

const Header = () => {
  return (
    <>
    <header className="headerWrapper">
  <div className="top-strip bg-blue">
    <div className="container">
      <p className="mb-0 mt-0 text-center">
        Due to Covid-19 epidemic, orders may be processed with a slight delay
      </p>
    </div>
  </div>
  <div className="header">  {/* Removed extra <header> */}
    <div className="container">
      <div className="row">
        <div className="logoWrapper d-flex align-items-center col-sm-2">
          <Link to={'/'}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="col-sm-10 d-flex align-items-center part2">
          <CountryDropdown />
          <SearchBox />
          <div className="part3 d-flex align-items-center ml-auto">
            <button className="circle mr-3">
              <FaRegUserCircle />
            </button>
            <div className="ml-auto cartTab d-flex align-items-center">
              <div className="position-relative ml-2">
                <button className="circle">
                  <IoBagHandleOutline />
                </button>
                <span className="count d-flex align-items-center justify-content-center">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <Navigation /> 
</header>

    </>
  );
};

export default Header;
