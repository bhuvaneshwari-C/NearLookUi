import React from 'react';
import '../DailyBestSell/BestSell.css';
import best from '../../../src/Images/Screenshot 2024-07-02 160714.png'

function BestSell({ items }) {
  return (
    <div className="grid-container2">
        <img src={best} class='best'  alt=''></img>
      {items.map((item, index) => (
        <div className="grid-item2" key={index}>
          <div className="item-header">
            <p  className="in-stock1">{item.instock}</p>
          </div>
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details1">
            <p className="item-category">{item.category}</p>
            <h3 className="item-name">{item.name}</h3>
            <div class='item-meta'> <p className="item-rating1">★ ({item.rating})</p>
            <p className="item-by">By <span>{item.brand}</span></p>
            </div>
            <div className="price-container1">
              <h4 className="current-price">&#8377;{item.price}</h4>
              <h5 className="old-price">&#8377;{item.oldPrice}</h5> 
            </div>
            <p class='sold'>Sold:{item.sold}/{item.total}</p>
            <button className="add-button1">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BestSell;