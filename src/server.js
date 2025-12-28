import express from 'express'
import morgan from 'morgan'

import userRouters from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/user', userRouters)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API DE MINIPROYECTO. ¡Bievenido!',
    version: 'v1'
  })
})

app.use((req, res) => {
  res.status(404).json({
    error: `Ruta no encontrada: ${req.originalUrl}`
  })
})

export default app
