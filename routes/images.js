const express = require('express')
const router = express.Router()

const { postImage, getImage } = require('../controllers/imageController')
const { validateToken } = require('../middlewares/auth')

router.post('/', validateToken, postImage)
router.get('/:id', validateToken, getImage)

module.exports = router
