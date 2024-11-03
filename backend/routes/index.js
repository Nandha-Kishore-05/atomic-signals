// routes/v1/index.js
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/userController');

router.post('/login', loginUser);

module.exports = router;
