import { Router } from "express";
import { validateEmailAndPassword } from "../middleware/Login/validate-email-and-password.js";
import { createUser } from "../controllers/users/CreateUser.controllers.js";

import { validateUserEmail } from "../middleware/Login/validate-user-email.js";
import { deleteUser } from "../controllers/users/DeleteUser.controllers.js";
import { updateUser } from "../controllers/users/UpdateUser.controllers.js";
import { loginUser } from "../controllers/users/GetUserLogincontrollers.js";

export const AuthenticationRouter = Router();

AuthenticationRouter.post(
  "/",
  validateEmailAndPassword,
  validateUserEmail,
  createUser
);
AuthenticationRouter.get("/", validateEmailAndPassword, loginUser);
