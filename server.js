// dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// connect to mlabs
const db = require('./config/keys').mongoURI;

//Bodyparser Middleware

app.use(bodyParser.json());

//Routes
app.get('/', function(req, res, next) {
	res.send('<h1>team4everaintclever</h1>');
});

//mongoose
// mongoose.connect(db, (err) => {
// 	if (err) {
// 		console.log('Error connecting to database', err);
// 	} else {
// 		console.log('Connected to database!');
// 	}
// });

mongoose.connect(db).then(() => console.log('MongoDb Connected...')).catch((err) => console.log(err));

// port 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
