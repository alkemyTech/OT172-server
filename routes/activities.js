const express = require('express')
const router = express.Router()
const { validateActivity, validateExistenceActivity } = require('../middlewares/validations/activities')

const {
  getActivity,
  getActivities,
  createActivity,
  updateActivity
} = require('../controllers/activityController')

router.get('/', getActivities)
router.get('/:id', getActivity)
router.post('/', [validateActivity], createActivity)
router.patch('/:id', [validateActivity, validateExistenceActivity], updateActivity)

module.exports = router
