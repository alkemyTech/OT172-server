const express = require('express')
const router = express.Router()
const { validateToken } = require('../middlewares/auth')
const { isAdminOrUserSelf } = require('../middlewares/checkRoles')
const { updateUser } = require('../controllers/usersController')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.put('/:id', [validateToken, isAdminOrUserSelf], updateUser)

module.exports = router
