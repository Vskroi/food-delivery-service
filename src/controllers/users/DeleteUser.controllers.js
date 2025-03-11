import { Users } from "../../models/user.model.js";
import bcrypt from "bcrypt";

export const deleteUser = async (req, res) => {
  try {
    const {  password } = req.body;
    const {id} = req.params

    const user = await Users.findOne({ _id: id });
    console.log(user)

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password." });
    }

   const deletee =   await Users.deleteOne({ _id: user._id });
console.log("delete", deletee)
    res.send({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
