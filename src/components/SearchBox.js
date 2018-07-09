import React from 'react';

const SearchBox = ({ toggleSearchPage, searchChange, searchResults }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={toggleSearchPage}>Close</a>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
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
