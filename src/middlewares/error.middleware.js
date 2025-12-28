export const errorHandler = (err, req, res, next) => {
  console.error(err)

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: 'error',
      code: err.statusCode,
      message: err.message
    })
  }

  res.status(500).json({
    status: 'error',
    code: 500,
    message: 'Error interno del servidor'
  })
}
