
import { Food } from "../../models/food.model.js";
 
export const getAllFoods = async (req, res) => {
  try {
    const getAllFoods = await Food.find();
 
    if (!getAllFoods || getAllFoods.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No food category found",
      });
    }
 
    res.status(200).json({ success: true, data: getAllFoods });
  } catch (error) {
    console.error("Error while getting food category: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while food category" });
  }
};
 