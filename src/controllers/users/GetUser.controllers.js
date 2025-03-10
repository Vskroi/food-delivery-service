import bcrypt from "bcrypt";
import { Users } from "../../models/user.model.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .send({ success: false, message: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);


    if (!isPasswordValid) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid password." });
    } else {
      return res.status(200).send({
        success: true,
        message: "Login successful.",
      });
    }
  } catch (error) {
    console.error(error); 
    res.status(500).send({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};
