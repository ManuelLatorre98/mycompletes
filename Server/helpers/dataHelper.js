const {normalizeString} = require('../helpers/stringFormatHelper')

function userClearData(user){
  const dataUser = {
    email: user.email,
    nickName: user.nickName,
    dateBorn: user.dateBorn,
  }
  return dataUser
}

function userClearDataList(userList){
  let userData
  let userDataList=[]
  userList.forEach(user => {
    userData= userClearData(user)
    userDataList.push(userData)
    
  });
  return userDataList
}

function getBookData(body){
  const {name, calification,autor,pages,finishied} = body
    let newData= {
      calification, 
      pages
    }
    if(name){
      newData.name= normalizeString(name)
    }
    if(autor) {
      newData.autor= normalizeString(autor)
    }

  return newData
}

function bookClearData(book){
  const dataBook={
    _id: book._id,
    name: book.name,
    calification: book.calification,
    autor: book.autor,
    pages: book.pages,
    categories: book.categories
  }
  return dataBook
}

function bookClearDataList(bookList){
  let bookData
  let bookDataList=[]
  bookList.forEach(book => {
    bookData= bookClearData(book)
    bookDataList.push(bookData)
    
  });
  return bookDataList
}
function movieClearData(movie){
  const dataMovie={
    _id: movie._id,
    name: movie.name,
    calification: movie.calification,
    plataformLinks: movie.plataformLinks,
    director: movie.director,
    duration: movie.duration,
    categories: movie.categories
  }
  return dataMovie
}
function movieClearDataList(movieList){
  let movieData
  let movieDataList=[]
  movieList.forEach(movie => {
    movieData= movieClearData(movie)
    movieDataList.push(movieData)
  });
  return movieDataList
}

function getMovieData(body){
  const {name, calification, plataformLinks, director,duration,categories} = body
  let newData= {
    calification, 
    plataformLinks,
    duration
  }
  if(name){
    newData.name= normalizeString(name)
  }
  if(director) {
    newData.director= normalizeString(director)
  }
  return newData
}

//////////////////////


function gameClearData(game){
  const dataGame={
    _id: game._id,
    name: game.name,
    calification: game.calification,
    plataformLinks: game.plataformLinks,
    developer: game.developer,
    categories: game.categories
  }
  return dataGame
}

function gameClearDataList(gameList){
  let gameData
  let gameDataList=[]
  gameList.forEach(game => {
    gameData= gameClearData(game)
    gameDataList.push(gameData)
  });
  return gameDataList
}

function getGameData(body){
  const {name, calification, plataformLinks, developer,categories} = body
  
  let newData= {
    calification, 
    plataformLinks,
    categories
  }
  if(name){
    newData.name= normalizeString(name)
  }
  if(developer) {
    newData.developer= normalizeString(developer)
  }
  
  return newData
}

///////////////////////
function categoryClearData(category){
  const dataCategory={
    _id: category._id,
    name: category.name,
    /* books: category.books,
    movies: category.movies,
    games: category.games */
  }
  return dataCategory
}

function categoryClearDataList(categoryList){
  let categoryData
  let categoryDataList=[]
  categoryList.forEach(category => {
    categoryData= categoryClearData(category)
    categoryDataList.push(categoryData)
  });
  return categoryDataList
}

function getCategoryData(body){
  const {name, books, games, movies} = body
  let newData= {
    name,
    books,
    movies,
    games,
  }
  if(name){
    newData.name= normalizeString(name)
  }
  return newData
}

module.exports = {
  userClearData, 
  userClearDataList, 

  bookClearData, 
  bookClearDataList,
  getBookData,

  movieClearData,
  movieClearDataList,
  getMovieData,

  gameClearData,
  gameClearDataList,
  getGameData,

  categoryClearData,
  categoryClearDataList,
  getCategoryData,
}