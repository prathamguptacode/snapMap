import 'dotenv/config'
import env from './config/env.js'
import express, { type Request, type Response } from 'express'
import errorHandler from './middleware/errorHandler.js'
import mongoose from 'mongoose'
const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world welcome to snapMap' })
})

app.use(errorHandler)
const port = 8080;
mongoose.connect(env.DB_URL).then(() => console.log("Connected to DB")).catch(() => console.log("DB CRASHED SOS"))
app.listen(port, () => console.log(`Server on port ${port}`))
