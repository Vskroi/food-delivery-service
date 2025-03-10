import { Router } from "express";
import { validateEmailAndPassword } from "../middleware/validate-email-and-password.js";
import { createUser } from "../controllers/users/CreateUser.controllers.js";
import { loginUser } from "../controllers/users/GetUser.controllers.js";
import { validateUserEmail } from "../middleware/validate-user-email.js";
import { deleteUser } from "../controllers/users/DeleteUser.controllers.js";
import { updateUser } from "../controllers/users/UpdateUser.controllers.js";

export const AuthenticationRouter = Router();

AuthenticationRouter.post(
  "/sign-up",
  validateEmailAndPassword,
  validateUserEmail,
  createUser
);
AuthenticationRouter.get("/login", validateEmailAndPassword, loginUser);
