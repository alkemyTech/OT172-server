const express = require('express');
const router = express.Router();
const { validateActivity } = require("../middlewares/validations/activities");

const { createActivity } = require("../controllers/activityController");

router.post('/', [validateActivity], createActivity);

module.exports = router;