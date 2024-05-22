import React, { useEffect, useState } from 'react';

const SearchNavbar = () => {
  const [inputVal, setVal] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  function onInputChange(e) {
    setVal(e.target.value);
  }

  useEffect(() => {
    const search = async (value) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${value}`);
        const data = await response.json();
        setSearchResult(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (inputVal) {
      search(inputVal);
    }
  }, [inputVal]);

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={onInputChange}
        placeholder="Search ID"
        name="searchit"
        style={{ textAlign: 'center' }}
      />
      <button onClick={() => search(inputVal)}>Submit</button>
      {searchResult && (
        <div className="card">
          <h2>Product Title: {searchResult.title}</h2>
          Product Thumbnail: <br /> <img src={searchResult.thumbnail} className='Image' />
          <p>{searchResult.description}</p>
          <p>Price: ${searchResult.price}</p>
          <p>Rating: {searchResult.rating}</p>
        </div>
      )}
    </div>
  );
};

export default SearchNavbar;
