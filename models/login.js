var mongoose = require('mongoose')

var logSchema = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
var logmodel=mongoose.model('login',logSchema)
module.exports=logmodel