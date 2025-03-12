import { Router } from "express";
import { validateEmailAndPassword } from "../middleware/Login/validate-email-and-password.js";
import { createUser } from "../controllers/users/CreateUser.controllers.js";

import { validateUserEmail } from "../middleware/Login/validate-user-email.js";
import { loginUser } from "../controllers/users/postUser.controllers.js";



export const AuthenticationRouter = Router();

AuthenticationRouter.post(
  "/sign-up",
  validateEmailAndPassword,
  validateUserEmail,
  createUser
);
AuthenticationRouter.get("/login", validateEmailAndPassword, loginUser);
AuthenticationRouter.post("/login", loginUser)
