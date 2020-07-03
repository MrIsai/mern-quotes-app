const router = require("express").Router();
let Quote = require("../models/quote.model");

router.route("/").get((req, res) => {
    Quote.find()
        .then((quotes) => res.json(quotes))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const quote = req.body.quote;
    const author = req.body.author;
    const rating = req.body.rating;
    const likes = req.body.likes; /* Value between 0 y 1 */

    const newQuote = new Quote({ quote, author, rating, likes });

    newQuote
        .save()
        .then(() => res.json("Quote added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:author").get((req, res) => {
    console.log('Finding author:',req.params.author);
    Quote.find({ author: req.params.author })
        .then((quotes) => res.json(quotes))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
