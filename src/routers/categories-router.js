import { Router } from "express";
import { CreateCategories } from "../controllers/categories/CreateCategories.controllers.js";
import { DeleteCategories } from "../controllers/categories/DeleteCategories.controllers.js";

import { getAllFoodCategory } from "../controllers/categories/GetAllFoodCategories.js";
import { getFoodCategory } from "../controllers/categories/GetCategories.controllers.js";
export const categoriesRouter = Router();
categoriesRouter.post('/', CreateCategories)
categoriesRouter.delete('/', DeleteCategories )
categoriesRouter.get('/' ,getAllFoodCategory )
categoriesRouter.get('/:id',getFoodCategory)