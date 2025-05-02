const express = require('express');
const { CreateAccount } = require('../controllers/userController');
const router = express.Router();

router.post('/createAccount', CreateAccount);

module.exports = router;