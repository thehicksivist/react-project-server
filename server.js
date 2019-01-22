// dependencies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('./models/user');

// connect to mlab


//routes
app.get('/', function(req, res, next){
    res.send("<h1>team4everaintclever</h1>");
})

//mongoose
// mongoose.connect(dbConn, (err) => {
//     if (err) {
//       console.log('Error connecting to database', err)
//     } else {
//       console.log('Connected to database!')
//     }
// })

// port 5000
app.listen(process.env.PORT || 5000, () => console.log('Listening on http://localhost:5000'))