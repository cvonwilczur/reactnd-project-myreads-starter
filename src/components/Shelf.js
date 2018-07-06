import React from 'react';
import Book from './Book';

const Shelf = (props) => {
  const booksArray = props.books.map((book, i) => {
    return (
      <Book
        key={props.books[i].id}
        book={props.books[i]}
      />
    )
  })

  return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {booksArray}
            </li>
          </ol>
        </div>
      </div>
  );
}

export default Shelf;
