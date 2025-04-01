import { foodOrder } from "../../models/foodOrder.model.js";
import { ObjectId } from "mongodb";

export const userFoodOrder = async (req, res) => {
  const { userId } = req.params;
  try {
const User = new ObjectId(userId)
    const foodOrderDetails = await foodOrder
      .find({ user: User, })
      .populate("foodOrderItems.food", "foodName price _id ingerdiets category image")
      .exec();
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
