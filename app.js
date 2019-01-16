// dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// connect to mlabs


//routes
app.get('/', function(req, res, next){
    res.send("<h1>team4everaintclever</h1>");
})

// port 3001
app.listen(process.env.PORT || 3001, () => console.log('Listening on http://localhost:3001'))