import express from 'express'
import bcrypt from "bcrypt"

import { postLogin} from '../controller/login/post-login.js';

const testMiddleware = async (req, res, next) => {
    console. log ("hello this is middleware working");
    const cryptPassword = bcrypt.hashSync("test", saltRounds) ;
    const isPasswordMatching = await bcrypt.compare("test", cryptPassword) ;
    console. log (cryptPassword);
    console. log("this is password matching", isPasswordMatching) ;
    console. log (req.body) ;
    if (!isPasswordMatching) {
    res.status(400).json({error:"Bad Request" , messege: "something went wrong" });
    }
     else {
    next()}
    }

export const userRouter = express.Router();
export const loginRouter = express.Router();

/* userRouter.get("/", getUsers) */
userRouter.post("/", testMiddleware,  postLogin)
/* userRouter.put("/" , putUsers)
userRouter.delete("/" , deleteUsers)
loginRouter.get("/", getLogin) */
/* loginRouter.post("/", postLogin) */
/* loginRouter.post("/login" ,validateSignUpInput ,loginUser) */