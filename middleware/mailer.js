
const nodemailer = require('nodemailer')

const mailer = (req,res) => {
	console.log("intest")
	const output = `
		<p>You have a new contact request</p>
		<h3>Contact Details</h3>
		<ul>
			<li>Name: ${req.body.name}</li>
			<li>Address: ${req.body.address}</li>
			<li>Suburb: ${req.body.suburb}</li>
			<li>Email: ${req.body.email}</li>
			<li>Phone: ${req.body.phone}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
	`
	let transporter = nodemailer.createTransport({
		host: "smtp-mail.outlook.com",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
		  user: 'beththeboo94@hotmail.com', // generated ethereal user
		  pass: 'Boovic94' // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	  });
	
	  // setup email data with unicode symbols
	  let mailOptions = {
		from: '"Test" , <beththeboo94@hotmail.com>', // sender address
		to: "mark.conanan@gmail.com", // list of receivers
		subject: "Hey sexy", // Subject line
		text: "I'm here for you", // plain text body
		html: output // html body
	  };
	
	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
		  if (error) {
			  return console.log(error)
		  }
		  console.log('Message sent: %s', info.messageID)
		  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
		  res.render('contact', {msg: 'Email has been sent'})
		  })
		  
	}
    
module.exports = mailer