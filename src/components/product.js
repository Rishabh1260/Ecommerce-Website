import React, { useEffect, useState } from 'react';

import Star from '../assets/star.svg';

const Product = ({ searchQuery, selectedCategory }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const rjson = await response.json();
      setProductData(rjson.products);
    };
    fetchProducts();
  }, []);

  console.log('the product data ', productData);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const filteredProducts = productData.filter((item) => {
    if (selectedCategory && item.category !== selectedCategory) {
      return false;
    }
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <>
      {filteredProducts.map((item) => (
        <div className="product-container" key={item.id}>
          <div style={{ background: 'transparent' }}>
            <img
              src={item.images[0]}
              alt="laptop"
              className="Productimage"
              style={{
                filter: 'drop-shadow(-2px 54px 42px rgba(0, 0, 0, 0.31)) drop-shadow(rgb(150, 2, 2, 0.7) 0px 5px 30px)',
              }}
            />
          </div>
          <div className="separator"></div>
          <div>
            <h2>{item.title}</h2>
            <h3>₹ {item.price}</h3>
            <p>{item.description}</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
              gap: '85%',
              paddingLeft: '10%',
            }}
          >
            <img
              src={Star}
              alt="star"
              className="star"
              style={{
                width: '25px',
                height: '25px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
              }}
            />
            <button>+ Cart</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
