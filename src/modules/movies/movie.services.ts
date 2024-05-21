import { TMovie } from './movie.interface'
import { Movie } from './movie.model'

const createMovie = async (payLoad: TMovie) => {
  //   const result = await Movie.create(payLoad)
  const result = new Movie(payLoad)
  const slug = result.createSlug(payLoad)
  result.slug = slug
  await result.save()
  return result
}

const getAllMovies = async () => {
  const result = await Movie.find()
  return result
}

const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug })
  return result
}

export const MovieServices = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
}
