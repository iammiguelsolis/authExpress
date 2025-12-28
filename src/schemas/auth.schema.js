import Joi from 'joi'

export const registerSchema = Joi.object({
  username: Joi.string().min(3).required().message({
    'any.required': 'El username es obligatorio',
    'string.empty': 'El username no puede estar vacío',
    'string.min': 'El username debe tener al menos 3 caracteres'
  }),

  password: Joi.string().min(6).required().message({
    'any.required': 'La contraseña es obligatoria',
    'string.empty': 'La contraseña no puede estar vacía',
    'string.min': 'El username debe tener al menos 6 caracteres'
  })
})
