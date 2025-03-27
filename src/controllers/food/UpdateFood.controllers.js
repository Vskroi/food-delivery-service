import { Food } from "../../models/food.model.js";

export const updateFood = async (req, res) => {
  const { foodName, price, ingerdiets, category } = req.body;
  const { id } = req.params;
  try {
    const user = await Food.findByIdAndUpdate(
      { _id: id },
      {
        foodName: foodName,
        price: price,
        ingerdiets: ingerdiets,
        category: category,
      },
      { returnDocument: true }
    );
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json("Error fetching users: " + error.message);
  }
};
