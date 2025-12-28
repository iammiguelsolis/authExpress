export const errorHandler = (err, req, res, next) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: 'error',
      code: err.statusCode,
      message: err.message
    })
  }

  console.error(err)

  res.status(500).json({
    status: 'error',
    code: 500,
    message: 'Error interno del servidor'
  })
}
