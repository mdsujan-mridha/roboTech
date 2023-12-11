const mongoose = require("mongoose");

const database = (module.exports = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.lnxcffr.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Database connection successfully 🚀🚀')
    } catch (error) {
        console.log(error);
        console.log("❌❌Database connection error❌❌");
    }
});


module.exports = database;