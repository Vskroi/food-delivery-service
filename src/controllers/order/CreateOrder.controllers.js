import { Order } from "../../models/foodOrderItem.model";

export const CreateOrder = (req , res ) => {
   const user = req.body
   Order.create(user)
    res.send({status : "success" , data :Order})

};
