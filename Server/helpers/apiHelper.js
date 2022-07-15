const {normalizeString} = require('../helpers/stringFormatHelper')
const mongoose = require('mongoose')

const validateNotExist = (colName, model) =>{
  return async (req,res,next) =>{
    const {name} = req.body
    let myCollection=[]
    
    if(name){
      myCollection = await model.find({"name": normalizeString(name)})
    }

    if(!myCollection.length){
      next()
    }else{
      console.log(colName+" name already exist")
      res.status(409).json(colName+" name already exist in data base")
    }
  }
}

const validateExistByIdOrName = (colName, model) =>{
  return async (req,res,next) =>{
    const {id} = req.params
    let myCollection = []
    if(id){
      myCollection = await model.find({"name": normalizeString(id)})
    }
    if(id && mongoose.Types.ObjectId.isValid(id) && !myCollection.length){ //Check by id
      myCollection = await model.find({'_id': mongoose.Types.ObjectId(id)})
    }

    if(myCollection.length){
      next()
    }else{
      console.log(colName+' not exist')
      res.status(409).json(colName+' not exist in data base')
    }
  }
}

const validateExistById = (colName, model) =>{
  return async (req,res,next) =>{
    const {id} = req.params
    let myCollection=[]
    if(id && mongoose.Types.ObjectId.isValid(id)){ //Check by id
      myCollection = await model.find({'_id': mongoose.Types.ObjectId(id)})
    }
    if(myCollection.length){
      next()
    }else{
      console.log(colName+' not exist')
      res.status(409).json(colName+' not exist in data base')
    }
  }
}

/* const validateNotExist = (colName, model) =>{
    return async (req,res,next) =>{

    }
} */
module.exports = {
  validateNotExist,
  validateExistByIdOrName,
  validateExistById,
}