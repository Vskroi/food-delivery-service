import { Categories } from "../../models/categories.model.js";
export const CreateCategories = async (req, res) => {
  const { cateryName} = req.body;
  try {
    const Foods = await Categories.create({
        cateryName : cateryName
    });
    return res.status(201).json({
      success: true,
      message: `${Foods} created successfully.`,
     
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error, ${error.message}`,
    });
  }
};
