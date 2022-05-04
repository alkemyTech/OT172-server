const express = require('express')
const router = express.Router()
const {
  validatedTestimony, validateExistenceTestimony
} = require('../middlewares/validations/testimony')
const testimonyController = require('../controllers/testimonyController')
const { validateData } = require('../middlewares/dataValidator')
const { testimonyParamsSchema, testimonyPutSchema } = require('../schemas/testimony')
const { validateToken } = require('../middlewares/auth')

router.get('/', function (req, res, next) {
  res.send('respond with a testimonial')
})

router.post('/', [validatedTestimony], testimonyController.postTestimony)

router.delete('/:id', [validateExistenceTestimony], testimonyController.deleteTestimony)

router.put('/:id', validateToken, validateData(testimonyParamsSchema, 'params'), validateData(testimonyPutSchema, 'body'), testimonyController.updateTestimony)

module.exports = router
