/* import fs from 'fs'
export const getLogin =  (req, res) => {
    const { email, Password } = req.body; 
    const rawUserdata = fs.readFileSync('src/db/login.json')
    const users = JSON.parse(rawUserdata)


    const checkUserNameIndex = users.findIndex(u => u.email === email)
    const userPasswordCheck = users[checkUserNameIndex].Password.includes(Password)

    
    if (userPasswordCheck) {
        return res.send(`Thanks for logging in!`);
    } else {
        return res.send('Invalid username or password');
    }
}; */import fs from "fs"
import express from "express"

export const autthenticationRouter = express.Router();
const loginUser = (req , res ) => {
const {email} = req.body;
const rawUserdata = fs.readFileSync('scr/db/login.json')
const user = JSON.parse(rawUserdata).find((data) => data.email === email)
res.status(200).json({
    success: true,
    user : user
})
}
const validateSignUpIpnput = async (req , res , next) => {
    const {email, password } = req.body
    if(!email){
        res.status(400).json({error: "bad Request",messege:"Password Requird"});
    }
    else if (!password) {
        res.status(400).json({error:"Bad Request", messege: "Password Requird"})
    }else{
        const rawUserdata =fs.readFileSync("src/db/login.json");
        const user = rawUserdata.find((data) => data.email === email)  
        if(!user){res.status(400).json({error: "Bad Request", messege: "User not found"})}
        else{
            const isPasswordMatching = await bcrypt.compare(password , user.password)
            if(!isPasswordMatching){
                res.status(400).json({error:"Bad Request" , messege: "Password not matching"})
            }else{
                next()
            }
        }
   
    }
}