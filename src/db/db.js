const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    isConnected = false;
  }
};

module.exports = connectDB;
