import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './book'
import { createRef } from 'react'


class search extends Component {
    _isMounted = false;
  constructor(props){
  super(props);
  this.state = {
query : '' ,
filteredBooks : []
  }
}


  render() {
    const {books,updateShelf} = this.props
    const {query , filteredBooks =[]} = this.state

    const updateQueryValue = (query) => {this.setState(( )=>
      ({
      query : query
    }))
  }

    const toUpdateQuery = (query) => {
      // updateQueryValue(query)
      BooksAPI.search(query)
      .then((filteredBooks) => {
    console.log('search',filteredBooks)
    this.setState(( )=>({
     filteredBooks : filteredBooks ,
     query : query 
    }))
    updateShelf(filteredBooks=[])
    console.log('state',this.state)
  })
    }


    this.refEl = createRef()

  /*const filterBooks = () => {
      filteredBooks.filter ((b) => {b.title.toLowerCase().includes (query.toLowerCase())})
      filteredBooks.filter ((b)=> {b.authors.toLowerCase().includes (query.toLowerCase())})
    }*/

  

  const showFilterdBooks = filteredBooks.error 
  ? console.log(filteredBooks.error) // || alert('kindly add proper book to search')
  :filteredBooks
  /*.filter(b => {  
          b.title.toLowerCase().includes (query.toLowerCase()) || 
          b.authors.includes(query.toLowerCase())
       } )  */
  .map(book => 
       <li key={book.id}>
        <Book 
        book = {book}
        updateShelf = {updateShelf}
         /></li>
      )

        return (
             <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='mainPage'>
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
               }
                <input 
                type="text" placeholder="Search by title or author"
                value = {query} 
                ref = {this.refEl}
                onChange= {()=> toUpdateQuery(this.refEl.current.value)}
                
                />
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
      query === '' 
    ?  books.map(book => 
      (book.shelf === 'currentlyReading'||'wantToRead' ||'read'||'none')  
      && <li key={book.id}>
        <Book 
        book = {book}
        updateShelf = {updateShelf}
         /></li> 
       ) 
      : showFilterdBooks
      
  } 

              </ol>
            </div>
          </div>
        )
    }
}
export default search