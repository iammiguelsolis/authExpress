import UserReporsitory from '../repository/user.reporsitory.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config.js'

import { ConflictError, BadRequestError } from '../errors/app.error.js'

export default class AuthService {
  static async create ({ username, password }) {
    const existingUser = await UserReporsitory.findByUsername(username)

    if (existingUser) {
      throw new ConflictError('Usuario ya existente')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newuser = await UserReporsitory.create({
      username,
      password: hashedPassword
    })

    return {
      message: 'Usuario creado',
      newuser
    }
  }

  static async login ({ username, password }) {
    const existingUser = await UserReporsitory.findByUsername(username)

    if (!existingUser) {
      throw new BadRequestError('Credenciales Inválidas')
    }

    const isValid = await bcrypt.compare(password, existingUser.password)

    if (!isValid) {
      throw new BadRequestError('Credenciales Inválidas')
    }

    const token = jwt.sign(
      {
        id: existingUser.id,
        username: existingUser.username
      },
      config.jwt.secret,
      {
        expiresIn: config.jwt.expires_in
      }
    )

    return {
      token
    }
  }
}
