import { Categories } from "../../models/categories.model.js";
 
export const getFoodCategory = async (req, res) => {
  const {cateryName} = req.body;
  const { id } = req.params;
 
  try {
    const getFoodCategory = await Categories.find({_id:id, cateryName : cateryName});
 
    if (!getFoodCategory) {
      return res.status(404).json({
        success: false,
        message: "No food category found",
      });
    }
 
    res.status(200).json({ success: true, data: getFoodCategory });
  } catch (error) {
    console.error("Error while getting food category: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while food category" });
  }
};