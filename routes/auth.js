const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')
const {
  validateLogin,
  validateData
} = require('../middlewares/auth')
const { createUserSchema } = require('../middlewares/validations/schemas')

router.post(
  '/register',
  [validateData(createUserSchema)],
  authController.register
)
router.post('/login', [validateLogin], authController.login)

module.exports = router
