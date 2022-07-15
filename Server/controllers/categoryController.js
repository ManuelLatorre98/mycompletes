const {categoryClearData, categoryClearDataList,getCategoryData} = require('../helpers/dataHelper')
const { fetchAllCategories,fetchCategoryById, createCategory, editCategoryData, deleteCategory} = require('../services/categoryService')
const {deleteCategoryReferencesGame} = require('../services/gameService')
const {deleteCategoryReferencesBook} = require('../services/booksService')
const {deleteCategoryReferencesMovie} = require('../services/movieService')
const getAllCategories = (model) => {
  return async (req, res, next) => {
    try{
      const {from, amount} = req.query
      const CategoryList= await fetchAllCategories(from,amount,model)
      const categoryListClear = categoryClearDataList(CategoryList)
      res.status(200).json(categoryListClear)
    }catch(err){
      next(err)
    }
  }
}

const getCategoryById = (model) => {
  return async (req,res,next) => {
    try{
      const {id} = req.params
      const category = await fetchCategoryById(id, model)
      const categoryClear = categoryClearData(category)
      res.status(200).json(categoryClear)
    }catch(err){
      next(err)
    }
  }
}

const postCategory = (model) => {
  return async (req, res, next) => {
    try{
      const newData = getCategoryData(req.body)
      const newCategory = await createCategory(newData, model)
      const newCategoryClear = categoryClearData(newCategory)
      res.status(200).json(newCategoryClear)
    }catch(err){
      next(err)
    }
  }
}

const editCategory = (model) => {
  return async (req,res,next) => {
    try{
      const id = req.params.id
      const newData = getCategoryData(req.body)
      const newCategory = await editCategoryData(id,newData, model)
      const newCategoryClear= categoryClearData(newCategory)
      res.status(200).json(newCategoryClear)
    }catch(err){
      next(err)
    }
  }
}

const removeCategory = (model, type) => {
  return async (req,res,next) => {
    try{
      const id = req.params.id
      await deleteCategory(id, model)
      switch (type){
        case 'game':
          deleteCategoryReferencesGame(id)
          break
        case 'book':
          deleteCategoryReferencesBook(id)
          break
        case 'movie': 
          deleteCategoryReferencesMovie
          break
      }
      res.status(200).json("Category deleted succesfully")
    }catch(err){
      next(err)
    }
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  postCategory,
  editCategory,
  removeCategory
}