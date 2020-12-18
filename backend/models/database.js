const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loginSchema = new Schema({
    id:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

});

mongoose.model.exports = mongoose.model("Login",loginSchema);
