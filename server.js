// dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');

// parse application/json
app.use(bodyParser.json());

// connect to mlab
const dbConn = require('./config/keys').mongoURI;

//routes
// app.get('/', (req, res, next) => {
// 	res.send('index.html');
// });
app.use('/services', require('./routes/api/services'));

//mongoose
mongoose.connect(dbConn, (err) => {
	if (err) {
		console.log('Error connecting to database', err);
	} else {
		console.log('Connected to database!');
	}
});

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
	app.get;
}

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// port 5000
app.listen(process.env.PORT || 5000, () => console.log('Listening on http://localhost:5000'));
