import express from 'express'
import registroRotas from './projects/router'

const app = express()

app.use(express.json())
registroRotas(app)

export default app