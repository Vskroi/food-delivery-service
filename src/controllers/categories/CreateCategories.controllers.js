import { Categories } from "../../models/categories.model";
export const CreateCategories = async (req, res) => {
  const { cateryName} = req.body;
  try {
    const Foods = await Categories.create({
        cateryName : cateryName
    });
    res.status(200).send(Foods);
  } catch (error) {
    console.log("Error!", error);
    res.send().status(400);
  }
};
