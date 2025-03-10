import cors from "cors";
import express from "express";
import { connectToMongoDB } from "./mongo-connection.js";
import { AuthenticationRouter } from "./routers/authintication-router.js";
import { userRouter } from "./routers/users-router.js";
/* 
import { adminRouter } from "./routers/admin-router.js";
import { CreateUserRouter } from "./routers/users-router.js"; */

// import { foodRouter } from "./routers/food-router.js";

const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());
connectToMongoDB();
// app.use("/admin", adminRouter);
// app.use("/users", CreateUserRouter);
// app.use("/food", foodRouter);
// app.use("/category");
app.use('/user' , AuthenticationRouter)
app.use('/user' , userRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
