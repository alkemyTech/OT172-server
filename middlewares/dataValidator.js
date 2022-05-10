// Added the property parameter to make more flexible the function
const validateData = (schema, property) => {
  return (req, res, next) => {
    console.log(req.body)
    const validation = schema.validate(req[property])
    if (!validation.error) {
      next()
    } else {
      validation.error.status = 400
      next(validation.error)
    }
  }
}

module.exports = {
  validateData
}
