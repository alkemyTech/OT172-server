const express = require('express')
const router = express.Router()
const authRouter = require('./auth')
const usersAuth = require('./users')
const categoriesRouter = require('./categories')
const activitiesRouter = require('./activities')
const testimonyRouter = require('./testimony')
const membersRouter = require('./members')
const organizationRouter = require('./organizations')

router.use('/auth', authRouter)
router.use('/users', usersAuth)
router.use('/categories', categoriesRouter)
router.use('/testimonials', testimonyRouter)
router.use('/activities', activitiesRouter)
router.use('/members', membersRouter)
router.use('/organization', organizationRouter)

module.exports = router
