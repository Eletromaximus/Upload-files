"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer = require('multer');
var path = require('path');
var crypto_1 = __importDefault(require("crypto"));
module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: function (req, file, cb) {
            crypto_1.default.randomBytes(16, function (err, hash) {
                if (err)
                    cb(err);
                var fileName = hash.toString('hex') + "-" + file.originalname;
                cb(null, fileName);
            });
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: function (req, file, cb) {
        var allowwedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];
        if (allowwedMimes.includes(file.mimetypes)) {
            cb(null, true);
        }
        else {
            cb(new Error("invalid file type."));
        }
    }
};
