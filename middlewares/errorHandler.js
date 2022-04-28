// const createError = require('http-errors')
// const { isHttpError } = createError

module.exports = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // const isCustomError = isHttpError(err)
  res.status(err.status || 500)
  res.json({
    ok: false,
    message: err.message || 'Internal server error'
  })
}
