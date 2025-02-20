
import fs from 'fs'
import path from "path"
import bcrypt from "bcrypt"
/* export const postLogin = (req, res) => {
    const rawUserdata = fs.readFileSync("src/db/login.json")
    const users = JSON.parse(rawUserdata)
    const { userName, Password } = req.body;
   

    const checkUserNameIndex = users.findIndex(u => u.userName === userName)
    if(checkUserNameIndex === -1 ){
         users.push({ userName, Password }),
         
         fs.writeFileSync("src/db/login.json", JSON.stringify(users));
        
         return res.send("thanks")
    }
    const userNamecheck = users[checkUserNameIndex].userName.includes(userName)
    console.log(userNamecheck)
    if(userNamecheck){
        return res.send(users)
    }
} */
 
   export let  users = []

export const postLogin = (req , res) => {
    const {email , password} = req.body;
    try{
        const hashedPassword = bcrypt.hashSync(password, 8)
        const rawUserdata = fs.readFileSync("scr/db/login.json");
        const user = JSON.parse(rawUserdata)
        user.push({email:email, password:hashedPassword});
        fs.writeFileSync("src/db/login.json", JSON.stringify(user));
        res.status(201).json({
            success: true,
            messege: email,
        })
    }catch(error){
res.status(500).json({
    error:"Bad Request",
    messege:`Error while creating user , ${error}`
})
    }
}