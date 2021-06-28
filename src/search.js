import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './book'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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

    const addShelfToFilteredBooks = (x) =>
    books && books.map(B => {  
    filteredBooks && x.map( b => { 
       if (B.id === b.id) {b.shelf = B.shelf 
 /* console.log
      (B.title , 'B.shelf : ' , B.shelf ,
       b.title, ' b.shelf : ', b.shelf) */ } 
      else if (B.id !== b.id) {b.shelf = 'none'} 
    } ) 
    } )
    
    const toUpdateQuery = async (query) => {
      updateQueryValue(query)
      if (query) {
      const res = await BooksAPI.search(query)
      // console.log('search',filteredBooks,filteredBooks.error)
      if (res.error) { this.setState(()=>({ filteredBooks : [] })) }
      else { 
      await addShelfToFilteredBooks (res)
      this.setState(()=>({ filteredBooks : res }))
      const b = filteredBooks && filteredBooks.map(book => book)
      await updateShelf(b , b.shelf )
      console.log('state',this.state) 
      }
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