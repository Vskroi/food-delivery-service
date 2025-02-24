import express from "express";
import cors from "cors";
import { DB } from "./controllers/mongo.js";

import { adminRouter } from "./routers/admin-router.js";

const connectDb = DB;

connectDb();

const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.use("/users", adminRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
