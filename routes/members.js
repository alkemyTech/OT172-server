const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/checkRoles')
const { validateData } = require('../middlewares/auth')
const { createMemberSchema, updateMemberSchema } = require('../middlewares/validations/members')
const { getMembers, addMember, updateMember } = require('../controllers/membersController')

router.use([validateToken, isAdmin])

router.get('/', getMembers)
router.post('/', [validateData(createMemberSchema)], addMember)
router.put('/:id', [validateData(updateMemberSchema)], updateMember)
module.exports = router
