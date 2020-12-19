const express = require("express")
const router = express.Router()
const User = require("../models/User")
const State = require("../models/State")
const Dist = require("../models/dist")
const Child = require("../models/Child")
const bcrypt = require("bcryptjs")
const {registerValidation,loginValidation} = require("../validation")
const { required } = require("joi")


router.post("/register",async(req,res)=>{
    const {error} = registerValidation(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    const emailExists = await User.findOne({email:req.body.email})
    if(emailExists){
        return res.status(400).send({message:"Email is already register",isLoading:false})
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )

    const user = new User({
        name:req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })

    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send({err});
    }
})

router.post("/login",async(req,res)=>{
    const {error} = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({email:req.body.email});
    if(!user){
        return res.status(400).send({message:"Invalid Username",isAuth:false,isLoading:false})
    }
    
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass){
        return res.status(400).send({message:"Invalid Password",isAuth:false,isLoading:false})
    }

    res.send({message:"Login Successfull",isAuth:true,isLoading:false})
})

router.post("/add_state",async(req,res)=>{
    const state = new State({
        state_name: req.body.state_name
    })

    try{
        const savedState = await state.save()
        res.send(savedState)   
    }catch(err){
        res.status(400).send(err)
    }

})

router.get("/state",(req,res)=>{
    State.find()
    .then((state)=>res.json(state))
    .catch((err)=>res.json(err))
})


router.post("/add_dist",async(req,res)=>{
    const dist = new Dist({
        state_name: req.body.state_name,
        district_name: req.body.district_name,
    })

    try{
        const savedDist = await dist.save()
        res.send(savedDist)   
    }catch(err){
        res.status(400).send(err)
    }

})

router.get("/dist",(req,res)=>{
    Dist.find()
    .then((dist)=>res.json(dist))
    .catch((err)=>res.json(err))
})


router.post("/add_child",async(req,res)=>{
    const child = new Child({
       name:req.body.name,
       sex:req.body.sex,
       date_of_birth:req.body.date_of_birth,
       father_name:req.body.father_name,
       mother_name:req.body.mother_name,
       state:req.body.state,
       dist:req.body.dist,
    })

    try{
        const savedChild = await child.save()
        res.send(savedChild)   
    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/child",(req,res)=>{
    Child.find()
    .then((child)=>res.json(child))
    .catch((err)=>res.json(err))
})

router.post("/logout",(req,res)=>{
    res.send({isAuth:false,isLoading:false,message:"logout Successfull"})
})


module.exports = router