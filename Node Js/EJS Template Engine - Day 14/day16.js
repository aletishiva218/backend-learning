const express=require("express")
const app=express()
const route=express.Router();
const reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Please enter your age")
    }
    else if(req.query.age<18)
    {
        resp.send("You are not eligible for accessing this website")
    }
    else
    {
        next();
    }
}
route.use(reqFilter)
app.get("",(req,res)=>{
    res.send("Welcome to Home Page")
})
route.get("/about",(req,res)=>{
    res.send("Welcome to About Page")
})
route.get("/contact",(req,res)=>{
    res.send("Welcome to Contact Page")
})
app.use(route)
app.listen(4000)