const express  = require("express");
const mongoose = require("mongoose");
const database = require("./models/database");
const dotenv = require("dotenv").config();

// dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.ATLAS_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
},(err)=>{
    if(err){
        console.log('Error connecting the database')
    }else{
        console.log('Database successfully connected')
    }
})



app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.listen(5000,()=>{
    console.log("The server is up and running")
})