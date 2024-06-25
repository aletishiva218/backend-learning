const express = require("express")
const bodyParser = require("body-parser")
const path = require("path").join(__dirname);
const app =express()
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.sendFile(path+"/login.html");
})
app.post("/welcome",(req,res)=>{
    const username = req.body.name;
    if(req.body.name=="shiva")
   {
    res.render("welcome",{username});
   }
    else
    res.redirect("/")
})
app.listen(3000)