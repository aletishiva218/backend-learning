const express = require("express")
const bodyParser = require("body-parser");
const app = express()
let productid;
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs")
const PORT = 3000
let productData;
const productsData = [
    {
        id:"1",
        imgURL:"https://m.media-amazon.com/images/I/71nvo2MHezL._AC_SL1500_.jpg",
        name:"Laptop",
        price:"Rs. 1000",
        specifications:"This Laptop has 512GB Storage and 1TB expandable"
    },
    {
        id:"2",
        imgURL:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61LuTKQUDwL._SX679_.jpg",
        name:"Headphone",
        price:"Rs. 500",
        specifications:"It is high rate"
    },
    {
        id:"3",
        imgURL:"https://5.imimg.com/data5/SELLER/Default/2022/5/SK/MZ/ZH/27761699/nikon-d5600-dslr-camera.jpg",
        name:"DSLR Camera",
        price:"Rs. 900",
        specifications:"It is high rate"
    },
    {
        id:"4",
        imgURL:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRg8UvkKUzhgYDuO9wl_-DYWY9n835QlFUn7eull7iCDY_bh2TvdZ-4u5P-ldL--6v9idb3CDEJ8xM4NYYwts5Zfhu2tLBzrO7x2T5gvUXh26X2tu6FCdmC8w&usqp=CAE",
        name:"I phone",
        price:"Rs.1,500",
        specifications:"It is high rate"
    }
]
app.get("/",(req,res)=>{
    res.render("products",{productsData})
})
app.post("/product",(req,res)=>{
    productData =  productsData[Number.parseInt(req.body.id)-1];
    res.redirect("/product");
})
app.get("/product",(req,res)=>{
    res.render("product",{productData})
})
app.listen(PORT,()=>{
    console.log(`Server is started at port ${PORT}`)
})