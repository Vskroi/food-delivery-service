import { FoodOrderItem } from "../../models/foodOrderItem.model.js";
export const createFoodOrderItem = async (req, res) => {
  const { food, quantity } = req.body;
  try {
    const newItem = new FoodOrderItem({ food, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
