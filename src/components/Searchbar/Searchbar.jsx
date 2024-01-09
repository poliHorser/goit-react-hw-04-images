import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;