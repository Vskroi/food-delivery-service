import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, require: true, ref: "users" },
    image: { type: String, require: true },
    foodOrderItems: [{ type: mongoose. Types. ObjectId, ref: "foodorderItem"}],
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        require: true,
    }
})
export const OrderFoods = mongoose.model("foodOrder", foodOrderSchema);