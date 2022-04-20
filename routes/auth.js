const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {validateLogin} = require('../middlewares/validations/auth')

router.post('/login', [validateLogin], authController.login);

module.exports = router;
