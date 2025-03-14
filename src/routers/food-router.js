import { Router } from "express";
import { CreateFoods } from "../controllers/food/CreateFood.controllers.js";
import { validateFoodName } from "../middleware/Food/validate-food-name.js";
import { getFood } from "../controllers/food/getFoot.controllers.js";
import { deleteFood } from "../controllers/food/DeleteFood.contollers.js";
import { updateFood } from "../controllers/food/UpdateFood.controllers.js";
export const foodRouter = Router();
foodRouter.post("/", validateFoodName, CreateFoods);
foodRouter.get("/", getFood);
foodRouter.delete("/", deleteFood);
foodRouter.put('/:id',updateFood)
