const express = require('express')
const { postMail } = require('../controllers/mailController')

const router = express.Router()


router.post(
  '/', postMail
)




module.exports = router
