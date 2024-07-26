import React from 'react';

function FeaturedNav({ categories, setSelectedCategory }) {
  return (
    <nav>
      <h2>Featured Categories</h2>
      {categories.map((category) => (
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

export default FeaturedNav;
