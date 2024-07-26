import React from 'react';

function BestSellNav({ categories2, setSelectedCategory }) {
  return (
    <nav>
      <h2>Daily Best Sells</h2>
      {categories2.map((category) => (
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

export default BestSellNav;
