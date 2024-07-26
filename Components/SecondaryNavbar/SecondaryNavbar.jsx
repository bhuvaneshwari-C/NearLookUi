import React,{useState} from 'react'
import fire from "../../Images/fire.png";
import ShopCategories from "../ShopCategories/ShopCategories";
import '../SecondaryNavbar/SecondaryNavbar.css'
import logo from "../../Images/logo.png";
import { FaBars} from 'react-icons/fa';

function SecondaryNavbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 return (
    <div>
        <div className="nav-container2">
          <div> 
            <ShopCategories size="" />
            </div>
            <div class="deals">
              <img src={fire} class="fire" alt=""></img>
              <h3>Today's Deals</h3>
            </div>
              <ul>
               <li><span class="fresh">Fresh</span></li>
               <li>Best Sellers</li>
               <li>New Releases</li>
               <li>Gift Ideas</li>
               <li>Vendors</li>
               </ul>
                 <div className="nav2_button">
                   <button>
                     <span class="products">Products</span>
                     <span class="services">Services</span>
                   </button>
                 </div>
        </div>
        <div className="second-nav">
        <div > 
          <ShopCategories size="medium" /></div>
           <div className="toggle-container">
              <button className="menu-button" onClick={toggleMenu}>
                <FaBars id="icon-fabars" />
             </button>
      
      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
            <img src={logo} ></img>
          <button className="close-button" onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <hr/>
        <nav className="second-sidebar">
          <ul>
            <li>Today's Deals</li>
            <li>Fresh</li>
            <li>Best Sellers</li>
            <li>New Releases</li>
            <li>Gift Ideas</li>
            <li>Vendors</li>
            </ul>
            <hr/>
            <ul className="second-nav-icons">
            <li className="sidebar-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            </li>
            </ul> 
        </nav>
      </div>
      {/* Overlay */}
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
  </div>
        </div>
      <hr class="nav_hr"></hr>
    </div>
  )
}

export default SecondaryNavbar