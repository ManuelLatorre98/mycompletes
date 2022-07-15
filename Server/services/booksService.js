const bookModel = require('../models/book')
const bookCategoryModel = require('../models/book-category')
const {addBookToCategory} = require('../services/categoryService')
const mongoose = require('mongoose')
const {normalizeString} = require('../helpers/stringFormatHelper')
module.exports ={
  async fetchAllBooks (from, amount){ //Can recive limits for paginations
    const booksList = await bookModel.find().skip(from).limit(amount)
    return booksList 
  },
  async fetchBookById(id){
    let book = await bookModel.find({'name': normalizeString(id)})
    if(mongoose.Types.ObjectId.isValid(id) && !book.length){ //If receives an id
      book = await bookModel.find({'_id': mongoose.Types.ObjectId(id)})
    }
    return book[0]
  },
  async fetchBooksByAutor (autor,from, amount){ //Can recive limits for paginations
    const booksList = await bookModel.find({'autor': normalizeString(autor)}).skip(from).limit(amount)
    return booksList 
  },
  async fetchBooksByPages(from,amount,order){
    const booksList = await bookModel.find().sort({"pages":order}).skip(from).limit(amount)
    return booksList 
  },
  async fetchBooksByCalification(from,amount,order){
    const booksList = await bookModel.find().sort({"calification":order}).skip(from).limit(amount)
    return booksList 
  },
  async createBook (data){
    const book = bookModel(data)
    const bookSaved = await book.save()
    await bookCategoryModel.updateMany(
      {_id: {$in: bookSaved.categories}}, //for all documents
      { $push: {movies: bookSaved._id,} } //removes the reference id of category
    )
    return bookSaved
  },
  
  async editBook(id, data){
    const bookEdited = bookModel.findByIdAndUpdate(id, data, {new: true})
    return bookEdited
  },

  async deleteBook(id){
    const book = await bookModel.find({'_id': mongoose.Types.ObjectId(id)})

    await bookCategoryModel.updateMany(
      {_id: {$in: book.categories}}, //for all documents
      { $pull: {books: book._id} } //removes the reference id of category
    )
    
    await bookModel.findByIdAndDelete(mongoose.Types.ObjectId(id))
    
  },
  async deleteCategoryReferencesBook(id){
    await bookModel.updateMany(
      {}, //for all documents
      { $pull: {categories: id} } //removes the reference id of category
    )
  }
}
