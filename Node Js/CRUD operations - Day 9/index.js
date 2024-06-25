const fs=require("fs")
const option=process.argv[2]
if(option=="create")
{
    const filename=process.argv[3];
    const filedata=process.argv[4];
    fs.writeFileSync(filename,filedata);
    console.log(`File Created:\nName:${filename}\nData:${filedata}`)
}
else if(option=="update")
{
    const filename=process.argv[3];
    const filedata=process.argv[4];
    fs.appendFile(filename,filedata,(err)=>{
        if(!err)
        console.log(`File Updated:\nName:${filename}\nContent Added:${filedata}`)
    });
}
else if(option=="delete")
{
    const filename=process.argv[3];
    fs.unlinkSync(filename)
    console.log(`File Deleted:\nName:${filename}`)
}
else if(option=="read")
{
    const filename=process.argv[3];
    console.log(fs.readFileSync(filename,"utf8"))
}
else
{
    console.log("Invalid Option")
}