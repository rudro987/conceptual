import { Request, Response } from 'express'
import { Movie } from './movie.model'
import { MovieServices } from './movie.services'

const createMovie = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.createMovie(req.body)
    res.status(200).json({
      success: true,
      message: 'Movie created successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Movie not saved into db',
      error: error,
    })
  }
}

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.getAllMovies()
    res.status(200).json({
      success: true,
      message: 'Movie fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Movie not fetched',
      error: error,
    })
  }
}

const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await MovieServices.getMovieBySlug(slug)
    res.status(200).json({
      success: true,
      message: 'Movie fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Movie not fetched',
      error: error,
    })
  }
}

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
}
