import { Userss } from "./users.model.js";
export const getAdmin = async (req, res) => {
  try {

    const newUser = await Userss.get();
    res.statusCode(200).send(newUser)
    res.send(newUser).status(200);
  } catch (error) {
    console.log("Error!", error);
    res.send().status(400);
  }
};
