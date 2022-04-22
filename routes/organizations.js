const express = require('express')
const router = express.Router()
const {
  validatedOrganization
} = require('../middlewares/validations/organization')
const postOrganizationController = require('../controllers/organizationController')

router.post('/', [validatedOrganization], postOrganizationController.createOrganization)

module.exports = router
