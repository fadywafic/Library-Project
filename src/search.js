import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './book'
import { createRef } from 'react'



class search extends Component {
  //  _isMounted = false;
  constructor(props){
  super(props);
  this.state = {
    query : '' ,
    filteredBooks : []
  }
}


  render() {
    const {books,updateShelf} = this.props
    const { query ,filteredBooks =[]} = this.state

    const updateQueryValue = (query) => this.setState(()=>({ query : query }))

     const addShelfToFilteredBooks = async () => {
     const b =  filteredBooks && filteredBooks.map(book => book) 
     const B = await books && books.map(book=>book)
    return (
       B.id === b.id 
      ? B.shelf === b.shelf 
      : b.shelf === 'none' )
    } 
    
    const toUpdateQuery = async (query) => {
      updateQueryValue(query)
      if (query) {
      const res = await BooksAPI.search(query) // .error ? console.log(BooksAPI.search(query).error) :
      console.log('search',filteredBooks,filteredBooks.error)
      this.setState(()=>({ filteredBooks : res }))
      await addShelfToFilteredBooks ()
      const b = filteredBooks && filteredBooks.map(book => book)
      await updateShelf(b , b.shelf  )
      console.log('state',this.state)
      }
      else{
        this.setState(()=>({ filteredBooks : [] }))
      }
    }

    this.refEl = createRef()

  const showFilterdBooks = filteredBooks.error 
  ? console.log('ERROR:',filteredBooks.error) // || alert('kindly add proper book to search')
  : filteredBooks && filteredBooks
  /*.filter(b =>  
          b.title.toLowerCase().includes (query.toLowerCase()) || 
          b.authors.includes(query.toLowerCase())
       )  */
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
                  ?  books && books.map(book => 
                    <li key={book.id}>
                      <Book 
                      book = {book}
                      updateShelf = {updateShelf}
                      /></li> 
                    ) 
                  : showFilterdBooks 
                  // console.log('here' ,showFilterdBooks)

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