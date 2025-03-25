import bcrypt from "bcrypt";
import { Users } from "../../models/user.model.js"; 

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid password.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      user: { _id: user._id, role: user.role },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};
