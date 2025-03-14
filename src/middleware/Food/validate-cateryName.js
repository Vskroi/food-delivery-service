import { Categories } from "../../models/categories.model.js";
export const validateCateryName = async (req, res, next) => {
  const { cateryName } = req.body;
  try {
    const existingFood = await Categories.findOne({ cateryName });
    if (existingFood) {
      res.status(400).send({
        success: false,
        message: "catery name already in use.",
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
