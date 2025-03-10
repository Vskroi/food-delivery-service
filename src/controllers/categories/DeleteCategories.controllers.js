import { Categories } from "../../models/categories.model";
export const DeleteCategories = async (req, res) => {
  try {
    const { cateryName } = req.body;

    console.log("Received request to delete cateryName:", { cateryName });

    const FindcateryName = await Categories.findOne({ cateryName });

    if (!FindcateryName) {
      return res.status(404).send({ message: "cateryName not found" });
    }

    await Categories.deleteOne({ cateryName });

    res.send({ message: "cateryName deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
