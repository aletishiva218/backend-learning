const express=require("express")
const app=express();

app.set("view engine","ejs")
app.get("",(req,res)=>{
    const user={
        name:"Shiva Aleti",
        age:19,
        contact:7738377006,
        email:"aletishiva218@gmail.com"
    }
    const user1={
        name:"Saikumar Aleti",
        age:22,
        contact:7208431405,
        email:"aletishiva218@gmail.com"
    }
    res.render("userdetails",{user,user1})
})
app.listen(4000)