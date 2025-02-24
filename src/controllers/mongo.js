import mongoose from "mongoose";

export const DB = async () => {
  const uri =
    "mongodb+srv://turbold093:IT0e4SJZjBzYBB9x@cluster0.6acyo.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error!", error);
  }
};

 