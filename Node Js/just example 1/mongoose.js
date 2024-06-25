const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0/my-data")
const employeeSchema = mongoose.Schema({
    name:String,
    age:Number,
    department:String
})
const employeeModel = mongoose.model("employee",employeeSchema)
// let readData = async () => {
//     let response = await employeeModel.find()
//     return response;
// }

// let insertData = async (data) => {
//     let response = await employeeModel.create(data)
//     return response;
// }
module.exports = employeeModel;