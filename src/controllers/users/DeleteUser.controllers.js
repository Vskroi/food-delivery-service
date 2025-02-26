import { Users } from "../../models/user.model.js";

export const deleteUsers = (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received request to delete user:", { email, password });
    
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    }
    
    const success = Users.deleteUser(email, password);
    
    if (!success) {
      return res.status(403).send({ message: "User not found or incorrect password" });
    }
    

    const updatedUsers = Users.getAllUsers();
    
    return res.status(200).send({
      message: "User deleted successfully",
      users: updatedUsers,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};