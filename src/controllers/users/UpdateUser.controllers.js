import { Users } from "../../models/user.model.js";

export const updateUser = async (req, res) => {
  const { id, email } = req.body;
  try {
    const user = await Users.findByIdAndUpdate(
      { _id: id },
      { email: email },
      { returnDocument: true }
    );
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json("Error fetching users: " + error.message);
  }
};
