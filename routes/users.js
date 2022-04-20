const express = require("express");
const router = express.Router();
// const verifyToken = require('../middlewares/verifyToken')
const {verifyToken} = require('../auth/jwt')
const { updateUser } = require('../controllers/usersController')
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.put('/:id', [verifyToken], updateUser);


module.exports = router;
