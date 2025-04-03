import cors from "cors";
import express from "express";
import { connectToMongoDB } from "./mongo-connection.js";
import { AuthenticationRouter } from "./routers/authintication-router.js";
import { userRouter } from "./routers/users-router.js";
import { foodRouter } from "./routers/food-router.js";
import { categoriesRouter } from "./routers/categories-router.js";
import { foodOrderRouter } from "./routers/food-order.router.js";
import { foodOrderItemRouter } from "./routers/food-order-items-router.js";
/* 
import { adminRouter } from "./routers/admin-router.js";
import { CreateUserRouter } from "./routers/users-router.js"; */

// import { foodRouter } from "./routers/food-router.js";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());
connectToMongoDB();
// app.use("/admin", adminRouter);
// app.use("/users", CreateUserRouter);
// app.use("/food", foodRouter);
// app.use("/category");
app.use('/user' , AuthenticationRouter)
app.use('/users' , userRouter)
app.use('/food' , foodRouter)
app.use('/categories' , categoriesRouter)
app.use('/foodOrder' ,foodOrderRouter)
app.use('/foodOrderItems', foodOrderItemRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
