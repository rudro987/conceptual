import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { MovieRoutes } from './modules/movies/movie.route'

const app: Application = express()

//parsers

app.use(express.json())
app.use(cors())

app.use('/api/movies', MovieRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send("Hello From Tanvir's Server!")
})

export default app
