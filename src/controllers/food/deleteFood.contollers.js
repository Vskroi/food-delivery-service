import { Food } from "../../models/food.model.js";
import { ObjectId } from "mongodb"; 

export const deleteFood = async (req, res) => {
  try {
    const { _id, foodName } = req.body;


    if (!_id) {
      return res.status(400).json({ message: "_id is required" });
    }

    const foodId = new ObjectId(_id);


    const food = await Food.findByIdAndDelete({ _id: foodId });


    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }


    res.status(200).json({ message: `${foodName} deleted successfully`, success: true });
  } catch (error) {
    console.error("Error deleting food:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
