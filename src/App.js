import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './mainPage'
import Search from './search'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import PropTypes  from 'prop-types'


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books : [],
  }
}

async componentDidMount(){
  const books = await BooksAPI.getAll()
  // console.log(books)
  this.setState(()=>({ books : books })) }



updateShelf = async (book,shelf) => {
  await BooksAPI.update(book,shelf)
  const books = await BooksAPI.getAll()
  console.log('books on updating shelf',books)
  this.setState(()=>({ books : books })) }



  render() {
    return (
      <div className="app">
        <Switch>
        < Route exact path ='/' render= {()=>
        <MainPage 
        books = {this.state.books}
        updateShelf = {this.updateShelf}
        />
        } />

        < Route path = '/search' render= {()=>
        <Search
        books = {this.state.books}
        updateShelf = {this.updateShelf}
        />
        } />
        </Switch>
      </div>
    )
  }
}

BooksApp.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf : PropTypes.func,

}

export default BooksApp
