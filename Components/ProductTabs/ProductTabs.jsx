import React, { useState } from 'react';
import { categories3, products3 } from '../../Data/Data';
import '../ProductTabs/ProductTabs.css';
import ProductCard from './ProductCard';

function ProductTabs() {
  const [selectedCategory, setSelectedCategory] = useState(categories3[0].name);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App1">
      <div className="header">
        <nav className="categoryNav">
          <ul>
            {categories3.map((category) => (
              <li
                key={category.id}
                className={selectedCategory === category.name ? 'selected' : ''}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr></hr>
      <ProductCard items={products3[selectedCategory]} />
    </div>
  );
}

export default ProductTabs;