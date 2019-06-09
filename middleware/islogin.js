const islogin =  (req, res, next) => {
    const islogin = false;

    if (islogin) {
        next();
    } else {
        res.send("lütfen Giriş Yapınız");
    }


};


module.exports=islogin;