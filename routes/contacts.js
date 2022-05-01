const express = require('express')
const router = express.Router()

const { validateToken, validateData } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/checkRoles')
const { postCreateContactSchema } = require('../schemas/contacts')

const { getContacts, addContact } = require('../controllers/contactsController')

router.get('/', [validateToken, isAdmin], getContacts)
router.post('/', [validateToken, validateData(postCreateContactSchema)], addContact)

module.exports = router
