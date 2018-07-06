import React from 'react';
import Shelf from './Shelf';

const Bookshelf = (props) => {
  let books = props.books;
  const readBooksArray = books.filter(book => book.shelf === 'read');
  const wantToReadBooksArray = books.filter(book => book.shelf === 'wantToRead');
  const currentlyReadingBooksArray = books.filter(book => book.shelf === 'currentlyReading');

  return(
    <div className="list-books-content">
    <Shelf shelfTitle='Currently Reading' books={currentlyReadingBooksArray}/>
    <Shelf shelfTitle='Want to Read' books={wantToReadBooksArray}/>
    <Shelf shelfTitle='Read' books={readBooksArray}/>
    </div>
  );
}

export default Bookshelf;
