const fs=require("fs")
if(process.argv[2]=="add")
{
    const filename=process.argv[3]
    const filedata=process.argv[4]
    fs.writeFileSync(filename,filedata)
}
else if(process.argv[2]=="delete")
{
    const filename=process.argv[3]
    fs.unlinkSync(filename)
}
else
{
    console.log("Invalid Option")
}