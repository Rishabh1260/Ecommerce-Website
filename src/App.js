import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/search';
import Product from './components/product';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = (query) => {
    // Implement your search logic here (e.g., fetch data from an API)
    // Update the searchResults state with the search results
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {/* Display search results */}
      <Product />
    </div>
  );
}

export default App;
