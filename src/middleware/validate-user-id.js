import mongoose from "mongoose";
import { Users } from "../models/user.model.js";
export const validateUserId = async (req, res, next) => {
  const { id } = req.body;
  try {
    if (!id) {
      res.status(303).json({ success: false, message: "Id not provided" });

    } else {
      const user = await Users.findById(new mongoose.Types.ObjectId(id));

      if (!user) {
        res.status(404).json({ success: false, message: "Users not found " });
      } else {
        next();
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, message: `error, ${err}` });
  }
};
