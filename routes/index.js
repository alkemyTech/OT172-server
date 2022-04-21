
const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const usersAuth = require('./users');

router.use('/auth', authRouter);
router.use('/users', usersAuth);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
