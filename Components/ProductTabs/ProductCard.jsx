import React from 'react';
import '../ProductTabs/ProductCard.css';

function ProductCard({ items }) {
  return (
    <div className="gridContainer1">
      {items.map((item, index) => (
        <div className="gridItem1" key={index} style={{ backgroundColor: item.backgroundColor }}>
          <div class='image'>
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <p className="item-category">{item.category}</p>
            <h3 className="item-name1">{item.name}</h3>
             <p className="item-rating1">★ ({item.rating})</p>
            <div className="priceContainer">
              <h4 className="current-price">&#8377;{item.price}</h4>
              <h4 className="old-price">&#8377;{item.oldPrice}</h4>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
