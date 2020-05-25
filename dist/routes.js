"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var routes = express_1.Router();
var multerConfig = require("./config/multer");
routes.post('/posts', multer_1.default(multerConfig).single("file"), function (req, res) {
    console.log(req.file);
    return res.json({ hello: "Rocket" });
});
module.exports = routes;
