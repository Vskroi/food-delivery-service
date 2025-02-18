
import fs from 'fs'
export const postUsers = (req , res) => {
        const rawUserdata = fs.readFileSync("src/db/users.json")
        const users = JSON.parse(rawUserdata)
    const {firstName , secondName } = req.body
    users.push({
        firstName,
        secondName
    })
          fs.writeFileSync("src/db/users.json", JSON.stringify(users));
    res.send(users)
}