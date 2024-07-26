import React from 'react';

function ProductTabsNav({ categories3, setSelectedCategory }) {
  return (
    <nav>
    
      {categories3.map((category) => (
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

export default ProductTabsNav;
