import "./MainNavbar.css";
import React,{useState} from "react";
import logo from "../../Images/logo.png";
import LocationDropDown from '../LocationDropDown/LocationDropDown';
import SearchBar from "../SearchBar/SearchBar";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import 'bootstrap-icons/font/bootstrap-icons.css'

function MainNavbar() {
   

    const [isSearchVisible, setIsSearchVisible] = useState(false);
  
    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
    };
 

  return (
    <div>
      <nav class="nav_container">
        <img src={logo} alt="" class="logo"></img>
            <LocationDropDown />
            <div class="search-button">
              <SearchBar />
            </div>
               <div class="nav_left" >
                 <CiHeart  className="heart_icon"  /> <p class="cart_count">6</p>
                 <GiShoppingCart className='cart_icon' />
                 <p class="cart_count">3</p>
                 <HiOutlineUserCircle className="icon" />
                 <h4 class="title">
                 <span class="welcome">WELCOME</span>
                 <span class="nearlook">NEAR LOOK</span>
                 </h4>
               </div>
       </nav>

<nav class='toggle-menu'>
    <label> <img src={logo} alt="" class="logo1"></img></label>

                 <div className="search-container">
                     <button onClick={toggleSearch} className="search-button">
                     <i className={isSearchVisible ? "bi bi-x custom-icon-size" : "bi bi-search"} id='icon-width'></i>
                     </button>
                        {isSearchVisible && (
                             <div className="search-input-container">
                               <input type="text" placeholder="Search here..." className="search-input" />
                                 <button> <i className="bi bi-search search-icon"></i></button>
                             </div>
                     )}
                  </div>
                       <div className="toggle-menu-icons"> 
                          <CiHeart  className="heart_icon1"  /> <p class="cart_count1">6</p>
                          <GiShoppingCart className='cart_icon1' />
                          <p class="cart_count1">3</p>
                       </div>
</nav>
        <hr class="nav_hr"></hr>
    </div>
  );
}

export default MainNavbar;


