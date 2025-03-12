import { FoodOrderItem } from "../../models/foodOrderItem.model.js";
export const getFoodOrderItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await FoodOrderItem.findById(id);
    if (!item) {
      return res.status(404).json({ error: "Food order item not found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
