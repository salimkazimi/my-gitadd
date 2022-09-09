var express = require('express');
var router = express.Router();
var multer = require('multer')
const regmodel = require('../models/register');

router.get('/', function(req,res,next){
    res.render('./register/register', {layout: './register/register'})
})

var profilePicStorage = multer.diskStorage({
    destination: (req,file,cb)=> {cb(null, './public/profilePic' )},
    filename: (req,file,cb)=>{cb(null, file.originalname)}
});
var uploadProPic = multer({storage: profilePicStorage});

//rout register post
router.post('/sentMS',uploadProPic.single('picture'),function(req,res,nexr){
    let addnew = new regmodel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        profilePic: req.file.filename

    })
    addnew.save(()=>{
        res.redirect('/login')
    })
})

module.exports = router;