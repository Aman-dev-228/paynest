const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connected to MongoDB successfully")

        })
        .catch((err)=>{
            console.log("Error connecting to MongoDB", err)
        })
        
    } catch (error) {
        console.log("Error connecting to MongoDB", error)

    }
    
}

module.exports = connectToDb;