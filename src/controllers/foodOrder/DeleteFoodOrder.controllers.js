import { foodOrder } from "../../models/foodOrder.model.js";

export const deleteFoodOrder = async (req, res) => {
  const { userId, id } = req.params;

  try {
    const deletedFoodOrder = await foodOrder.findOneAndDelete({ user: userId, _id: id });

    if (!deletedFoodOrder) {
      return res.status(404).json({ error: "Food order not found" });
    }

    res.status(200).json({ message: "Food order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the food order" });
  }
};
