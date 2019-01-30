// dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer')
const exphbs = require('express-handlebars')



// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// connect to mlab
const dbConn = require('./config/keys').mongoURI;

//routes

app.get('/', (req, res, next) => {
	res.send('<h1>team4everaintclever</h1>');
});
app.use('/services', require('./routes/api/services'));
app.use('/quotes', require('./routes/api/quotes'))

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

//View engine App
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/test', (req,res) => {
    res.render('contact')
})

// app.post('/test', (req,res) => {
// 	console.log("intest")
// 	const output = `
// 		<p>You have a new contact request</p>
// 		<h3>Contact Details</h3>
// 		<ul>
// 			<li>Name: ${req.body.name}</li>
// 			<li>Address: ${req.body.address}</li>
// 			<li>Suburb: ${req.body.suburb}</li>
// 			<li>Email: ${req.body.email}</li>
// 			<li>Phone: ${req.body.phone}</li>
// 		</ul>
// 		<h3>Message</h3>
// 		<p>${req.body.message}</p>
// 	`
// 	let transporter = nodemailer.createTransport({
// 		host: "smtp-mail.outlook.com",
// 		port: 587,
// 		secure: false, // true for 465, false for other ports
// 		auth: {
// 		  user: 'beththeboo94@hotmail.com', // generated ethereal user
// 		  pass: 'Boovic94' // generated ethereal password
// 		},
// 		tls: {
// 			rejectUnauthorized: false
// 		}
// 	  });
	
// 	  // setup email data with unicode symbols
// 	  let mailOptions = {
// 		from: '"Test" , <beththeboo94@hotmail.com>', // sender address
// 		to: "mark.conanan@gmail.com", // list of receivers
// 		subject: "Hey sexy", // Subject line
// 		text: "I'm here for you", // plain text body
// 		html: output // html body
// 	  };
	
// 	  // send mail with defined transport object
// 	  transporter.sendMail(mailOptions, (error, info) => {
// 		  if (error) {
// 			  return console.log(error)
// 		  }
// 		  console.log('Message sent: %s', info.messageID)
// 		  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
// 		  res.render('contact', {msg: 'Email has been sent'})
// 		  })
		  
// 	}
	
// )
// port 5000
app.listen(process.env.PORT || 5000, () => console.log('Listening on http://localhost:5000'));

