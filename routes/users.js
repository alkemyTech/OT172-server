const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdminOrUserSelf, isAdmin } = require('../middlewares/checkRoles')
const { updateUser, getAllUsers, getUserById, deleteUser } = require('../controllers/usersController')
const { validateExistenceUser } = require('../middlewares/validations/users')

router.get('/', validateToken, isAdmin, getAllUsers)

router.get('/:id', [validateExistenceUser, validateToken, isAdmin], getUserById)

router.patch('/:id', [validateToken, isAdminOrUserSelf], updateUser)

router.delete('/:id', validateToken, isAdmin, deleteUser)

module.exports = router
