var mongoose = require('mongoose')

var regSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profilePic:{
        type: String
    }
})
var regmodel = mongoose.model('Employee',regSchema)
module.exports = regmodel