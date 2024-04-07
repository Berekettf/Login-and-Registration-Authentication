const mongoose = require("mongoose")


const signSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String,
})
module.exports = mongoose.model('sign', signSchema);