const express = require("express")
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
const productsData = [
    {
        id:"001",
        name: "Laptop",
        price: "Rs. 500"
    },
    {
        id:"002",
        name: "Headphone",
        price: "Rs. 130"
    },
    {
        id:"003",
        name: "DSLR Camera",
        price: "Rs. 900"
    }
]
const PORT = 3000
app.get("/",(req,res)=>{
    res.render("index",{homepage:true})
})
app.get("/products",(req,res)=>{
    res.render("products",{productsData,productspage:true})
})
app.get("/signup",(req,res)=>{
    res.render("signup",{signuppage:true})
})
app.get("/login",(req,res)=>{
    res.render("login",{loginpage:true})
})
app.get("/product",(req,res)=>{
    res.send(productsData)
})
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
