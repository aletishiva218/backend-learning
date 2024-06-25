import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

// const dirPath = path.resolve("public")

const app = express()
app.set("view engine","ejs")
const server = http.createServer(app); //handle express
const io = new Server(server); //handle all http requests

app.get("/",(req,res)=>{
    // const indexPath = path.join(dirPath,"index.html")
    res.render("index")
})

io.on("connection",(socket)=>{
    // console.log("A new connection is established",socket.id)
    socket.on("user-message",(message)=>{
        io.emit("message",message) //give to every body when a message emits
    })
})

server.listen(3000,()=>{
    console.log("Server is started at port no. 3000")
})