import React from 'react';
import '../Footer/FooterComponent.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const FooterComponent = () => {
  return (
    <footer className="footer1">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/Images/logo.png" alt="Near Look Logo" className="footer-logo" /> 
          <p>Awesome product and service based company</p>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> Address: 184/F-31  Solaimalai Kovil St, Pugal Coffee Opp, Theni - 625531</li>
            <li><i className="fas fa-phone-alt"></i> Call Us: (+91) - 540-025-124553</li>
            <li><i className="fas fa-envelope"></i> Email: info@nearlook.com</li>
            <li><i className="fas fa-clock"></i> Hours: 10:00 - 18:00, Mon - Sat</li>
          </ul>
        </div>
        <div className="footer-section1">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-section1">
          <h4>Account</h4>
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare Products</li>
          </ul>
        </div>
        <div className="footer-section1">
          <h4>Corporate</h4>
          <ul>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Farm Business</li>
            <li>Farm Careers</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div className="footer-section1">
          <h4>Popular</h4>
          <ul>
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Egg Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>
        <div className="footer-section1">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="app-buttons">
            <img src="/Images/appStore.png" alt="App Store" /> 
            <img src="/Images/googlePlay.png" alt="Google Play" class='googlePlay' /> 
          </div>
          <p>Secured Payment Gateways</p>
          <div className="payment-methods">
            <img src="/Images/cards.png" alt="Visa" /> 
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div class='copyRights'>
        <p>&copy; 2022,<span>Near Look</span> - Copy Rights  All rights reserved</p></div>
        <div className="footer-contacts">
          <div><i className="fas fa-phone-alt"></i><span class='num'>1900 - 6666</span>  <span>Working 8:00 - 22:00</span></div>
          <div><i className="fas fa-phone-alt"></i><span class='num'>1900 - 8888</span>  <span>24/7 Support Center</span></div>
        </div>
        <div className="social-media">
            <div><h3>Follow Us</h3>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-youtube"></i></div>
          <h6 class='subscribe'>Up to 15% discount on your first subscribe</h6>
        </div>
       
      </div>
     
    </footer>
  );
};

export default FooterComponent;
