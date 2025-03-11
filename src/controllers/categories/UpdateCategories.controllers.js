import { Categories } from "../../models/categories.model.js";

export const updateUser = async (req, res) => {
  const {  id } = req.params;
  const {cateryName} = req.body
  try {
    const user = await Categories.findByIdAndUpdate(
      { _id: id },
      { cateryName: cateryName , },
      { returnDocument: true }
      
    );
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json("Error fetching users: " + error.message);
  }
};
