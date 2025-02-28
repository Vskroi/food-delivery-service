import { Food } from "../../models/food.model";
export const Foods = async (req, res) => {
  const { foodName, price ,  ingerdiets , category} = req.body;
  try {
    const Foods = await Food.create({
        foodName : foodName, 
        price : price ,  
        ingerdiets : ingerdiets , 
        category : category
    });
    res.status(200).send(Foods);
  } catch (error) {
    console.log("Error!", error);
    res.send().status(400);
  }
};
