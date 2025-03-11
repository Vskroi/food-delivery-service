import { Router } from "express";
import { CreateCategories } from "../controllers/categories/CreateCategories.controllers.js";
import { DeleteCategories } from "../controllers/categories/DeleteCategories.controllers.js";
export const categoriesRouter = Router();
categoriesRouter.post('/', CreateCategories)
categoriesRouter.delete('/', DeleteCategories )