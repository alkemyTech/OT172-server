const express = require('express')
const router = express.Router()
const { validateNew, validateExistenceNew } = require('../middlewares/validations/news')
const entriesController = require('../controllers/entriesController')
const { createNewsSchema } = require('../middlewares/validations/schemas')
const { isAdmin } = require('../middlewares/checkRoles')
const { validateToken } = require('../middlewares/auth')

router.get('/', validateToken, isAdmin, entriesController.getAllNews)
// router.put("/:id", [validateNew(createNewsSchema)], entriesController.updateEntrie)//news is a subtype of entries
router.delete('/:id', [validateToken, isAdmin, validateExistenceNew], entriesController.deleteNew)
router.post('/', validateToken, entriesController.createNew)

module.exports = router
