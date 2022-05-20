const { findNew } = require('../../services/entriesService')

const validateNew = schema => {
  return (req, res, next) => {
    const result = schema.validate(req.body)
    result.error
      ? (console.log(`New have errors: [${result.error.message}]`),
        res.status(422).json(result.error.message))
      : (console.log('Success validation of new'), next())
  }
}

const validateExistenceNew = async (req, res, next) => {
  const { id } = req.params
  const newFound = await findNew(id)
  if (!newFound) {
    return res.status(404).send({ message: 'The requested resource was not found.' })
  }
  next()
}

module.exports = { validateNew, validateExistenceNew }
