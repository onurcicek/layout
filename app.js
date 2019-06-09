var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var mongoose=require("mongoose");
var bodyparser = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var path=require("path");
//const fetch = require('node-fetch');
//const Bluebird = require('bluebird');


 const dbase=require('./database/dbase');
 app.use(dbase,function(err,req,res,next){
 if(err){
   res.send(err);
 }
 });




// mongoose.connect('mongodb://localhost:27017/photo', { useNewUrlParser: true })
//   .then(connect => console.log("Mongoose:Connected"))
//   .catch(err => console.log("Bağlantı Hatası"));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }))


/**TÜM SAYFALAR İÇİN MİDDLEWARE ÖRNEĞİ */
//middleware sadece localhost:3000 sayfasına adresi yazıp girdiğimizde yada node app.js 


// app.use((req, res, next) => {
//   const islogin = true;

//   if (islogin) {
//     next();
//   } else {
//     res.send("lütfen Giriş Yapınız");
//   }
// });

/**SADECE BİR SAYFA İÇŞN ŞART KOŞARSAK */


// app.use('/profile', (req, res, next) => {
//   const islogin = false;

//   if (islogin) {
//     next();
//   } else {
//     res.send("lütfen Giriş Yapınız");
//   }


// });
//Çok önemli nokta kodlar yukardan aşağı okunduğu için öncelikle middlevare ler yukarda tanımlansınki şartlar sağlandıktan sonra aşağıdaki kotlar çalışmaya başlasın

//MİDDLEWARE KLASÖRÜNDEN REQUİRE EDİLME 

// const islogin=require('./middleware/islogin');// middlware getirdik.
// app.use(islogin);,



// bu middleware tüm sayfaları için require edilmiş diyelimki sadece profile sayfası için kullanacaksak 
//buradan kaldırıp profile sayfası içerisine gidip yapıştır. örnek var orada



app.use('/index', require('./routes/index'));






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
