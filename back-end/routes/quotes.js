const router = require('express').Router();
let Quote = require('../models/quote.model');

router.route('/').get((req, res) => {
    Quote.find()
        .then(quotes => res.json(quotes))
        .catch(err => res.status(400).json('Error: '+err))
});

router.route('/add').post((req, res) => {
    const quote = req.body.quote;
    const author = req.body.author;
    const username = req.body.username;

    const newQuote = new Quote({quote, author, username});

    newQuote.save()
        .then(() => res.json('Quote added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;