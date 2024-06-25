const express=require("express")
const path=require("path")
const location=path.join(__dirname,"public")
const app=express();
app.use(express.static(location))
app.listen(4000)