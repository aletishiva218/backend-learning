import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.set("view engine","ejs");
app.get("/home",(req,res)=>{
    res.render("index")
})
app.listen(PORT,()=>{
    console.log("Server is running at port ",PORT)
})