"use strict";
var morgan = require("morgan");
var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(morgan('dev'));
app.use(require("./routes"));
app.listen(3000);
