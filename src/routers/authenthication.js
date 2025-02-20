import fs from "fs"
import express from "express"



export const autthenticationRouter = express.Router();
const loginUser = (req , res ) => {
const {email} = req.body;
const rawUserdata = fs.readFileSync("scr/db/login.json")
const user = JSON.parse(rawUserdata).find((data) => data.email === email)
res.status(200).json({
    success: true,
    user : user,
})
}
const validateSignUpInput = async (req , res , next) => {
    const {email, password } = req.body
    if(!email){
        res.status(400).json({error: "bad Request",messege:"Password Requird"});
    }
    else if (!password) {
        res.status(400).json({error:"Bad Request", messege: "Password Requird"})
    }else{
        next()
    }
}
const validateLoginInput = async (req , res , next) => {
    const {email, password } = req.body
    if(!email){
        res.status(400).json({error: "bad Request",messege:"Password Requird"});
    }
    else if (!password) {
        res.status(400).json({error:"Bad Request", messege: "Password Requird"})
    }else{
        const rawUserdata =fs.readFileSync("src/db/login.json");
        const users = rawUserdata.find((data) => data === email)
        if(!users){
            res.status(400).json({error: "Bad request" , messege : "User not found"});
        
        }else{
            const isPasswordMatching = await bcrypt.compare(password , users.password)
            if(!isPasswordMatching){
                res.status(400).json({error:"Bad Request" , messege: "Password not matching"})
            }else{
                next()
        
   
    }
        }
    }
}
autthenticationRouter.post("/" ,validateLoginInput ,loginUser)

/* autthenticationRouter.post("/" ,validateSignUpInput ,postLogin) */
autthenticationRouter.get("/",(req , res) => {
    console.log(req)
    res.send("this is working")
} )