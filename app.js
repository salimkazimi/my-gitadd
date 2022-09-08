var express = require('express')
var app = express()
var path = require('path')
var expresslayout =require('express-ejs-layouts')
require('dotenv').config()

var indexRouter= require('./routes/index')

var bodyparser = require('body-parser')
var cookieparser = require('cookie-parser')

//database require
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hpDB');
var logmodel=require('./models/login')
app.set('views', path.join(__dirname, 'views'))

app.set('view engine','ejs' )
app.set('layout','./layouts/mainlayout')

app.use(express.static(path.join(__dirname, 'public')))
app.use(expresslayout)

app.use(express.urlencoded({extended:false}))
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieparser)

app.use('/',indexRouter)



app.listen(process.env.PORT || 3000)
module.exports=app