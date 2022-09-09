var mongoose = require('mongoose')

var registSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
var registmodel=mongoose.model('employee',registSchema)
module.exports=registmodel