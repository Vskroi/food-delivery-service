import { Userss } from "./users.model.js";
export const getAdmin = async (req, res) => {
  try {

    const newUser = await Userss.find();
    res.status(200).send(newUser)
    res.send(newUser).status(200);
  } catch (error) {
    console.log("Error!", error);
    res.send().status(400);
  }
};
