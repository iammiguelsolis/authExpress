import UserReporsitory from '../repository/user.reporsitory.js'
import { NotFoundError } from '../errors/app.error.js'

export default class UserService {
  static async listUsers () {
    const users = await UserReporsitory.getAllUsers()

    if (!users) {
      throw new NotFoundError('Usuarios no encontrados')
    }

    return users
  }

  static async getId (username) {
    const user = await UserReporsitory.getIdByUsername(username)
    if (!user) {
      throw new NotFoundError('Id no encontrado')
    }
    return user
  }
}
