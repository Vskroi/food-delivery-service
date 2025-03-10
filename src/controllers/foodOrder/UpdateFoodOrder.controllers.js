import { Food } from "../../models/food.model";

export const UpdateUser = async (req, res) => {
  try {
    const { foodName, price , ingerdiets , category}  = req.body;
    const Foods = await Food.find();
    const findfoodNameIndex = Foods.findIndex((Foods) => Foods.foodName === foodName);

    Foods[findEmailIndex].price = price;
    Foods[findEmailIndex].ingerdiets = ingerdiets;
    Foods[findEmailIndex].category = category;


    res.send({ status: "success", data: users });
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  }
};
