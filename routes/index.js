
const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const usersAuth = require('./users');
const categoriesRouter = require('./categories')

router.use('/auth', authRouter);
router.use('/users', usersAuth);
router.use('/users', usersAuth);
router.use('/categories', categoriesRouter)

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
