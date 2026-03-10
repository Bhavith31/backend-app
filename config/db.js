import mongoose from "mongoose";
import productModel from "../models/productModel.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URl);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

export default dbConnect;



