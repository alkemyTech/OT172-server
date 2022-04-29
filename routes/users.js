const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdminOrUserSelf, isAdmin } = require('../middlewares/checkRoles')
const { updateUser, getAllUsers } = require('../controllers/usersController')

router.get('/', validateToken, isAdmin, getAllUsers)

router.put('/:id', [validateToken, isAdminOrUserSelf], updateUser)

module.exports = router
