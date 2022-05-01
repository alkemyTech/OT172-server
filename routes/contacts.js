const express = require('express')
const router = express.Router()

const { validateToken } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/checkRoles')

const { getContacts } = require('../controllers/contactsController')

router.get('/', [validateToken, isAdmin], getContacts)

module.exports = router
