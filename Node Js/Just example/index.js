// const connection=require("./db")
// const express=require("express");
// const app= express();
// app.post("",(req,resp)=>{
//     let res =async () => {
//         let res = await connection.find();
//         return res;
//     }
//     res().then((res)=>{
//        resp.send(res)
//     })
// })
// app.listen(4000)
const mongodb = require("./mongodb")
const express = require("express")
const mongdb = require("mongodb")
const app = express();
app.use(express.json())
app.get("/",(req,res)=>{
    mongodb.find(req.body).then((response)=>{
        res.send(response)
     })
})
app.post("/",(req,res)=>{
 mongodb.find(req.body).then((response)=>{
    res.send(response)
 })
})
app.put("/:key",(req,res)=>{
    mongodb.updateOne(req.body,{department:req.params.key}).then((response)=>{
       res.send(response)
    }) 
   })
app.delete("/:id",(req,res)=>{
   mongodb.deleteOne({_id: new mongdb.ObjectId(req.params.id)}).then((response)=>{
      res.send(response)
   })
})
app.listen(4000)