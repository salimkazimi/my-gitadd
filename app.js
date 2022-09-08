var express = require('express')
var app = express()
var path = require('path')
var expresslayout =require('express-ejs-layouts')


var indexRouter= require('./routes/index')


app.set('views', path.join(__dirname, 'views'))

app.set('view engine','ejs' )
app.set('layout','./layouts/mainlayout')

app.use(express.static(path.join(__dirname, 'public')))
app.use(expresslayout)

app.set(express.urlencoded({extended:false}))
app.set(express.json())

app.use('/',indexRouter)



app.listen(3000)
module.exports=app