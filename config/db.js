const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        console.log("Connecting to:", process.env.CONNECTION_STRING); // Debugging line
        const dbConnect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${dbConnect.connection.host}`);
    } catch (err) {
        console.error("Database connection failed. Error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
