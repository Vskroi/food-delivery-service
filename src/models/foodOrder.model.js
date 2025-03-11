import mongoose from "mongoose";


const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  _id:{ type: mongoose.Types.ObjectId, required: true, ref: "foods" },
  totalPrice: { type: Number, required: true },
  image: { type: String, required: true },
  foodOrderItems: [{ type: mongoose.Types.ObjectId, ref: "foodOrderItem" }],
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


export const foodOrder = mongoose.model("foodOrder", foodOrderSchema);