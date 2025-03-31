import { foodOrder } from "../../models/foodOrder.model.js";


export const updateFoodOrder = async (req, res) => {
  const { id } = req.params;
  const {  status } = req.body;

  try {
    const updatedFoodOrder = await foodOrder.findOneAndUpdate(
      {  _id: id },
      {  status : status, updatedAt: Date.now() },
      { new: true } 
    );

    if (!updatedFoodOrder) {
      return res.status(404).json({ error: "Food order not found" });
    }

    res.status(200).json(updatedFoodOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the food order" });
  }
};

