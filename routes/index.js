var express = require('express');
var router = express.Router();
var Model=require("../models/Photo");
const multer = require('multer');
const upload = multer({ dest: __dirname + '/public/images' });
const fs = require("fs");
const path = require("path");
const fetch = require('node-fetch');
var bodyparser = require("body-parser");
//const permissionPhotos=require("../middleware/permissionPhotos");
router.use(bodyparser.json());


// const Bluebird = require('bluebird');
// fetch.Promise = Bluebird;

/* GET home page. */


// fs.writeFile("database/photos.html", JSON.stringify(data), "utf8", function (err) {
//   if (err) throw err;
//   console.log("created");
// });

// console.log(data);


var limitless;

var startless;

router.get('/',function(req,res,next){

  Model.find({}, null, { skip: startless, limit: limitless , sort: { _id: - 1 } }, function (err, data) {

    if (err) {
      console.log(err);
    } else {
      res.render('index', { Bedirhan: data });

    }

  });

});


router.get('/getphoto', function (req, res, next) {


  Model.find({}, null, { skip: startless, limit: limitless, sort: { _id: - 1 } }, function (err, data) {

    if (err) {
      console.log(err);
    } else {
      res.send({Bedirhan: data});

    }

  });

});









router.get('/load', function (req, res, next) {

  Model.find({},function (err, data){
   res.render('gallery',{Bedirhan:data});
  }).sort({ _id: -1 });;
    
});
  


//https://stackoverflow.com/questions/15772394/how-to-upload-display-and-save-images-using-node-js-and-express
router.post('/load', upload.single('photo'), function (req, res, next) {
  const tempPath = req.file.path;
  
  const imgname ="imgbirdpx"+Math.random().toString(36).substring(7, 16);
  const newWay = "/images/" + imgname;
  const targetPath = path.join(__dirname, `../public/images/${imgname}.jpg`);

  if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);

      res
        .status(200)
        .contentType("text/plain")
        .redirect("load");
      
        
    });


    const model = new Model({

      filename: imgname,
      fileway: newWay


    });

    model.save()
      .then(() => console.log("Veritabanına kayıt işlemi başarı ile tamamlandı"))
    




  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }

  

});

router.post('/', function (req, res, next) {

if(req.body.limit){

  limitless = req.body.limit;
  startless = req.body.start;

  return res.send({redirect:'/index'});

}else{

  console.log("an error-----------");
}



});




module.exports = router;


