import express from "express";
import joi from "@hapi/joi";
import bodyParser from "body-parser";
import multer from "multer";

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(multer().array())
const validationMiddleware = (req,res,next) => {
    const schema = joi.object().keys({
        name:joi.string().min(3).max(20).required(),
        role:joi.string().valid("User","Admin")
    }).options({stripUnknown:true})
    const {error} = schema.validate(req.body,{abortEarly:false});
    if(error) return res.status(400).json({error:error})
        return res.json({message:req.body})
    next()
}
app.post("/api/user/create",validationMiddleware,(req,res)=>{
    res.json({message:req.body})
})
app.listen(3000,()=>{
    console.log("Server is starting at port 3000")
})