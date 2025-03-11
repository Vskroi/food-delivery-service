import { Router } from "express";

import { updateFoodOrder } from "../controllers/foodOrder/UpdateFoodORder.controllers.js";
import { deleteFoodOrder } from "../controllers/foodOrder/DeleteFoodOrder.controllers.js";
import { createfoodOrder } from "../controllers/foodOrder/CreateFoodOrder.controllers.js";
import { getFoodOrder } from "../controllers/foodOrder/GetFoodORder.controllers.js";

export const foodOrderRouter = Router();

foodOrderRouter.post("/:userId/:id", createfoodOrder);

foodOrderRouter.get("/:userId/:id", getFoodOrder);

foodOrderRouter.put("/:userId/:id", updateFoodOrder);

foodOrderRouter.delete("/:userId/:id", deleteFoodOrder);
