import React from 'react';
import './ItemGrid2.css'; 
import onion from '../../Images/onion.png';
import rosemilk from '../../Images/rosemilk.png';
import vegetables from '../../Images/vegetables.png'


const items = [
  { name: 'Everyday Fresh & clean with our Products', image:onion, backgroundColor: '#f8d7da'},
  { name: 'Make your Breakfast Healthy and Easy', image:rosemilk, backgroundColor: '#d4edda' },
  { name: 'The best Organic Products Online', image: vegetables, backgroundColor: '#fff3cd' },
];

function ItemGrid2(){
  return (
    <div className="grid-containerP">
      {items.map((item, index) => (
        <div className="grid-itemP" key={index} style={{ backgroundColor: item.backgroundColor }} >
        <div class="align-grid2">
         <div> <h3>{item.name}</h3>
          <button>Shop Now</button></div>
          <div class='image-grid2'><img src={item.image} alt={item.name} /></div></div>
          
        </div>
      ))}
    </div>
  );
};

export default ItemGrid2;
