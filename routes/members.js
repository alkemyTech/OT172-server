const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/checkRoles')
const { validateData } = require('../middlewares/auth')
const { createMemberSchema, updateMemberSchema, validateExistenceMember } = require('../middlewares/validations/members')
const { getMembers, getMember, addMember, updateMember, deleteMember } = require('../controllers/membersController')
const { hasImage } = require('../middlewares/validations/image')

router.get('/', getMembers)
router.get('/:id', [validateExistenceMember], getMember)

router.use([validateToken, isAdmin])

router.delete('/:id', [validateExistenceMember], deleteMember)
router.post('/', [validateData(createMemberSchema), hasImage], addMember)
router.patch('/:id', [validateData(updateMemberSchema), hasImage], updateMember)

module.exports = router
