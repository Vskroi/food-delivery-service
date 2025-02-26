import { Users } from "../../models/admin.model.js";
export const adminPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await Users.create({
      email: email,
      password: password,
    });
    res.status(200).send(newUser);
  } catch (error) {
    console.log("Error!", error);
    res.send().status(400);
  }
};
