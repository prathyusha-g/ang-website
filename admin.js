const mongoose = require('mongoose')

const Schema = mongoose.Schema
const adminSchema = new Schema({ 
    username : String, 
    email : String,
    password : String
})

module.exports = mongoose.model('admin',adminSchema,'admins')