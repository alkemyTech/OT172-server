const express = require('express')
const router = express.Router()
const { validateActivity, validateExistenceActivity } = require('../middlewares/validations/activities')

const {
  createActivity,
  updateActivity
} = require('../controllers/activityController')

router.post('/', [validateActivity], createActivity)
router.put('/:id', [validateActivity, validateExistenceActivity], updateActivity)

module.exports = router
