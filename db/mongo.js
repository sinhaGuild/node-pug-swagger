require("colors");
const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    const connect = await mongoose.connect(url);
    if (connect) {
      console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.italic);
    }
  } catch (error) {
    console.log(`MongoDB connection failed with error: ${error}`.bgRed.italic);
    setTimeout(connectDB, 2000);
  }
};

module.exports = connectDB;
