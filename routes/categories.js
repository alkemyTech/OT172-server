const express = require('express')

const router = express.Router()

const categoriesController = require('../controllers/categoriesController')
const { validateData } = require('../middlewares/validations/auth')
const { createCategorySchema } = require('../middlewares/validations/schemas')

router.post(
  '/',
  [validateData(createCategorySchema)],
  categoriesController.create
)

module.exports = router
