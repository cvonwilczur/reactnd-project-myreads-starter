import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf';
import SearchBox from './components/SearchBox';

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
      books: [
        {title: 'Loading',
         id: 'a',
         authors: 'Loading',
         imageLinks: 'Loading',
         shelf: 'read'},
        {title: 'Loading',
        id: 'b',
        authors: 'Loading',
        imageLinks: 'Loading',
        shelf: 'read'},
        {title: 'Loading',
        id: 'c',
        authors: 'Loading',
        imageLinks: 'Loading',
        shelf: 'read'},
        {title: 'Loading',
        id: 'd',
        authors: 'Loading',
        imageLinks: 'Loading',
        shelf: 'read'},
        {title: 'Loading',
        id: 'e',
        authors: 'Loading',
        imageLinks: 'Loading',
        shelf: 'wantToRead'},
        {title: 'Loading',
        id: 'f',
        authors: 'Loading',
        imageLinks: 'Loading',
        shelf: 'read'},
        {title: 'Loading',
        id: 'g',
        authors: 'Loading',
        imageLinks: 'Loading',
        shelf: 'currentlyReading'}
      ],
      searchbox: ''
    };
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(data => this.setState({ books: data }))
  }


  onSearchChange = (event) => {
    this.setState({ searchbox: event.target.value })
    const filteredBooks = this.state.books.filter(books => {
      return books.title.toLowerCase().includes(this.state.searchbox.toLowerCase())
    })
    console.log(filteredBooks);
  }

  toggleSearchPage = () => {
    this.setState({ showSearchPage: false });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBox toggleSearchPage={this.toggleSearchPage} searchChange={this.onSearchChange}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Reader App</h1>
            </div>
            <Bookshelf books={this.state.books}/>
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
