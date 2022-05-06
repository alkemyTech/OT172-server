const express = require('express')

const router = express.Router()

const categoriesController = require('../controllers/categoriesController')
const { validateData } = require('../middlewares/auth')
const { createCategorySchema, validateExistenceCategory, validateCategoryInUse } = require('../middlewares/validations/schemas')

router.post(
  '/',
  [validateData(createCategorySchema)],
  categoriesController.create
)

router.put('/:id', [validateData(createCategorySchema), validateExistenceCategory], categoriesController.putCategory)

router.delete('/:id', [validateExistenceCategory, validateCategoryInUse], categoriesController.deleteCategory)

router.get(
  '/',
  categoriesController.getCategories
)

module.exports = router
