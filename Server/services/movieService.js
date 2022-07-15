const movieModel = require('../models/movie')
const movieCategoryModel = require('../models/movie-category')
//const {addMovieToCategory} = require('../services/categoryService')
const mongoose = require('mongoose')
const {normalizeString} = require('../helpers/stringFormatHelper')

module.exports = {
  async fetchAllMovies (from, amount){ //Can recive limits for paginations
    const moviesList = await movieModel.find().skip(from).limit(amount)
    return moviesList 
  },
  async fetchMovieById(id){
    let movie = await movieModel.find({'name': normalizeString(id)})
    if(mongoose.Types.ObjectId.isValid(id) && !movie.length){ //If recibe an id
      movie = await movieModel.find({'_id': mongoose.Types.ObjectId(id)})
    }
    return movie[0]
  },
  async fetchMoviesByDirector (director,from, amount){ //Can recive limits for paginations
    const movieList = await movieModel.find({'director': normalizeString(director)}).skip(from).limit(amount)
    return movieList 
  },
  async fetchMoviesByTime(from,amount,order){
    const moviesList = await movieModel.find().sort({"duration":order}).skip(from).limit(amount)
    return moviesList 
  },
  async fetchMoviesByCalification(from,amount,order){
    const moviesList = await movieModel.find().sort({"calification":order}).skip(from).limit(amount)
    return moviesList 
  },
  async createMovie (data){
    const movie = movieModel(data)
    const movieSaved = await movie.save()
    await movieCategoryModel.updateMany(
      {_id: {$in: movieSaved.categories}}, //for all documents
      { $push: {books: movieSaved._id} } //removes the reference id of category
    )
    return movieSaved
  },
  async editMovie(id, data){
    const movieEdited = movieModel.findByIdAndUpdate(id, data, {new: true})
    return movieEdited
  },
  async deleteMovie(id){
    const movie = await movieModel.find({'_id': mongoose.Types.ObjectId(id)})
    deleteMovieToCategory(movie.categories,movie._id, movieCategoryModel)
    await movieCategoryModel.updateMany(
      {_id: {$in: movie.categories}}, //for all documents
      { $pull: {movies: movie._id} } //removes the reference id of category
    )
    await movieModel.findByIdAndDelete(mongoose.Types.ObjectId(id))
    
  },
  async deleteCategoryReferencesMovie(id){
    await movieModel.updateMany(
      {}, //for all documents
      { $pull: {categories: id} } //removes the reference id of category
    )
  }
}