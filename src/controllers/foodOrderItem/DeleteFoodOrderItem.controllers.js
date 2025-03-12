import { FoodOrderItem } from "../../models/foodOrderItem.model.js";
export const deleteFoodOrderItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await FoodOrderItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Food order item not found" });
    }
    res.status(200).json({ message: "Food order item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
