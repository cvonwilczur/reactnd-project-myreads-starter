import React from 'react';


const Book = (props) => {
  const { title, authors, imageLinks, shelf } = props.book;
  return (
    <div className="book">
      <div className="book-top">
        { imageLinks && imageLinks.thumbnail ?
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
         :
          <div className="book-cover" style={{ width: 128, height: 193}}>No Cover Available</div>
        }
        <div className="book-shelf-changer">
          <select value={shelf} onChange={(e) => props.changeShelf(e.target.value, props.book)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

export default Book;
