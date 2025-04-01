import { Router } from "express";

import { updateFoodOrder } from "../controllers/foodOrder/UpdateFoodORder.controllers.js";
import { deleteFoodOrder } from "../controllers/foodOrder/DeleteFoodOrder.controllers.js";
import { createfoodOrder } from "../controllers/foodOrder/CreateFoodORder.controllers.js";

import { getFoodOrderAllItems } from "../controllers/foodOrder/getFoodOrderAllItems.controllers.js";
import { userFoodOrder } from "../controllers/foodOrder/UserFoodOder.controllers.js";

export const foodOrderRouter = Router();

foodOrderRouter.post("/create", createfoodOrder);

foodOrderRouter.get("/userID/:userId", userFoodOrder);

foodOrderRouter.put("/:id", updateFoodOrder);

foodOrderRouter.delete("/", deleteFoodOrder);

foodOrderRouter.get('/order' , getFoodOrderAllItems)
