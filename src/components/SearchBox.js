import React from 'react';
import { Link } from 'react-router-dom'


const SearchBox = ({ toggleSearchPage, searchChange, searchResults }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link exact to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="search" placeholder="Search by title or author" onChange={searchChange}/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <li>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default SearchBox;
