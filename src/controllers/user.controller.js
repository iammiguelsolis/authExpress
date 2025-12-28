import UserService from '../services/user.service.js'

export default class UserController {
  static async getAll (req, res) {
    try {
      const users = await UserService.listUsers()
      res.status(200).json(users)
    } catch (err) {
      res.status(500).json({
        error: err
      })
    }
  }

  static async getByUserName (req, res) {
    try {
      const username = req.params.username
      const user = await UserService.getId(username)
      res.status(200).json(user)
    } catch (err) {
      res.status(404).json({
        error: err
      })
    }
  }
}
