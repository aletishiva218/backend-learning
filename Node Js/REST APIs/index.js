import express from "express"
import axios from "axios"
import bodyParser from "body-parser";
const app = express()
const apiURL = "https://secrets-api.appbrewery.com/";
const PORT = 3000
const token = "8502d63d-3757-4f49-89a9-e2836773d1fa"
const config = {headers:{Authorization:`Bearer ${token}`}}
let data;
let response;
let body;
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index",{data})
})
app.post("/get-secret",async (req,res)=>{
   try{
    response = await axios.get(apiURL+`secrets/${req.body.id}`,config);
    data = JSON.stringify(response.data)
   }catch(err){
    console.log(err.message)
   }
    res.redirect("/")
})
app.post("/post-secret",async(req,res)=>{
    try{
        body = req.body;
        response = await axios.post(apiURL+`secrets/`,body,config)
        data = JSON.stringify(response.data);
    }catch(err){
        data = err.response.data.error;
        console.log(err.message)
    }
    res.redirect("/")
})
app.post("/put-secret",async(req,res)=>{
    try{
        body = req.body;
        response = await axios.put(apiURL+`secrets/${req.body.id}`,body,config)
        data = JSON.stringify(response.data);
    }catch(err){
        data = err.response.data.error;
    }
    res.redirect("/")
})
app.post("/patch-secret",async (req,res)=>{
    try{
        body = req.body;
        response = await axios.patch(apiURL+`secrets/${req.body.id}`,body,config)
        data = JSON.stringify(response.data);
    }catch(err){
        console.log(err.message)
    }
    res.redirect("/")
})
app.post("/delete-secret",(req,res)=>{
    
    res.redirect("/")
})
app.listen(PORT,()=>{
    console.log("Server is running at port",PORT)
})