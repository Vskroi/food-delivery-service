import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  phoneNumber: { type: Number, require: true },
  address: { type: String, require: true, default: "ndhfa" },
  role: {
    type: String,
    require: true,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  isVerified: { type: Boolean,  default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
 
});

export const Users = mongoose.model("createUsers", usersSchema);
/* import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  orderedFoods: [
    {
      name: String,
      type: {
        type: { type: String },
      },
      
    },
  ],
  isVerified: { type: Boolean,  default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

});

export const Users = mongoose.model("createUsers", usersSchema);
 */