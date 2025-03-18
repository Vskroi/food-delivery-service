import { Food } from "../../models/food.model.js";

export const getFood = async (req, res) => {
  const { category } = req.params;  

  if (!category) {
    return res.status(400).json({ success: false, message: "Category is required." });
  }

  try {
    const food = await Food.findOne({ category });  
    
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found." });
    }
    
    return res.status(200).json({
      success: true,
      message: "Food found successfully",
      food: { 
        foodName: food.foodName, 
        price: food.price, 
        ingredients: food.ingredients, // Fixed spelling from "ingerdiets"
        category: food.category, 
        image: food.image
      } 
    });
  } catch (error) {
    console.error("Error fetching food:", error);
    return res.status(500).json({ success: false, message: "Error fetching food: " + error.message });
  }
};