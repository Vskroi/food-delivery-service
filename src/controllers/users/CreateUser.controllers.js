import { Users } from "../../models/user.model.js"

export const CreateUser = (req , res ) => {
   const user = req.body
    Users.create(user)
    res.send({status : "success" , data :Users})

};
