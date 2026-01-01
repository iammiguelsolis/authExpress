import AuthService from '../services/auth.service.js'

export default class AuthController {
  static async create (req, res, next) {
    try {
      const result = await AuthService.create(req.body)
      res.status(201).json({
        message: 'Usuario creado correctamente',
        data: result
      })
    } catch (err) {
      next(err)
    }
  }

  static async login (req, res, next) {
    try {
      const result = await AuthService.login(req.body)
      res.status(200).json({
        message: 'Login Exitoso',
        token: result
      })
    } catch (err) {
      next(err)
    }
  }
}
