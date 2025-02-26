import express from "express";
import cors from "cors";

import dotenv from  "dotenv"
import { adminRouter } from "./routers/admin-router.js";
import { CreateUserRouter } from "./routers/users-router.js";

import mongoose from "mongoose";

dotenv.config()
  const uri = process.env.DATABASE_CONNECTION_URL
    ;
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error!", error);
  }


const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.use("/admin", adminRouter);
app.use('/ceateUser' , CreateUserRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
