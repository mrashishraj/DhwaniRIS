const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const distSchema = new Schema({
    state_name:{
        type:String,
        required:true
    },
    district_name:{
        type: String,
        required: true,
    },
},{versionKey:false})

module.exports = mongoose.model("District", distSchema)