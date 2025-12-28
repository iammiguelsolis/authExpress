import expres from 'express'
import AuthController from '../controllers/auth.controller.js'
import { validateBody } from '../middlewares/validate.middleware.js'
import { registerSchema } from '../schemas/auth.schema.js'

const router = expres.Router()

router.post('/register', validateBody(registerSchema), AuthController.create)
router.post('/login', validateBody(registerSchema), AuthController.login)

export default router
