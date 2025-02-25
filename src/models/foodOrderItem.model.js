import mongoose from "mongoose";
const foodOrderItemSchema = new mongoose.Schema({
  food: { type: mongoose.Types.ObjectId, ref: "foods" },
  quantity: { type: Number, require: true },
});
export const Users = mongoose.model("foodOrderItem", foodOrderItemSchema);
