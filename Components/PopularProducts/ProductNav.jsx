import React from 'react';

function ProductNav({ categories1, setSelectedCategory }) {
  return (
    <nav>
      <h2>Popular Products</h2>
      {categories1.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.name)}
          style={{ margin: '0 10px', padding: '10px', backgroundColor: 'orange' }}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
}

export default ProductNav;
