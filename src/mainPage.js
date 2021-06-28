import React from 'react'
import Book from './book'
import { Link } from 'react-router-dom'

const mainPage = (props) => {

 return (
      <div className='mainPage'>
      <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                            { 
                            props.books && props.books.map(book => {const selectedBooks =
                              book.shelf === 'currentlyReading' 
                              ? <li key={book.id}>
                                <Book 
                                book = {book}
                                updateShelf = {props.updateShelf}
                                />

                              </li> : book.shelf !== 'currentlyReading'
                              return selectedBooks
                             }
                             )
                             }
                             
                          </ol>
                        </div>
                      </div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                            { 
                             props.books && props.books.map(book => {const selectedBooks =
                              book.shelf === 'wantToRead' ? 
                              <li key={book.id}>
                                <Book 
                                book = {book}
                                updateShelf = {props.updateShelf}
                                /> 

                              </li> : book.shelf !== 'wantToRead'
                              return selectedBooks
                             }
                             )
                             }
                          </ol>
                        </div>
                      </div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                            {
                             props.books && props.books.map(book => {const selectedBooks =
                              book.shelf === 'read' ? 
                              <li key={book.id}>
                                <Book 
                                book = {book}
                                updateShelf = {props.updateShelf}
                                />

                              </li> : book.shelf !== 'read'
                              return selectedBooks
                             }
                             )
                             }
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="open-search">
                    <Link to='/search' className='search'>
                       <button>Add a book</button>
                      </Link>
                  </div>
                </div>
          </div>
    )
}


export default mainPage;