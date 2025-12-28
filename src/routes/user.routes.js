import express from 'express'
import UserController from '../controllers/user.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/:username', UserController.getByUserName)
router.get('/', authMiddleware, (req, res) => {
  res.json({
    mesagge: 'Perfil del usuario',
    user: req.user
  })
})

export default router
