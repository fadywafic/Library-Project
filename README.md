# MyReads Project

its a library that contain 3 shelves of books 
1. books that you are currently reading
2. books that you want to read 
3. books that you have read 
and you can get more books through searching by book tilte or author ,then adding the book you want to any of your shelves'

To get started :

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains 2 main components , one for MainPage and other for Search.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── MainPage.js # A component in App.js that renders home page UI which contain 3 main shelves ('currentlyReading','wantToRead','read')
    ├── Book.js # A component in MainPage.js that renders books in each shelf with thier cover, title and author. also itcontain a method toUpdateShelf() in order to make book move from shelf to shelf
    ├── search.js # A component in App.js that renders search page UI which contain input box in order to search for a certain book by title or authors
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

