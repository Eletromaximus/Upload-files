import {Router} from "express";
import multer from "multer";

const routes = Router();
const multerConfig = require("./config/multer");

routes.post('/posts', multer(multerConfig).single("file"), (req, res) =>{
    console.log(req.file);
    
    return res.json({hello: "Rocket"});
});

module.exports = routes;