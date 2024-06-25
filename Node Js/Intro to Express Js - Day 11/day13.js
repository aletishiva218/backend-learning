const express=require("express")
const path=require("path")
const location=path.join(__dirname,"public")
const app=express();
app.get("",(req,res)=>{
    res.sendFile(location+"/index.html")
})
app.get("/about",(req,res)=>{
    res.sendFile(location+"/about.html")
})
app.listen(4000)