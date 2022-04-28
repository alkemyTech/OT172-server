const express = require('express')
const router = express.Router()
const {
  validatedOrganization, validateExistenceOrganization
} = require('../middlewares/validations/organization')
const postOrganizationController = require('../controllers/organizationController')

router.get('/:id', [validateExistenceOrganization], postOrganizationController.getOrganization)
router.post('/', [validatedOrganization], postOrganizationController.createOrganization)
router.put('/:id', [validatedOrganization, validateExistenceOrganization], postOrganizationController.updateOrganization)

module.exports = router
