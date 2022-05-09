const express = require('express')
const router = express.Router()
const { validateActivity, validateExistenceActivity } = require('../middlewares/validations/activities')

const {
  deleteActivity,
  getActivity,
  getActivities,
  createActivity,
  updateActivity
} = require('../controllers/activityController')

router.get('/', getActivities)
router.get('/:id', getActivity)
router.post('/', [validateActivity], createActivity)
router.patch('/:id', [validateActivity, validateExistenceActivity], updateActivity)
router.delete('/:id', [validateExistenceActivity], deleteActivity)

module.exports = router
