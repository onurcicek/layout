var express = require('express');
var app = express();

var mongoose = require("mongoose");
   
   
   mongoose.connect('mongodb://localhost:27017/photo', { useNewUrlParser: true })
    .then(connect => console.log("Mongoose:Connected"))
    .catch(err => console.log("Bağlantı Hatası"));
