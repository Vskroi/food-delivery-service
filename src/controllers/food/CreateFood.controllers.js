import { Food } from "../../models/food.model.js";

export const CreateFoods = async (req, res) => {
  const { foodName, price, ingerdiets, category, image } = req.body;
  try {
    const food = await Food.create({
      foodName: foodName,
      price: price,
      ingerdiets: ingerdiets,
      category: category,
      image: image
    });

    res.status(200).json({
      success: true,
      message: "Food created successfully",
      food: food,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: `Error creating food ${error}` });
  }
};
