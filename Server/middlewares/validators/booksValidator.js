const {check} = require('express-validator')
const bookModel = require('../../models/book')
const { validateResult } = require('../../helpers/validateHelper')
const mongoose = require('mongoose')
const {normalizeString} = require('../../helpers/stringFormatHelper')
const validateBookData = [
  check('name')
    .exists()
    .not()
    .isEmpty(),
  check('calification')
    .exists()
    .not()
    .isEmpty(),
  check('autor')
    .exists()
    .not()
    .isEmpty(),
  check('pages')
    .exists()
    .not()
    .isEmpty(),
  (req,res,next) => {
    validateResult(req,res,next)
  }
]

/* const validateNotExist = async (req,res,next) => { //Check form name
  const {name} = req.body
  let book=[]
  
  if(name){
    book = await bookModel.find({"name": normalizeString(name)})
  }

  if(!book.length){
    next()
  }else{
    console.log(`Book name already exist`)
    res.status(409).json("Book name already exist in data base")
  }
}

const validateExistByIdOrName = async (req,res,next) => { //Checks params by name or id
  const {id} = req.params
  let book = []
  if(id && mongoose.Types.ObjectId.isValid(id)){ //Check by id
    book = await bookModel.find({'_id': mongoose.Types.ObjectId(id)})
  }else{//Check byName  
    book = await bookModel.find({"name": normalizeString(id)})
  }

  if(book.length){
    next()
  }else{
    console.log(`Book not exist`)
    res.status(409).json("Book not exist in data base")
  }
}

const validateExistById = async(req, res, next) => {
  const {id} = req.params
  let book=[]
  if(id && mongoose.Types.ObjectId.isValid(id)){ //Check by id
    book = await bookModel.find({'_id': mongoose.Types.ObjectId(id)})
  }

  if(book.length){
    next()
  }else{
    console.log(`Book not exist`)
    res.status(409).json("Book not exist in data base")
  }
}
*/
const validateExistBooksOfAutor = async(req,res,next) => {
  const {autor} = req.params
  let books = []
  if(autor){
  books = await bookModel.find({'autor': normalizeString(autor)})
  }
  if(books.length){
    next()
  }else{
    console.log(`Not exists books of that autor`)
    res.status(409).json("Not exists books of that autor")
  }
} 

module.exports={
  validateBookData,
  validateExistBooksOfAutor
}