import UserReporsitory from '../repository/user.reporsitory.js'

export default class UserService {
  static async listUsers () {
    return await UserReporsitory.getAllUsers()
  }

  static async getId (username) {
    const user = await UserReporsitory.getIdByUsername(username)
    if (!user) {
      throw new Error('Id no encontrado')
    }
    return user
  }
}
