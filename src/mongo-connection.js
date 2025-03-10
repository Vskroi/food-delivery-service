import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.DATABASE_CONNECTION_URL;
export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error!", error);
  }
};
