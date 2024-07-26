import React from 'react';
import '../../Components/FeaturedCategories/ItemGrid.css';

function ItemGrid({ items }) {
  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div className="grid-item" key={index}  style={{ backgroundColor: item.backgroundColor }}>
          <img src={item.image} alt='' />
          <h3>{item.name}</h3>
          <h4>{item.items} items</h4>
        </div>
      ))}
    </div>
  );
}

export default ItemGrid;
