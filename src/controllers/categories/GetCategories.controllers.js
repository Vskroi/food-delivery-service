import { Categories } from "../../models/categories.model";

export const GetCategories = async (req, res) => {
  try {
   
    const Categor = await Categories.find(); 
    

    res.json(Categor);
  } catch (error) {

    res.status(500).send("Error fetching users: " + error.message);
  }
};
