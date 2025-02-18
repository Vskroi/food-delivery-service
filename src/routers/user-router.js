import express from 'express'

import { getLogin } from '../controller/login/get-login.js';
import { postLogin} from '../controller/login/post-login.js';
import { deleteUsers } from '../controller/users/get-delete.js';
import { postUsers } from '../controller/users/get-post.js';
import { putUsers } from '../controller/users/get-put.js';
import { getUsers } from '../controller/users/get-users.js';



export const userRouter = express.Router();
export const loginRouter = express.Router();

userRouter.get("/", getUsers)
userRouter.post("/", postUsers)
userRouter.put("/" , putUsers)
userRouter.delete("/" , deleteUsers)
loginRouter.get("/", getLogin)
loginRouter.post("/", postLogin)