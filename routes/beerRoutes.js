'use strict';
var express = require('express');
var request = require("request");
var jwt = require('express-jwt');
var mongoose = require('mongoose');
var router = express.Router();
var Beer = mongoose.model('Beer');
var BreweryDb = require("brewerydb-node");
var brewdb = new BreweryDb(process.env.brewdb_key);
var auth = jwt({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
});
router.get("/beer", function (req, res, next) {
    brewdb.search.beers({ q: req.query.name }, function (err, data) {
        res.send(data);
    });
});
router.get("/:id", function (req, res, next) {
    console.log();
    request("http://api.brewerydb.com/v2/beer/" + req.params.id + "/breweries?key=" + process.env.brewdb_key, function (err, response, body, data) {
        res.send(response.body);
    });
});
router.post('/', function (req, res, next) {
    var newBeer = new Beer(req.body);
    newBeer.save(function (err, beer) {
        if (err)
            return next(err);
        res.send(beer);
    });
});
module.exports = router;
