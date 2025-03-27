import { Router } from "express";
import { CreateFoods } from "../controllers/food/CreateFood.controllers.js";
import { validateFoodName } from "../middleware/Food/validate-food-name.js";
import { getFood } from "../controllers/food/getFoot.controllers.js";
import { deleteFood } from "../controllers/food/DeleteFood.contollers.js";
import { updateFood } from "../controllers/food/UpdateFood.controllers.js";
import { getAllFoods } from "../controllers/food/getAllFood.controllers.js";
export const foodRouter = Router();
foodRouter.post("/add", validateFoodName, CreateFoods);
foodRouter.get("/category/:categoryId", getFood);
foodRouter.delete("/delete", deleteFood);
foodRouter.put('/:id',updateFood)
foodRouter.get("/allfoods", getAllFoods)
