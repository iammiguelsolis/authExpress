import { BadRequestError } from '../errors/app.error.js'

export const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false
    })

    if (error) {
      const messages = error.details.map(d => d.message)
      throw new BadRequestError(messages.join(', '))
    }

    req.body = value

    next()
  }
}
