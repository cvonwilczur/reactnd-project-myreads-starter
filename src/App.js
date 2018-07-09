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
      books: [
        {title: 'Loading',
         id: 'a',
         authors: 'Loading',
         imageLinks: 'Loading',
         shelf: 'read'}
      ],
      searchResults: [{
        title: 'Loading',
        id: 'a',
        authors: 'Loading',
        imageLinks: 'Loading',
        shelf: 'read'}
      ],
      displaySearchResults: false
    };
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(data => this.setState({ books: data }))
  }


  onSearchChange = (event) => {
    const searchBox = event.target.value
    console.log(searchBox);
    BooksAPI.search(event.target.value)
     .then(data => this.setState({searchResults: data}))
    console.log(this.state.searchResults)
    if (this.state.searchResults){
      this.setState({displaySearchResults: true})
    } else {
      this.setState({displaySearchResults: false})
    }
  }

  toggleSearchPage = () => {
    this.setState({ showSearchPage: false });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
        <div>
          <SearchBox toggleSearchPage={this.toggleSearchPage} searchChange={this.onSearchChange} searchedBooks={this.state.searchedBooks}/>
          {this.state.displaySearchResults && <Shelf shelfName='Search Results' books={this.state.searchResults} />}
        </div>
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
