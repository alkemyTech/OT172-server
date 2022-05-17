const { findNew } = require("../services/entriesService")

// Added the property parameter to make more flexible the function
const validateData = (schema, property) => {
  return (req, res, next) => {
    const validation = schema.validate(req[property])
    if (!validation.error) {
      next()
    } else {
      validation.error.status = 400
      next(validation.error)
    }
  }
}

const validateExistenceNew = async (req, res, next) => {
  const { id } = req.params
  console.log(id)
  const newFound = await findNew(id)
  if (!newFound) {
    return res.status(404).send({ message: 'The requested resource was not found.' })
  }
  next()
}


module.exports = {
  validateData,
  validateExistenceNew
}
