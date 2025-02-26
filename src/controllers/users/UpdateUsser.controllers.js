export const createUser = (req , res ) => {

    const user = req.body
    user.push(user)
    res.send({status : "success" , data: user})
}