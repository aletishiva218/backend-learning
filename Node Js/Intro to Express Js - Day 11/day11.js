const express=require("express")
const app=express();
app.get("",(req,res)=>{
    res.send("Hello <h1>"+req.query.name+"</h1>")
})
app.get("/about",(req,res)=>{
    res.send("I am from about page")
})
app.get("/shop",(req,res)=>{
    res.send("I am from shop page")
})
app.listen(4000)
