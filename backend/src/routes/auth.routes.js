const express = require('express');
const controller = require('../controllers/auth.controller');

const router = express.Router();

Router.post('/register', controller.register);
Router.post('/login', controller.login);

module.exports = router;