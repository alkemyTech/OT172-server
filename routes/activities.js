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
const { validateToken } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/checkRoles')

router.get('/', getActivities)
router.get('/:id', getActivity)

router.use([validateToken, isAdmin])

router.delete('/:id', [validateExistenceActivity], deleteActivity)
router.post('/', [validateActivity, hasImage], createActivity)
router.patch('/:id', [validateActivity, validateExistenceActivity, hasImage], updateActivity)

module.exports = router
