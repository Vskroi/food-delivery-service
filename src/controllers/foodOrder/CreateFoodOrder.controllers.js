import { foodOrder } from "../../models/foodOrder.model.js";

export const createfoodOrder = async (req, res) => {
  const { totalPrice, image, food, quantity, userId } = req.body;

  try {
    const newFoodOrder = await foodOrder.create({
      user: userId,
      totalPrice: totalPrice,
      image: image,
      foodOrderItems: { food: food, quantity: quantity },
      status:"PENDING",
    });

    res.status(201).json({ success: true, newFoodOrder: newFoodOrder });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the food order" });
  }
};
