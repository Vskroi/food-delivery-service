import bcrypt from "bcrypt";
import { Users } from "../../models/user.model.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid password." });
    } else {
      const expirationTime = 60 * 60;
      const token = jwt.sign(
        {
          data: {
            _id: user._id,
            email: user.email,
            role: user.role,
          },
        },
        process.env.JWT_SECRET || "fallback-secret",
        { expiresIn: expirationTime }
      );
      return res.status(200).json({
        success: true,
        message: "Login successful.",
        data: token,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};
