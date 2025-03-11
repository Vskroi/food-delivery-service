import { Food } from "../../models/food.model.js";

export const deleteFood = async (req, res) => {
  try {
    const { foodName } = req.body;

    if (!foodName) {
      return res.status(400).json({ message: "foodName is required" });
    }

    const food = await Food.findOne({foodName });

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ message: `${foodName} deleted successfully` });
  } catch (error) {
    console.error("Error deleting food:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
