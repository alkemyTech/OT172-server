const express = require('express')
const router = express.Router()
const {
  validatedTestimony, validateExistenceTestimony
} = require('../middlewares/validations/testimony')
const postTestimonyController = require('../controllers/testimonyController')

router.get('/', function (req, res, next) {
  res.send('respond with a testimonial')
})

router.post('/', [validatedTestimony], postTestimonyController.postTestimony)

router.delete('/:id',[validateExistenceTestimony], postTestimonyController.deleteTestimony)

module.exports = router
