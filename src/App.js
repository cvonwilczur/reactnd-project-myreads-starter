import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf';
import SearchBox from './components/SearchBox';
import Shelf from './components/Shelf';

class BooksApp extends Component {
  constructor() {
    super()
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false,
      books: [],
      searchResults: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(data => this.setState({ books: data }))
  }


  onSearchChange = (event) => {
    BooksAPI.search(event.target.value)
     .then(data => this.setState({searchResults: data}))
  }

  toggleSearchPage = () => {
    this.setState({ showSearchPage: false });
  }

  changeShelf = (newShelf, changedBook) => {
    BooksAPI.update(changedBook, newShelf)
    let booksArray = this.state.books
    let i = booksArray.findIndex((book => book.id === changedBook.id));

    if (i !== -1) {
      if (newShelf === 'none') {
        // if user sets to none, the matching book is spliced out of the books array
        booksArray.splice(i, 1);
      } else {
        //in any other circumstance, the shelf of the matched book is updated to newshelf
        booksArray[i].shelf = newShelf;
      }
    } else {
      // if the book doesn't exist in the array (from search), it's pushed into the books array
      changedBook.shelf = newShelf;
      booksArray.push(changedBook)
    }
    this.setState({books: booksArray})
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
        <div>
          <SearchBox
            toggleSearchPage={this.toggleSearchPage}
            searchChange={this.onSearchChange}
            searchedBooks={this.state.searchedBooks}
          />
          <Shelf
            shelfTitle='Search Results'
            books={this.state.searchResults}
            changeShelf={this.changeShelf}
          />
        </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Reader App</h1>
            </div>
            <Bookshelf
              changeShelf={this.changeShelf}
              books={this.state.books}
            />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp;
