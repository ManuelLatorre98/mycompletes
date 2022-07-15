const mongoose = require('mongoose')
const {normalizeString} = require('../helpers/stringFormatHelper')
/* const {deleteCategoryReferencesGame} = require('../services/gameService')
const {deleteCategoryReferencesBook} = require('../services/booksService')
const {deleteCategoryReferencesMovie} = require('../services/movieService') */
module.exports = {
  async fetchAllCategories (from, amount, model){ //Can recive limits for paginations
    const categorysList = await model.find().skip(from).limit(amount)
    return categorysList 
  },
  async fetchCategoryById(id, model){
    let category = await model.find({'name': normalizeString(id)})
    if(mongoose.Types.ObjectId.isValid(id) && !category.length){ //If recibe an id
      category = await model.find({'_id': mongoose.Types.ObjectId(id)})
    }
    return category[0]
  },
  async createCategory(data, model){
    const category = model(data)
    const categorySaved = await category.save()
    return categorySaved
  },
  async editCategoryData(id, data, model){
    const categoryEdited = model.findByIdAndUpdate(id, data, {new: true})
    return categoryEdited
  },
  async deleteCategory(id, model, type){
    await model.findByIdAndDelete(mongoose.Types.ObjectId(id))
/*     await deleteCategoryReferencesGame(id)
    await deleteCategoryReferencesBook(id)
    await deleteCategoryReferencesMovie(id) */
  },
}