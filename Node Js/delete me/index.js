import bodyParser from "body-parser";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000;
const app = express()
let isAdult = false;
const isAdultFun = (req,res,next) => {
    if(req.body.age>=40)
    isAdult = true;
next();
}
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/Website/register.html")
})
app.post("/register",isAdultFun,(req,res)=>{
    if(isAdult)
    res.sendFile(__dirname+"/Website/home.html")
    else
    res.redirect("/register")
})
app.listen(port,()=>{
    console.log(`Server is started at port ${port}`)
})