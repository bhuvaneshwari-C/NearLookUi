import React, { useState } from 'react';
import { categories1, products1 } from '../../Data/Data';
import '../PopularProducts/PopularProducts.css';
import ProductGrid from './ProductGrid';

function PopularProducts() {
  const [selectedCategory, setSelectedCategory] = useState(categories1[0].name);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <div className="product-header">
        <nav className="popular-category-nav">
        <h1>Popular Products</h1>
          <ul>
            {categories1.map((category) => (
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
      <ProductGrid items={products1[selectedCategory]} />
    </div>
  );
}

export default PopularProducts;