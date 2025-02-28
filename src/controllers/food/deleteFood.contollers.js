import { Food } from "../../models/food.model.js";

export const deleteFood = async (req, res) => {
  try {
    const { foodName } = req.body;

    console.log("Received request to delete foodName:", { foodName });

    const Foods = await Food.findOne({ foodName });

    if (!Foods) {
      return res.status(404).send({ message: "foodName not found" });
    }

    await Foods.deleteOne({ foodName });

    res.send({ message: "foodName deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
