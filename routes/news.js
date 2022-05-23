const express = require('express')
const router = express.Router()
const { validateNew } = require('../middlewares/validations/news')
const entriesController = require('../controllers/entriesController')
const { createNewsSchema } = require('../middlewares/validations/schemas')
const { isAdmin } = require('../middlewares/checkRoles')
const { validateToken } = require('../middlewares/auth')
const { validateData, validateExistenceNew } = require('../middlewares/dataValidator')
const { getNewByIdSchema, createNewSchema } = require('../schemas/news')
const { hasImage } = require('../middlewares/validations/image')

router.get('/', entriesController.getAllNews)
router.get('/:id', [validateExistenceNew, validateData(getNewByIdSchema, 'params')], entriesController.getNewById)
router.delete('/:id', [validateToken, isAdmin, validateExistenceNew], entriesController.deleteNew)

router.patch('/:id', [validateToken, validateData(createNewSchema, 'body'), validateExistenceNew, hasImage], entriesController.updateEntrie)
router.post('/', [validateData(createNewSchema, 'body'), hasImage, validateToken], entriesController.createNew)

module.exports = router
