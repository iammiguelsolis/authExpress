import AuthService from '../services/auth.service.js'

export default class AuthController {
  static async create (req, res) {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({
        message: 'Datos incompletos'
      })
    }

    try {
      const result = await AuthService.create(username, password)

      return res.status(200).json(result)
    } catch (err) {
      return res.status(404).json(err.message)
    }
  }
}
