const { Router, response } = require('express')
var express = require('express')
var router = express.Router()
var registModel = require('../models/register');



router.get('/', function(req,res,next){
    registModel.find(function(err,response){
        res.render('./employee/employee',{employeeData:response})
    })
})
router.get('/delete/:id',function(req,res,next){
    registModel.findOneAndDelete({_id:req.params.id},()=>{
        res. redirect('/employee')
    })
})


router.get('/myeditform/:id', function(req,res,next) {
    registModel.findOne({_id: req.params.id},(err,response)=>{
        res.render('./employee/editform', {myeditData:response, layout: './employee/editform'})
    })
})
router.post('/edit', function(req,res,next){
    registModel.findByIdAndUpdate({_id: req.body.id},{username:req.body.username, email:req.body.email,password:req.body.password}, ()=>{
        res.redirect('/employee')
    })
    
    
})
module.exports=router;
