const express=require("express");
const router=express.Router();

const islogin = require('../middleware/islogin');// middlware getirdik.



router.get("/",islogin,function(req,res,next){ //islogin şartı burada belirtildi.

res.send("tamamdır");

});

module.exports = router;