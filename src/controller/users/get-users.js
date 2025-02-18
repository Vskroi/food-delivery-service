
import fs from 'fs'
export const getUsers =  (req , res) => {
     const rawUserdata = fs.readFileSync("src/db/users.json")
            const users = JSON.parse(rawUserdata)
    res.send(users)
             fs.writeFileSync("src/db/users.json", JSON.stringify(users));
}
