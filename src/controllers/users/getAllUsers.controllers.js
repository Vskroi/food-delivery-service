import { Users } from "../../models/user.model.js";
 
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
 
    if (!allUsers || allUsers.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No food category found",
      });
    }
 
    res.status(200).json({ 
        success: true, 
        data: allUsers.map((allUsers) => ({
            email: allUsers.email,
            _id: allUsers._id,
            role: allUsers.role,
            isVerified: allUsers.isVerified, 
            createdAt: allUsers.createdAt,
            updatedAt: allUsers.updatedAt,
            address: allUsers.address,
            phoneNumber: allUsers.phoneNumber,
        }))
    });
    
  } catch (error) {
    console.error("Error while getting food category: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while food category" });
  }
};
 