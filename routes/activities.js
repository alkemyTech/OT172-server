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
const { hasImage } = require('../middlewares/validations/image')

router.get('/', getActivities)
router.get('/:id', getActivity)
router.post('/', [validateActivity, hasImage], createActivity)
router.patch('/:id', [validateActivity, validateExistenceActivity, hasImage], updateActivity)
router.delete('/:id', [validateExistenceActivity], deleteActivity)

module.exports = router
