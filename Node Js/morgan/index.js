const morgan = require("morgan")
const express = require("express")
const app = express();
const helmet = require("helmet")
// app.use(morgan("tiny"))
morgan.token('host',(req,res)=>{
    return req.hostname;
})
app.use(morgan(':host:url:method:status'))
app.use(helmet());
app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(3000)