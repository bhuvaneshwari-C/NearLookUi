import React, { useState } from 'react';
import { categories2, products2 } from '../../Data/Data';
import '../DailyBestSell/BestSellProduct.css';
import BestSell from './BestSell';

function BestSellProduct() {
  const [selectedCategory, setSelectedCategory] = useState(categories2[0].name);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <div className="header">
       
        <nav className="category-nav">
        <h1>Daily Best Sells</h1>
          <ul>
            {categories2.map((category) => (
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
      <BestSell items={products2[selectedCategory]} />
    </div>
  );
}

export default BestSellProduct;