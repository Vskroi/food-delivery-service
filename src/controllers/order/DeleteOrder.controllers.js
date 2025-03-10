import { Order } from "../../models/foodOrderItem.model";

export const DeleteOrder = async (req, res) => {
  try {
    const { food, quantity } = req.body;

    console.log("Received request to delete food:", { food, quantity });

    const user = await Order.findOne({ food });

    if (!user) {
      return res.status(404).send({ message: "food not found" });
    }

    await Order.deleteOne({ food });

    res.send({ message: "food deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
