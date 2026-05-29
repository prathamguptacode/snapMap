import express, { type Request, type Response } from 'express'
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world welcome to snapMap' })
})

const port = 5000;
app.listen(port, () => console.log(`Server on port ${port}`))
