const express = require('express');
const Quote = require('../../models/Quote');
// Quote model to be created
const router = express.Router();
const mailer = require('../../middleware/mailer')

//Post /quotes (C)
router.post('/', (req, res) => {
	Quote.create(req.body)
		.then((quote) => {
			mailer(req,res);
			res.send(quote);
		})
		.catch((error) => res.sendStatus(500).json({ error: error.message }));
});

// GET /quotes (R)
router.get('/', (req, res) => {
	Quote.find()
		.then((quotes) => res.json(quotes))
		.catch((error) => res.sendStatus(500).json({ error: error.message }));
});

module.exports = router