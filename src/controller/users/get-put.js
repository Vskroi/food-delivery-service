
import fs from 'fs'
export const putUsers = (req, res) => {
            const rawUserdata = fs.readFileSync("src/db/users.json")
            const users = JSON.parse(rawUserdata)
    users[0].firstName = "Kevin"
       fs.writeFileSync("src/db/users.json", JSON.stringify(users));
        res.send(users)
    res.send(users)
}