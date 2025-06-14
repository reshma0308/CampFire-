const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

router.route('/register');

router.route('/login');

router.get('/logout' ,users.logout);

module.exports = router;
