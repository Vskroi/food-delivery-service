import { foodOrder } from "../../models/foodOrder.model.js";

export const createfoodOrder = async (req, res) => {
  const { userId, id } = req.params; 
  const { totalPrice, image, foodOrderItems, status } = req.body; 

  try {
  
    const newFoodOrder = await foodOrder.create({
      user: userId, 
      _id: id, 
      totalPrice : totalPrice,
      image : image,
      foodOrderItems : foodOrderItems,
      status : status ,
    });




    res.status(201).json(newFoodOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the food order" });
  }
};
