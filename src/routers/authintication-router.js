import { Router } from "express";
import { validateEmailAndPassword } from "../middleware/Login/validate-email-and-password.js";
import { createUser } from "../controllers/users/CreateUser.controllers.js";

import { validateUserEmail } from "../middleware/Login/validate-user-email.js";

import { checkUserSigned } from "../middleware/Login/check-user-signed.js";
import { loginUser } from "../controllers/users/loginUser.controllers.js";



export const AuthenticationRouter = Router();

AuthenticationRouter.post(
  "/sign-up",
  validateEmailAndPassword,
  validateUserEmail,
  createUser
);
AuthenticationRouter.post("/login", validateEmailAndPassword, loginUser);


