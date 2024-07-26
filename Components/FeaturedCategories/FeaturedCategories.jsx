import React, { useState } from 'react';
import { categories, products } from '../../Data/Data';
 import ItemGrid from './ItemGrid';
import './FeaturedCategories.css';

function FeaturedCategories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <div className="feature-header">
        <nav className="featured-category-nav">
        <h1>Featured Categories</h1>
          <ul>
            {categories.map((category) => (
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
      <ItemGrid items={products[selectedCategory]} />
    </div>
  );
}

export default FeaturedCategories;