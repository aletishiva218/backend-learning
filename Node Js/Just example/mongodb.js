const { MongoClient } = require("mongodb")
const client = new MongoClient("mongodb://0.0.0.0")
let connectDB = async () => {
    let result = await client.connect()
    let db = result.db("my-data")
    let collection = db.collection("employee")
    // let response = await collection.find({}).toArray()
    // console.log(response)
    return collection;
}

module.exports = {
    find: async (obj) => {
        if (typeof obj == "object") {
            let collection = await connectDB();
            return collection.find(obj).toArray();
        }
        else
            console.log("Please enter a object")
    },
    insertOne: async (obj) => {
        if (typeof obj == "object") {
            let collection = await connectDB();
            return collection.insertOne(obj);
        }
        else
            console.log("Please enter a object")
    },
    insertMany: async (obj) => {
        if (Array.isArray(obj)) {
            let collection = await connectDB();
            return collection.insertMany(obj);
        }
        else
            console.log("Please enter a collection of objects as a array")
    },
    updateOne:async (condObj, updOjb) => {
        if (typeof condObj == "object" && typeof updOjb == "object") {
                let collection = await connectDB();
                return collection.updateOne(condObj, { $set: updOjb });
        }
        else
            console.log("Please enter a object")
    },
    deleteOne:async (condObj) => {
        if (typeof condObj == "object") {
                let collection = await connectDB();
                return collection.deleteOne(condObj);
        }
        else
            console.log("Please enter a object")
    },
}