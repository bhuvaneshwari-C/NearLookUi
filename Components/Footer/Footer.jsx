import React from 'react';
import '../Footer/Footer.css';
import footerImg from '../../Images/footerImg.png';
import FooterComponent from './FooterComponent';

const Footer = () => {
  const features = [
    {
      icon: '/Images/percentage.png', 
      title: 'Best prices & offers',
      description: 'Orders ₹50 or more'
    },
    {
      icon: '/Images/freeDel.png',
      title: 'Free delivery',
      description: '24/7 amazing services'
    },
    {
      icon: '/Images/greatDeal.png',
      title: 'Great daily deal',
      description: 'When you sign up'
    },
    {
      icon: '/Images/percentage.png',
      title: 'Wide assortment',
      description: 'Mega Discounts'
    },
    {
      icon: '/Images/discount.png',
      title: 'Easy returns',
      description: 'Within 30 days'
    }
  ];

  return (

    <div>
        <div class='footer'>
        <img src={footerImg} alt=''></img>
        </div>
          <div className="features-container">
             {features.map((feature, index) => (
             <div className="feature-box" key={index}>
             <div><img src={feature.icon} alt={feature.title} /></div>
             <div><h3>{feature.title}</h3>
             <p>{feature.description}</p></div>
          </div>
      ))}
    </div>
    <FooterComponent/>
    </div>
  );
};

export default Footer;
