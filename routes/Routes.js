const express = require('express');
const Router = express.Router();
const mailer = require('../middleware/mailer');

Router.post('/freequote', mailer, (res) => {
    console.log('Your expression of interest has been submitted successfully.')
})

module.exports = Router;