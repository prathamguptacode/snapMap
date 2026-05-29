import 'dotenv/config'
import env from './config/env'
import express, { type Request, type Response } from 'express'
import errorHandler from './middlewares/errorHandler'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())



app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world welcome to snapMap' })
})



app.use(errorHandler)


mongoose.connect(env.DB_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("DB CRASHED SOS", err))


app.listen(env.PORT, () => console.log(`Server on port ${env.PORT}`))
