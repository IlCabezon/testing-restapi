const mongoose = require("mongoose")
const config = require("../../config")

const dbConnect = async()=>{
    try {
        const db = await mongoose.connect(config.MONGO_URI)

        console.log(`Database connected at ${db.connection.name}`)
    }catch(err){
        console.log({
            message:"Error connecting DB",
            error:err
        })
    }
}

module.exports = dbConnect