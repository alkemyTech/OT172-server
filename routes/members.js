const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/checkRoles')
const { getMembers } = require('../controllers/membersController')

router.use([validateToken, isAdmin])

router.get('/', getMembers)

module.exports = router
