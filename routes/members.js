const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/checkRoles')
const { validateData } = require('../middlewares/auth')
const { createMemberSchema, updateMemberSchema, validateExistenceMember } = require('../middlewares/validations/members')
const { getMembers, addMember, updateMember, deleteMember } = require('../controllers/membersController')

// router.use([validateToken, isAdmin])

router.get('/', getMembers)
router.post('/', [validateToken, isAdmin, validateData(createMemberSchema)], addMember)
router.patch('/:id', [validateToken, isAdmin, validateData(updateMemberSchema)], updateMember)
// router.delete('/:id', [validateToken, isAdmin, validateExistenceMember], deleteMember)
router.delete('/:id', deleteMember)

module.exports = router
