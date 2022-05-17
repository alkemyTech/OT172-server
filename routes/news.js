const express = require('express')
const router = express.Router()
const { validateNew, validateExistenceNew } = require('../middlewares/validations/news')
const entriesController = require('../controllers/entriesController')
const { createNewsSchema } = require('../middlewares/validations/schemas')
const { isAdmin } = require('../middlewares/checkRoles')
const { validateToken } = require('../middlewares/auth')

const { validateData } = require('../middlewares/dataValidator')
const { getNewByIdSchema, createNewSchema } = require('../schemas/news')
const { hasImage } = require('../middlewares/validations/image')

router.get('/', validateToken, entriesController.getAllNews)
router.get('/:id', validateData(getNewByIdSchema, 'params'), validateToken, entriesController.getNewById)
// router.put("/:id", [validateNew(createNewsSchema)], entriesController.updateEntrie)//news is a subtype of entries
router.delete('/:id', [/*validateToken, isAdmin,*/ validateExistenceNew], entriesController.deleteNew)

//AGREGAR CHECKEO TOKEN CUANDO LLEGUE DESDE EL FRONT
router.patch('/:id',[validateData(createNewSchema, 'body'),validateExistenceNew, hasImage], entriesController.updateEntrie)
router.post('/', [validateData(createNewSchema, 'body'),hasImage], entriesController.createNew)

module.exports = router
