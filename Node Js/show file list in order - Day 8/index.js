const fs=require("fs")
const path=require("path")
const dirPath=path.join(__dirname,'files')
for(let i=0;i<5;i++)
{
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,"Hello Shiva bhai")
}
fs.readdir(dirPath,(err,files)=>{
    console.log(files)
    Array.from(files).forEach((file)=>{
        console.log(file)
    })
})