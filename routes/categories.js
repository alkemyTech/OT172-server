const express = require('express')

const router = express.Router()

const categoriesController = require('../controllers/categoriesController')
const { validateData } = require('../middlewares/auth')
const { createCategorySchema } = require('../middlewares/validations/schemas')

router.post(
  '/',
  [validateData(createCategorySchema)],
  categoriesController.create
)

router.get(
  '/',
  categoriesController.getCategories
)

module.exports = router
