const express = require('express')
const router = express.Router()
const { validateActivity } = require('../middlewares/validations/activities')

const {
  createActivity,
  updateActivity
} = require('../controllers/activityController')

router.post('/', [validateActivity], createActivity)
router.put('/:id', [validateActivity], updateActivity)

module.exports = router
