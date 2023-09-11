import React, { useState } from 'react';
import search from '../assets/search.svg';
import filter from '../assets/filter.svg';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query, selectedCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSearch(query, category);
  };

  return (
    <div className="sx">
      <label htmlFor="s" className="search-div">
        <img
          src={search}
          alt="Search Icon"
          className="search-button-icon"
          style={{
            paddingTop: '6px',
            paddingRight: '63%',
            translate: 'transform(-30% , -63%)',
            position: 'absolute',
            height: '20px',
          }}
        />
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={query}
          className="search-bar"
          onChange={handleInputChange}
        />
        <img
          src={filter}
          alt="Filter Icon"
          className="filter-button-icon"
          style={{
            paddingLeft: '15px',
            width: '25px',
            height: '25px',
            paddingTop: '5px',
          }}
        />
      </label>
      <button className="button" style={{ marginLeft: '15px' }} onClick={() => handleCategoryClick(null)}>
        All
      </button>
      <button className="button" onClick={() => handleCategoryClick('Electronics')}>
        Electronics
      </button>
      <button className="button" onClick={() => handleCategoryClick('Clothing')}>
        Clothing
      </button>
      <button className="button" onClick={() => handleCategoryClick('Laptops')}>
        Laptops
      </button>
      <button className="button" onClick={() => handleCategoryClick('Phones')}>
        Phones
      </button>
      <button className="button" onClick={() => handleCategoryClick('Kitchen')}>
        Kitchen
      </button>
    </div>
  );
};

export default SearchBar;
