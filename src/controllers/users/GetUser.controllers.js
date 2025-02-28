import { Users } from "../../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
   
    const users = await Users.find(); 
    

    res.json(users);
  } catch (error) {

    res.status(500).send("Error fetching users: " + error.message);
  }
};
