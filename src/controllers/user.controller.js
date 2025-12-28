import UserService from '../services/user.service.js'

export default class UserController {
  static async getAll (req, res, next) {
    try {
      const users = await UserService.listUsers()
      res.status(200).json({
        message: 'Usuarios encontrados',
        data: users
      })
    } catch (err) {
      next(err)
    }
  }

  static async getByUserName (req, res, next) {
    try {
      const username = req.params.username
      const user = await UserService.getId(username)
      res.status(200).json({
        message: 'Usuario encontrado',
        data: user
      })
    } catch (err) {
      next(err)
    }
  }
}
