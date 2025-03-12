import { FoodOrderItem } from "../../models/foodOrderItem.model.js";
export const getAllFoodOrderItems = async (req, res) => {
  try {
    const items = await FoodOrderItem.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
