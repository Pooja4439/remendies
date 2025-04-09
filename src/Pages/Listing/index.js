import Sidebar from "../../components/Sidebar";
import banner7 from "../../assets/images/banner7.jpg";
const Listing = () => {
  return (
    <>
    
      <section className="product_Listing_Page">
        <div className="container">
          <div className="ProductListing d-flex">
            <Sidebar />
            <div className="content_right">
            <img src={banner7} className="w-100"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
