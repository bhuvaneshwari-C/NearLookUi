import React from 'react';
import "../TodaysDeal/TodaysDeal.css";
import Button from '../Button/Button';


const background =[
    { id:1, image:'/Images/background.jpeg' },
    { id:2, image:'/Images/background1.png' },
    { id:3, image:'/Images/background2.jpeg' },
    { id:4, image:'/Images/background3.jpeg' },
]

const deals = [
  {
    id: 1,
    name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    price: 32.85,
    oldPrice: 33.8,
    rating: 4.0,
    image: '/Images/AmulButter.png', 
    brand: 'NestFood',
  },
  {
    id: 2,
    name: 'Perdue Simply Smart Organics Gluten Free',
    price: 24.85,
    oldPrice: 26.8,
    rating: 4.0,
    image: '/Images/beans.png',
    brand: 'Old El Paso',
  },
  {
    id: 3,
    name: 'Signature Wood-Fired Mushroom and Caramelized',
    price: 12.85,
    oldPrice: 13.8,
    rating: 3.0,
    image: '/Images/droolsChicken.png',
    brand: 'Progresso',
  },
  {
    id: 4,
    name: 'Simply Lemonade with Raspberry Juice',
    price: 15.85,
    oldPrice: 16.8,
    rating: 3.0,
    image: '/Images/greenGrapes.png',
    brand: 'Yoplait',
  },
];

const TodaysDeal = () => {
  return (
    <div className="deals-container">
      <h2>Deals Of The Day</h2>
      <div class='deals-wrapper'>
      <div class="background-grid">
        {background.map(item =>(
            <div  key={item.id} class='deal-background'>
                <img src={item.image} alt='' class="backgroundImage"/>
            </div>
        ))}
      </div>
      <div className="deals-grid">
        {deals.map(deal => (
          <div key={deal.id} className="deal-card">
            <div class='item-deails'>
            <h3>{deal.name}</h3>
            <div class='item-meta'>
                 <p className="item-rating">★ ({deal.rating})</p>
            <p className='item-by'>By <span>{deal.brand}</span></p></div>
            <div className="price-container">
              <span className="current-price">₹{deal.price}</span>
              <span className="old-price">₹{deal.oldPrice}</span>
            <Button name={"Add"} 
            onClick=""
            className={"Add-btn"}></Button>
             </div>
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TodaysDeal;
