import expres from 'express'
import AuthController from '../controllers/auth.controller.js'

const router = expres.Router()

router.post('/register', AuthController.create)

export default router
