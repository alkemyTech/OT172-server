
const express = require('express')
const router = express.Router()
const authRouter = require('./auth')
const usersAuth = require('./users')
const categoriesRouter = require('./categories')
const activitiesRouter = require('./activities')
const testimonyRouter = require('./testimony')
const membersRouter = require('./members')

router.use('/auth', authRouter)
router.use('/users', usersAuth)
router.use('/categories', categoriesRouter)
router.use('/testimonials', testimonyRouter)
router.use('/activities', activitiesRouter)
router.use('/members', membersRouter)

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' })
// })

module.exports = router
