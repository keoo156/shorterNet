const mongoose = require("mongoose")
const Schema = mongoose.Schema
const randomSchema = new Schema({
    origin:{
        type: String,
        require: true
    },
    random:{
        type:String,
    }
})