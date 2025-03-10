import { Users } from "../models/admin.model";

export const validateFindOneUser = async(email) => {
    try{
    const user = await Users.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .send({ success: false, message: "User not found." });
    }
    } catch (err) {
        res.status(500).send({
          success: false,
          message: "Email",
        });
      }
}