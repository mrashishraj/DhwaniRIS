const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    sex:{
        type: String,
        required: true,
    },
    date_of_birth:{
        type:String,
        required:true
    },
    father_name:{
        type:String,
        required:true
    },
    mother_name:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    dist:{
        type:String,
        required:true,
    }
},{versionKey:false})

module.exports = mongoose.model("child", ChildSchema)