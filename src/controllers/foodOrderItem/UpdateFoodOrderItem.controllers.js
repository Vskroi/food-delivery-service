import { FoodOrderItem } from "../../models/foodOrderItem.model.js";
export const updateFoodOrderItem = async (req, res) => {
  const { id } = req.params;
  const { food, quantity } = req.body;
  try {
    const updatedItem = await FoodOrderItem.findByIdAndUpdate(
      id,
      { food, quantity },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: "Food order item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
