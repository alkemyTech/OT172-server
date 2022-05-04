const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdminOrUserSelf, isAdmin } = require('../middlewares/checkRoles')
const { updateUser, getAllUsers, getUserById, deleteUser } = require('../controllers/usersController')

router.get('/', validateToken, isAdmin, getAllUsers)

router.get('/:id', validateToken, isAdmin, getUserById)

router.put('/:id', [validateToken, isAdminOrUserSelf], updateUser)

router.delete('/:id', validateToken, isAdmin, deleteUser)

module.exports = router
