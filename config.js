import Joi from 'joi'
import 'dotenv/config'

const envVars = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
}

const schema = Joi.object({
  PORT: Joi.number().default(3000),

  DB_HOST: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PORT: Joi.number().required(),

  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('1h')
})

const { value, error } = schema.validate(envVars)

if (error) {
  throw new Error(`ENV ERROR: ${error.message}`)
}

export default {
  port: value.PORT,
  db: {
    host: value.DB_HOST,
    user: value.DB_USER,
    password: value.DB_PASSWORD,
    name: value.DB_NAME,
    port: value.DB_PORT
  },
  jwt: {
    secret: value.JWT_SECRET,
    expires_in: value.JWT_EXPIRES_IN
  }
}
