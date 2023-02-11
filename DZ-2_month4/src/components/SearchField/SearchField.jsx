// SearchField.js
import React from 'react';
import styles from './searchfield.module.css';

const SearchField = ({ searchTerm, handleSearch }) => (
  <div className={styles.searchContainer}>
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      className={styles.searchInput}
      placeholder="Search for a product"
    />
    <button className={styles.searchButton}>Search</button>
  </div>
);

export default SearchField;
