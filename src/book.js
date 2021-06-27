import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class book extends Component {
   
 
    render() {
      const {book,updateShelf} = this.props

     /* this.targetedshelf = createRef()
      const toChangeShelf = () =>{
        console.log(this.targetedshelf.current.value) 
        updateShelf(book,this.targetedshelf.current.value)
      }*/

     const toChangeShelf = (book,e) => updateShelf(book,e.target.value)

     const cover = book.imageLinks 
     ? `url(${book.imageLinks.thumbnail})`
     : `url(''})`
     
      const authors = book.authors || []
      //const shelf = book.shelf || ''
      const shelfing = (book.shelf !== 'none' ? book.shelf : book.shelf === 'none')
     // console.log (book)

        return (
          
                <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" 
                                  style={{ width: 128, height: 193, 
                                  backgroundImage : cover }}
                                   ></div>
                                  <div className="book-shelf-changer">
                                    
                                  <select 
                                   // ref ={this.targetedshelf} 
                                   // onClick ={(e) => toChangeShelf(e)}
                                    value = { book && shelfing }
                                    onChange={(e)=>toChangeShelf(book,e)}
                                  >
                    
                                      <option value="move" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{ book && authors.join(', ')}</div>
                              </div> // .join(', ')

        )
    }
}

book.propTypes = {
  book : PropTypes.object.isRequired,
  toChangeShelf : PropTypes.func,

}


export default book