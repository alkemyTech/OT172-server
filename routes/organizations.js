const express = require('express')
const router = express.Router()
const { validatedOrganization, validateExistenceOrganization } = require('../middlewares/validations/organization')
const postOrganizationController = require('../controllers/organizationController')
const { hasImage } = require('../middlewares/validations/image')

router.get('/:id', [validateExistenceOrganization], postOrganizationController.getOrganization)
router.post('/', [validatedOrganization], postOrganizationController.createOrganization)
router.patch('/:id', [validatedOrganization, validateExistenceOrganization, hasImage], postOrganizationController.updateOrganization)

module.exports = router
