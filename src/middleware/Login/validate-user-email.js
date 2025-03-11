import { Users } from "../../models/user.model.js";

export const validateUserEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      res.status(400).send({
        success: false,
        message: "Email already in use.",
      });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send({
      success: false,
      message: `Email ${err}`,
    });
  }
};
