import { Users } from "../../models/user.model"
import jwt from "jsonwebtoken"
export const checkUserSigned = async (req , res , next) => {
    const {email , password} = req.body
    try {
        const isSigned = await Users.findOne({email});
        if(!isSigned){
            res.send({
                success:false,
                message:"Account not fount",
            })
        }else{
            const isCorrect = await brcypt.compare(password,isSigned.password)
            const dateASMiloSecond = Date.now()
            const currentDate = new Date(dateASMiloSecond).toLocaleString()

            const dateAsSecond = Math.floor(dateASMiloSecond / 1000)
            const currentDateInSeconds = new Date(
                dateAsSecond * 1000
            ).toLocaleString()

            const expiarationTime = dateAsSecond + 60 * 60
            const expiationDate = new Date(expiarationTime * 1000).toLocaleString()
            const decodePassword = "123"
            if(isCorrect){
                const token = jwt.sign(
                    {exp: Math.floor(dateASMiloSecond.now()/1000)+60 *60, data:isSigned},
                    decodePassword
                )
                const decoded = jwt.verify(token , "123")
                res.send({
                    success:true,
                    message:"logged in",
                    token:token
                })
            }else{
                res.send({
                    success:false,
                    message:"wrong password"
                })
            }
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: `User sign in error: ${error}`})
    }

} 