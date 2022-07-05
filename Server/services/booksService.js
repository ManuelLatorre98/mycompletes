const bookModel = require('../models/book')
const mongoose = require('mongoose')
const {normalizeString} = require('../helpers/stringFormatHelper')
module.exports ={
  async fetchAllBooks (from, amount){ //Can recive limits for paginations
    console.log("FROM ",from, "Amount", amount)
    const booksList = await bookModel.find().skip(from).limit(amount)
    return booksList 
  },
  async fetchBookById(id){
    let book
    
    if(mongoose.Types.ObjectId.isValid(id)){ //If recibe an id
      
      book = await bookModel.find({'_id': mongoose.Types.ObjectId(id)})
    }else{ //If recibe a name
      book = await bookModel.find({'name': normalizeString(id)})
    } 
    return book[0]
  },
  async createBook (data){
    const book = bookModel(data)
    const bookSaved = await book.save()
    return bookSaved
  },
  
  async editBook(id, data){
    const bookEdited = bookModel.findByIdAndUpdate(id, data, {new: true})
    return bookEdited
  },

  async deleteBook(id){
    await bookModel.findByIdAndDelete(mongoose.Types.ObjectId(id))
  }
}
