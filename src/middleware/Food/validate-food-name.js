import { Food } from "../../models/food.model.js";
export const validateFoodName = async (req, res, next) => {
  const { foodName } = req.body;
  try {
    const existingFood = await Food.findOne({ foodName });
    if (existingFood) {
      res.status(400).send({
        success: false,
        message: "Food name already in use.",
      });
    }else{
        next()
    }
  } catch (err) {
    res.status(500).send({
      success: false,
      message: `food ${err}`,
    });
  }
};
