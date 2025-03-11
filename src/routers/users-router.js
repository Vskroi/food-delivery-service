// get user by id
// delete user by id
// update user
// get all users
import { Router } from "express";
import { deleteUser } from "../controllers/users/DeleteUser.controllers.js";
import { updateUser } from "../controllers/users/UpdateUser.controllers.js";
import { validateUserId } from "../middleware/validate-user-id.js";
export const userRouter = Router();
userRouter.delete("/:id", validateUserId, deleteUser);
userRouter.put("/:id", validateUserId, updateUser);
