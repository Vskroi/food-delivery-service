import { Users } from "../../models/user.model.js";

export const deleteUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Received request to delete user:", { email, password });

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    await Users.deleteOne({ email });

    res.send({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
