const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/checkRoles')
const { validateData } = require('../middlewares/validations')
const { createMemberSchema } = require('../middlewares/validations/members')
const { getMembers, addMember } = require('../controllers/membersController')

router.use([validateToken, isAdmin])

router.get('/', getMembers)
router.post('/', [validateData(createMemberSchema)], addMember)

module.exports = router
