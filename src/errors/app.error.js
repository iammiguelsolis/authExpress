export class AppError extends Error {
  constructor (message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true
  }
}

export class BadRequestError extends AppError {
  constructor (message = 'Solicitud inválida') {
    super(message, 400)
  }
}

export class UnauthorizedError extends AppError {
  constructor (message = 'No autorizado') {
    super(message, 401)
  }
}

export class ForbiddenError extends AppError {
  constructor (message = 'Prohibido') {
    super(message, 403)
  }
}

export class NotFoundError extends AppError {
  constructor (message = 'Recurso no encontrado') {
    super(message, 404)
  }
}

export class ConflictError extends AppError {
  constructor (message = 'Conflicto de datos') {
    super(message, 409)
  }
}
