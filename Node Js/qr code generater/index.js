import inquirer from "inquirer";
if("for simple qr code" =="generator")
{
    const fs = require("fs")
const qr = require("qr-image");
const qr_img = qr.image("https://shivaleti.netlify.app/")
qr_img.pipe(fs.createWriteStream("qr_code.png"))
}

/* To take prompt from the user */
if("input taking" == "from user")
{
inquirer.prompt([{"message":"Enter URL","name":"URL"}]).then((ans)=>{console.log(ans)}).catch((err)=>{console.log(err)})
}