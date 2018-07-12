import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Bookshelf from './components/Bookshelf';
import SearchBox from './components/SearchBox';
import Shelf from './components/Shelf';

class BooksApp extends Component {
  constructor() {
    super()
    this.state = {
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
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Reader App</h1>
            </div>
            <Bookshelf
              changeShelf={this.changeShelf}
              books={this.state.books}
            />
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}
       />
       <Route path="/search" render={() => (
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
       )}
      />
      </div>
    )
  }
}

export default BooksApp;
