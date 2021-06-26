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

    const updateQueryValue = (query) => this.setState(()=>({ query : query }))

    const toUpdateQuery = async (query) => {
      await updateQueryValue(query)
      const filteredBooks = await BooksAPI.search(query)
      console.log('search',filteredBooks)
      this.setState(()=>({ filteredBooks : filteredBooks }))
      await updateShelf(b) 
      console.log('state',this.state)
    }

     const b = filteredBooks.map(book => book)
     

    this.refEl = createRef()

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
                <input 
                type="text" placeholder="Search by title or author" 
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

search.propTypes = {
query : PropTypes.string.isRequired,
filteredBooks : PropTypes.array.isRequired,
toUpdateQuery : PropTypes.func,

}

export default search