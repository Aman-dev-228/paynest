const express = require('express');
const { CreateAccount, GetAccount } = require('../controllers/userController');
const router = express.Router();

router.post('/createAccount', CreateAccount);
router.get('/getUser', GetAccount)

module.exports = router;