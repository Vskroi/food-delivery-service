import { Food } from "../../models/food.model";

export const getFood = async (req, res) => {
  try {
   
    const users = await Food.find(); 
    

    res.json(users);
  } catch (error) {

    res.status(500).send("Error fetching users: " + error.message);
  }
};
