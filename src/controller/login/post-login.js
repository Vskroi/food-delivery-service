
import fs from 'fs'
export const postLogin = (req, res) => {
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
   
   /*  res.send(users); */
}