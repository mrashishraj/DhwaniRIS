const { required } = require("joi")
const Joi = require("joi")


const registerValidation = (data)=>{
    const schema =Joi.object({
        name:Joi.string().min(2).required(),
        email:Joi.string().min(6).required(),
        password:Joi.string().min(6).required(),        
    })
    return schema.validate(data)
}

const loginValidation = (data)=>{
    const schema = Joi.object({
        email:Joi.string().min(6).required(),
        password:Joi.string().min(6).required(),
    })
    return schema.validate(data)
}

const stateValidation = (data)=>{
    const schema = Joi.object({
        state_name:Joi.string().min(2).required(),
    })
    return schema.validate(data)
}

const distValidation = (data)=>{
    const schema = Joi.object({
        state_name:Joi.string().min(2).required(),
        district_name:Joi.string().min(2).required(),
    })
    return schema.validate(data)
}

const childValidation = (data)=>{
    const schema = Joi.object({
        name:Joi.string().min(2).required(),
        sex:Joi.string().min(2).required(),
        date_of_birth:Joi.string().min(8).required(),
        father_name:Joi.string().min(2).required(),
        mother_name:Joi.string().min(2).required(),
        state:Joi.string().min(2).required(),
        dist:Joi.string().min(2).required(),
    })
}
module.exports = {
    registerValidation,
    loginValidation,
    stateValidation,
    distValidation,
    childValidation}