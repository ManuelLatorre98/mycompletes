const gameModel = require('../models/game')
const gameCategoryModel = require('../models/game-category')
//const {addGameToCategory} = require('../services/categoryService')
const mongoose = require('mongoose')
const {normalizeString} = require('../helpers/stringFormatHelper')

module.exports = {
  async fetchAllGames (from, amount){ //Can recive limits for paginations
    const gamesList = await gameModel.find().skip(from).limit(amount)
    return gamesList 
  },
  async fetchGameById(id){
    let game = await gameModel.find({'name': normalizeString(id)})
    if(mongoose.Types.ObjectId.isValid(id) && !game.length){ //If recibe an id
      game = await gameModel.find({'_id': mongoose.Types.ObjectId(id)})
    }
    return game[0]
  },
  async fetchGamesByDeveloper (developer,from, amount){ //Can recive limits for paginations
    const gameList = await gameModel.find({'developer': normalizeString(developer)}).skip(from).limit(amount)
    return gameList 
  },
  async fetchGamesByCalification(from,amount,order){
    const gamesList = await gameModel.find().sort({"calification":order}).skip(from).limit(amount)
    return gamesList 
  },
  async createGame (data){
    const game = gameModel(data)
    const gameSaved = await game.save()
    await gameCategoryModel.updateMany(
      {_id: {$in: gameSaved.categories}}, //for all documents
      { $push: {games: gameSaved._id} } //removes the reference id of category
    )
    return gameSaved
  },
  async editGame(id, data){
    const gameEdited = gameModel.findByIdAndUpdate(id, data, {new: true})
    return gameEdited
  },
  async deleteGame(id){
    const game = (await gameModel.find({'_id': mongoose.Types.ObjectId(id)}))[0]
    await gameCategoryModel.updateMany(
      {_id: {$in: game.categories}}, //for all documents
      { $pull: {games: game._id} } //removes the reference id of category
    )
    await gameModel.findByIdAndDelete(mongoose.Types.ObjectId(id))
  },
  async deleteCategoryReferencesGame(id){
    await gameModel.updateMany(
      {}, //for all documents
      { $pull: {categories: id} } //removes the reference id of category
    )
  }
}