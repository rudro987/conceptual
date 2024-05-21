import { Request, Response } from "express"
import { Movie } from "./movie.model"
import { MovieServices } from "./movie.services"

const createMovie = async (req: Request, res: Response) => {
    try {
      const result = await MovieServices.createMovie(req.body);
      res.status(201).json({
        success: true,
        message: 'Movie created successfully',
        data: result,
      })
    } catch (error) {
      res.status(401).json({
        success: false,
        message: 'Movie not saved into db',
        error: error,
      })
    }
  };

  export const MovieControllers = {
    createMovie,
  }