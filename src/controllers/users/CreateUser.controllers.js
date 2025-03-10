import bcrypt from "bcrypt";
import { Users } from "../../models/user.model.js";

export const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await Users.create({ email, password: hashedPassword });

    return res.status(201).send({
      success: true,
      message: "User created successfully.",
      data: { email: newUser.email },
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: `Error, ${error.message}`,
    });
  }
};
