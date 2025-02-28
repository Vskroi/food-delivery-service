import { Router } from "express";
import { CreateUser } from "../controllers/users/CreateUser.controllers.js";
import { deleteUsers } from "../controllers/users/DeleteUser.controllers.js";
import { getUsers } from "../controllers/users/GetUser.controllers.js";
import { updateUser } from "../controllers/users/UpdateUser.controllers.js";

export const CreateUserRouter = Router();
CreateUserRouter.post("/", CreateUser);
CreateUserRouter.delete("/", deleteUsers);
CreateUserRouter.get("/", getUsers);
CreateUserRouter.put("/", updateUser);
