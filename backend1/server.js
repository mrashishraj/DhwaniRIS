const express = require("express")
const { required } = require("joi")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const app = express()
const dotenv = require("dotenv")
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.ATLAS_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(err){
        console.log('Error connection to the database')
    }
    else{
        console.log("Database connected successfully")
    }
})

app.use("/",authRoute)

app.listen(5000,()=>{
    console.log("The server is up and running")
})

