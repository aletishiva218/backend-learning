const EventEmitter = require("events")
const event = new EventEmitter()

//Creating a function with name "PrintMarks"
event.on("PrintMarks",(name)=>{
    marks = {
        "Sharadha":70,
        "Pranay": 67,
        "Kumar":88
    }
    if(name==undefined)
    console.log(marks)
else
    console.log(marks[name])
})

//Calling function
event.emit("PrintMarks")
//Calling once more with name "Pranay"
event.emit("PrintMarks","Pranay")