const express = require('express');
const Router = express.Router();
// Middleware - modify or use request/response object data
const mailer = require('../middleware/mailer');
// const clientResponse = require('../middleware/res/clientResponse')();
// controllers - transport data to/from dB
Router.post('/freequote', mailer, (res) => {
    console.log('Your expression of interest has been submitted successfully.')
})

module.exports = Router;