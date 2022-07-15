const {gameClearData, gameClearDataList,getGameData} = require('../helpers/dataHelper')
const { fetchAllGames,fetchGameById, fetchGamesByDeveloper,fetchGamesByCalification, createGame, editGame, deleteGame} = require('../services/gameService')

module.exports ={
  async getAllGames(req, res, next){
    try{
      const {from, amount} = req.query
      const GamesList= await fetchAllGames(from,amount)
      const gameListClear = gameClearDataList(GamesList)
      res.status(200).json(gameListClear)
    }catch(err){
      next(err)
    }
  },
  async getGameById(req,res,next){
    try{
      const {id} = req.params
      
      const game = await fetchGameById(id)
      const gameClear = gameClearData(game)
      res.status(200).json(gameClear)
    }catch(err){
      next(err)
    }
  },
  async getGameByDeveloper(req,res,next){
    try{
      const {developer} = req.params
      const {from, amount} = req.query
      const gamesList= await fetchGamesByDeveloper(developer,from,amount)
      const gameListClear = gameClearDataList(gamesList)
      res.status(200).json(gameListClear)
    }catch(err){
      next(err)
    }
  },
  async getGamesByCalification(req,res,next){
    try{
      const {from, amount, order} = req.query //order recives -1 (desc)/1 (asc)
      const gamesList= await fetchGamesByCalification(from,amount,order)
      const gameListClear = gameClearDataList(gamesList)
      res.status(200).json(gameListClear)
    }catch(err){
      next(err)
    }
  },
  async postGame(req, res, next){
    try{
      const newData = getGameData(req.body)
      const newGame = await createGame(newData)
      const newGameClear = gameClearData(newGame)
      res.status(200).json(newGameClear)
    }catch(err){
      next(err)
    }
  },
  async editGame(req,res,next){
    try{
      const id = req.params.id
      const newData = getGameData(req.body)
      const newGame = await editGame(id,newData)
      const newGameClear= gameClearData(newGame)
      res.status(200).json(newGameClear)
    }catch(err){
      next(err)
    }
  },
  async removeGame(req,res,next){
    try{
      const id = req.params.id
      await deleteGame(id)
      res.status(200).json("Game deleted succesfully")
    }catch(err){
      next(err)
    }
  }
}