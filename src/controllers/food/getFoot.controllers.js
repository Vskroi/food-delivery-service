import { Food } from "../../models/food.model.js";

export const getFood = async (req, res) => {
  const { foodName } = req.body;  

  if (!foodName) {
    return res.status(400).json({ success: false, message: "Food name is required." });
  }

  try {
   
    const food = await Food.findOne({ foodName });  
    
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found." });
    } else {
      return res.status(200).json({
        success: true,
        message: "Food found successfully",
        food: { name: food.foodName, price: food.price, ingerdiets:food.ingerdiets, category: food.category, image: food.image} 
      });
    }
  } catch (error) {
    console.error("Error fetching food:", error);
    res.status(500).json({ success: false, message: "Error fetching food: " + error.message });
  }
};
