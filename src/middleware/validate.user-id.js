import { ObjectId } from "mongodb";
import mongoose from "mongoose";
export const validateUserId = async (req, res, next) => {
    const { id } = req. body;
    try {
    if(!id){
        res.status (303). json({ success: false, message: "Id not provided" });
    
 } else {
    const user = await UsersModel. findById (new mongoose. Types. ObtectIe(id));

 console.log(user)
if(!user){
    res.status (404).json({ success: false, message: "Users not found " });
}
    else {

    res.status (404). json({ success: false, message: "Users not found " });
    }}

  
}   catch (err) {
    res.status(500). json({ success: false, message: `error, $(err}` });
    }}
