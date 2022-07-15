const {movieClearData, movieClearDataList,getMovieData} = require('../helpers/dataHelper')
const { fetchAllMovies,fetchMovieById, fetchMoviesByDirector,fetchMoviesByCalification,fetchMoviesByTime, createMovie, editMovie, deleteMovie} = require('../services/movieService')
module.exports ={
  async getAllMovies(req, res, next){
    try{
      const {from, amount} = req.query
      const MoviesList= await fetchAllMovies(from,amount)
      const movieListClear = movieClearDataList(MoviesList)
      res.status(200).json(movieListClear)
    }catch(err){
      next(err)
    }
  },
  async getMovieById(req,res,next){
    try{
      const {id} = req.params
      
      const movie = await fetchMovieById(id)
      const movieClear = movieClearData(movie)
      res.status(200).json(movieClear)
    }catch(err){
      next(err)
    }
  },
  async getMovieByDirector(req,res,next){
    try{
      const {director} = req.params
      const {from, amount} = req.query
      const moviesList= await fetchMoviesByDirector(director,from,amount)
      const movieListClear = movieClearDataList(moviesList)
      res.status(200).json(movieListClear)
    }catch(err){
      next(err)
    }
  },
  async getMoviesByTime(req,res,next){
    try{
      const {from, amount, order} = req.query //order receives -1 (desc)/1 (asc)
      const moviesList= await fetchMoviesByTime(from,amount,order)
      const movieListClear = movieClearDataList(moviesList)
      res.status(200).json(movieListClear)
    }catch(err){
      next(err)
    }
  },
  async getMoviesByCalification(req,res,next){
    try{
      const {from, amount, order} = req.query //order recives -1 (desc)/1 (asc)
      const moviesList= await fetchMoviesByCalification(from,amount,order)
      const movieListClear = movieClearDataList(moviesList)
      res.status(200).json(movieListClear)
    }catch(err){
      next(err)
    }
  },
      //name,calification,plataformLinks,director,duration,categories
  async postMovie(req, res, next){
    try{
      const newData = getMovieData(req.body)
      const newMovie = await createMovie(newData)
      const newMovieClear = movieClearData(newMovie)
      res.status(200).json(newMovieClear)
    }catch(err){
      next(err)
    }
  },
  async editMovie(req,res,next){
    try{
      const id = req.params.id
      const newData = getMovieData(req.body)
      const newMovie = await editMovie(id,newData)
      const newMovieClear= movieClearData(newMovie)
      res.status(200).json(newMovieClear)
    }catch(err){
      next(err)
    }
  },
  async removeMovie(req,res,next){
    try{
      const id = req.params.id
      await deleteMovie(id)
      res.status(200).json("Movie deleted succesfully")
    }catch(err){
      next(err)
    }
  }
}