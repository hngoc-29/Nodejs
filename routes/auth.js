const router = require('express').Router();
const authController = require('../controllers/authControllers');

router.post('/register',authController.registerUser);

module.exports = router;