const {fetchAllBooks,createBook, fetchBookById, fetchBooksByAutor, fetchBooksByPages,fetchBooksByCalification, editBook, deleteBook} = require('../services/booksService')
const {bookClearData, bookClearDataList,getBookData} = require('../helpers/dataHelper')
module.exports = {
  async getAllBooks(req, res, next){
    try{
      const {from, amount} = req.query
      const booksList= await fetchAllBooks(from,amount)
      const bookListClear = bookClearDataList(booksList)
      res.status(200).json(bookListClear)
    }catch(err){
      next(err)
    }
  },
  async getBookById(req,res,next){
    try{
      const {id} = req.params
      
      const book = await fetchBookById(id)
      const bookClear = bookClearData(book)
      res.status(200).json(bookClear)
    }catch(err){
      next(err)
    }
  },
  async getBookByAutor(req,res,next){
    try{
      const {autor} = req.params
      const {from, amount} = req.query
      const booksList= await fetchBooksByAutor(autor,from,amount)
      const bookListClear = bookClearDataList(booksList)
      res.status(200).json(bookListClear)
    }catch(err){
      next(err)
    }
  },

  async getBookByPages(req,res,next){
    try{
      const {from, amount, order} = req.query //order receives -1 (desc)/1 (asc)
      const booksList= await fetchBooksByPages(from,amount,order)
      const bookListClear = bookClearDataList(booksList)
      res.status(200).json(bookListClear)
    }catch(err){
      next(err)
    }
  },
  async getBooksByCalification(req,res,next){
    try{
      const {from, amount, order} = req.query //order recives -1 (desc)/1 (asc)
      const booksList= await fetchBooksByCalification(from,amount,order)
      const bookListClear = bookClearDataList(booksList)
      res.status(200).json(bookListClear)
    }catch(err){
      next(err)
    }
  },

  async postBook(req, res, next){
    try{
      const newData = getBookData(req.body)
      const newBook = await createBook(newData)
      const newBookClear = bookClearData(newBook)
      res.status(200).json(newBookClear)
    }catch(err){
      next(err)
    }
  },

  async editBook(req,res,next){
    try{
      const newData = getBookData(req.body)
      const newBook = await editBook(id,newData)
      const newBookClear= bookClearData(newBook)
      res.status(200).json(newBookClear)
    }catch(err){
      next(err)
    }
  },
  
  async removeBook(req,res,next){
    try{
      const id = req.params.id
      await deleteBook(id)
      res.status(200).json("Book deleted succesfully")
    }catch(err){
      next(err)
    }
  }

}