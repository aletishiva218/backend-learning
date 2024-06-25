module.exports=(req,res,next)=>{
    if(!req.query.age)
    {
        res.send("Please Enter your name")
    }
}