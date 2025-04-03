import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const CountryDropdown =() => {

    const[isOpenModel ,setisOpenModel] = useState(false);
return(
    <>
    <Button className='countryDrop' onClick={()=>setisOpenModel(true)}>
                       <div className='info d-flex flex-column'>
                        <span className='label'>Your Location</span>
                        <span className='name'>India</span>
                        
                       </div>
                    <span className='ml-auto'><FaAngleDown/></span>
                    </Button>
                    <Dialog open={isOpenModel} onClose={()=>setisOpenModel(false)} className='locationModel'TransitionComponent={Transition}>
                        <h6>Choose Your Delivery Location</h6>
                        <p> Enter your address.</p>
                        <button className='close_' onClick={()=>setisOpenModel(false)}><IoClose /></button>
                <div className='headerSearch w-100 p-2 '>
             <input type='text' placeholder='Search your area...' />
                 <button>
                 <IoSearch />
                     </button>
                       </div>
                       <ul className='countryList mt-3'>
                        <li><button onClick={()=>setisOpenModel(false)}>Delhi</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Noida</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Gurugram</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Sector 29</button></li>

                        <li><button onClick={()=>setisOpenModel(false)}>Sector 34</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Delhi</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Noida</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Gurugram</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Sector 29</button></li>

                        <li><button onClick={()=>setisOpenModel(false)}>Sector 34</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Delhi</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Noida</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Gurugram</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Sector 29</button></li>

                        <li><button onClick={()=>setisOpenModel(false)}>Sector 34</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Delhi</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Noida</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Gurugram</button></li>
                        <li><button onClick={()=>setisOpenModel(false)}>Sector 29</button></li>

                        <li><button onClick={()=>setisOpenModel(false)}>Sector 34</button></li>

                       </ul>
                    </Dialog>
                    </>
)
}
export default CountryDropdown;