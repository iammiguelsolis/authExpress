import UserReporsitory from '../repository/user.reporsitory.js'
import bcrypt from 'bcrypt'
import { ConflictError } from '../errors/app.error.js'

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
      mesasge: 'Usuario creado',
      newuser
    }
  }
}
