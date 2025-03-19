import { Food } from "../../models/food.model.js";
import { ObjectId } from "mongodb"; 

export const getFood = async (req, res) => {
  const { categoryId } = req.params;

 
  if (!categoryId) {
    return res
      .status(400)
      .json({ success: false, message: "Category is required." });
  }

  try {
 
    const category = new ObjectId(categoryId);

   
    const foods = await Food.find({ category: category });

  
    if (foods.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No food found in this category." });
    }

 
    return res.status(200).json({
      success: true,
      message: "Foods found successfully",
      data: foods.map(food => ({
        foodName: food.foodName,
        price: food.price,
        ingerdiets: food.ingerdiets,
        category: food.category,
        image: food.image,
      })),
    });
  } catch (error) {
    console.error("Error fetching food:", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Error fetching food: " + error.message,
      });
  }
};
