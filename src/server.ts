import express from 'express'
import { routes } from './index.routes'

const app = express()

app.use(express.json())

app.use(routes)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Runing on port ${port}`))
