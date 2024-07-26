import React from 'react';
import '../PopularProducts/ProductGrid.css';
import { GrCart } from "react-icons/gr";

function ProductGrid({ items }) {
  return (
    <div className="grid-container1">
      {items.map((item, index) => (
        <div className="grid-item1" key={index} style={{ backgroundColor: item.backgroundColor }}>
          <div className="item-header">
            <p  className="in-stock">{item.instock}</p>
          </div>
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <p className="item-category">{item.category}</p>
            <h3 className="item-name">{item.name}</h3>
            <div class='item-meta'> <p className="item-rating">★ ({item.rating})</p>
            <p className="item-by">By <span>{item.brand}</span></p>
            </div>
            <div className="price-container">
              <h4 className="current-price">&#8377;{item.price}</h4>
              <h5 className="old-price">&#8377;{item.oldPrice}</h5>
              <button className="add-button"><GrCart className="cart-icon" />Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;

