import jwt from 'jsonwebtoken'
import config from '../../config.js'
import { UnauthorizedError } from '../errors/app.error.js'

export function authMiddleware (req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new UnauthorizedError('Token requerido')
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, config.jwt.secret)
    req.user = decoded
    next()
  } catch {
    throw new UnauthorizedError('Token invalido')
  }
}
