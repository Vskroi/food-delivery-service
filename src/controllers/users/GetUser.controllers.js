import { Users } from "../../models/user.model.js"

export const getUsers = (req , res ) => {
const users = Users
    res.send(users)
}