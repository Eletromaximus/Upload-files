"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
//const mongoose = require('mongoose');
var app = express_1.default();
/*mongoose.connect('mongodb://localhost:27017/upload', {
    useNewUrlParser: true,
})*/
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(morgan_1.default('dev'));
app.get('/', function (req, res) {
    return res.send('Hello World 1');
});
app.use(require("./routes"));
app.listen(3000);
