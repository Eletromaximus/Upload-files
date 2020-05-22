"use strict";
var routes = require('express').Router();
routes.get('/', function (req, res) {
    return res.json();
});
module.exports = routes;
