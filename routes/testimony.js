var express = require("express");
var router = express.Router();
const {
  validatedTestimony,
} = require("../middlewares/validations/testimonyValidations");
const postTestimonyController = require("../controllers/testimonyController");

router.get("/", function (req, res, next) {
  res.send("respond with a testimonial");
});

router.post("/", [validatedTestimony], postTestimonyController.postTestimony);

module.exports = router;
