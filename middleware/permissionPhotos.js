const permission=(req,res,next)=>{

    var permissionphotos=false;
    if(permissionphotos){

        next();
    }else{

        res.send("izin verilemiyor.");
    }
}

module.exports = permission;