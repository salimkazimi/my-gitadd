var express = require('express')
var app = express()
var path = require('path')
var expresslayout =require('express-ejs-layouts')
require('dotenv').config()

var indexRouter= require('./routes/index')
var loginRouter= require('./routes/login')
var registerRouter= require('./routes/register')
var employeeRouter= require('./routes/employee')

app.set('layout register', false)

//database require
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hpDB');
var regmodel = require('./models/register');
var registmodel = require('./models/employee');

app.set('views', path.join(__dirname, 'views'))

app.set('view engine','ejs' )
app.set('layout','./layouts/mainlayout')

app.use(express.static(path.join(__dirname, 'public')))
app.use(expresslayout)

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/',indexRouter)
app.use('/login',loginRouter)
app.use('/register',registerRouter)
app.use('/employee',employeeRouter)


app.listen(process.env.PORT || 3000)
module.exports=app