module.exports = (err, req, res, next) => {
  if (req.app.get('env') === 'development') {
    const infoRouteError = req.method + ' ' + req.url
    console.log({ [infoRouteError]: err.message })
  }
  next(err)
}
