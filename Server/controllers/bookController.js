const {fetchAllBooks,createBook, fetchBookById, editBook, deleteBook} = require('../services/booksService')
const {bookClearData, bookClearDataList} = require('../helpers/dataHelper')
const {normalizeString} = require('../helpers/stringFormatHelper')
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

    }
  },

  async postBook(req, res, next){
    try{
      const {name, calification, autor,pages,finishied} = req.body
      let newData= {
        calification, 
        pages, 
        finishied
      }
      if(name){
        newData.name= normalizeString(name)
      }
      if(autor) {
        newData.autor= normalizeString(autor)
      }

      const newBook = await createBook(newData)
      const newBookClear = bookClearData(newBook)
      res.status(200).json(newBookClear)
    }catch(err){
      next(err)
    }
  },

  async editBook(req,res,next){
    try{
      const id = req.params.id
      const {name, calification,autor,pages,finishied} = req.body
      
      let newData= {
        calification, 
        pages, 
        finishied
      }
      if(name){
        newData.name= normalizeString(name)
      }
      if(autor) {
        newData.autor= normalizeString(autor)
      }
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