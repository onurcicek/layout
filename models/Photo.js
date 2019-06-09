var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var Img=new Schema({

    filename:String,
    fileway:String

});


module.exports=mongoose.model('uploadeds',Img);