import { Users } from "../../models/user.model.js";

export const updateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await Users.find();
    const findEmailIndex = users.findIndex((users) => users.email === email);

    users[findEmailIndex].password = password;
    res.send({ status: "success", data: users });
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  }
};
