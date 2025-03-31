import { foodOrder } from "../../models/foodOrder.model.js";

export const getFoodOrderAllItems = async (req, res) => {
  try {
    const allOrders = await foodOrder.find()
      .populate('user', 'email _id phoneNumber') 
      .populate('foodOrderItems.food', 'foodName price _id') 
      .exec();
    
    if (!allOrders || allOrders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No food orders found",
      });
    }

    res.status(200).json({
      success: true,
      data: allOrders,
    });

  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      success: false,
      message: "Error while fetching food orders",
    });
  }
};
