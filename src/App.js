import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './mainPage'
import Search from './search'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
 this.state = {
    books : [],
  }
  
}
componentDidMount(){
  BooksAPI.getAll()
  .then ( (books) => {
   // console.log(books)
    this.setState(()=>({
      books : books
    }))
  })
}


updateShelf = (book,shelf) => {
  BooksAPI.update(book, shelf)
.then ( () => {
    BooksAPI.getAll()
    .then((books) => {
    console.log('books on updating shelf',books)
    this.setState(( )=>({
     books: books
    }))})
    })
  }


  render() {
    return (
      <div className="app">
        <switch>
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
        </switch>
      </div>
    )
  }
}

export default BooksApp
