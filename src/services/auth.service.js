import UserReporsitory from '../repository/user.reporsitory.js'
import bcrypt from 'bcrypt'

export default class AuthService {
  static async create ({ username, password }) {
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = UserReporsitory.findByUsername(username)

    if (existingUser) {
      throw new Error('Usuario ya existente')
    }

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
