import { Router } from "express";

import { updateFoodOrder } from "../controllers/foodOrder/UpdateFoodORder.controllers.js";
import { deleteFoodOrder } from "../controllers/foodOrder/DeleteFoodOrder.controllers.js";
import { createfoodOrder } from "../controllers/foodOrder/CreateFoodORder.controllers.js";
import { getFoodOrder } from "../controllers/foodOrder/GetFoodORder.controllers.js";

export const foodOrderRouter = Router();

foodOrderRouter.post("/create", createfoodOrder);

foodOrderRouter.get("/", getFoodOrder);

foodOrderRouter.put("/", updateFoodOrder);

foodOrderRouter.delete("/", deleteFoodOrder);
