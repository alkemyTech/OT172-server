const { isHttpError } = require('http-errors')

module.exports = (err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  const isCustomError = isHttpError(err)
  res.status(isCustomError ? err.status : 500)
  res.json({
    ok: false,
    message: err.message
  })
}
