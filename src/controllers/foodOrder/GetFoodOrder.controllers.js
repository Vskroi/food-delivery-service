import { foodOrder } from "../../models/foodOrder.model.js";

export const postFoodOrder = async (req, res) => {
  const { userId, id } = req.params;
  try {
    const foodOrderDetails = await foodOrder.findOne({ user: userId, _id: id });
    if (!foodOrderDetails) {
      return res.status(404).json({ error: "Food order not found" });
    }
    res.status(200).json(foodOrderDetails);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the food order" });
  }
};
