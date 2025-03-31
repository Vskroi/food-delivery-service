import { Router } from "express";

import { updateFoodOrder } from "../controllers/foodOrder/UpdateFoodORder.controllers.js";
import { deleteFoodOrder } from "../controllers/foodOrder/DeleteFoodOrder.controllers.js";
import { createfoodOrder } from "../controllers/foodOrder/CreateFoodORder.controllers.js";
import {  postFoodOrder } from "../controllers/foodOrder/GetFoodORder.controllers.js";
import { getFoodOrderAllItems } from "../controllers/foodOrder/getFoodOrderAllItems.controllers.js";

export const foodOrderRouter = Router();

foodOrderRouter.post("/create", createfoodOrder);

foodOrderRouter.post("/order", postFoodOrder);

foodOrderRouter.put("/:id", updateFoodOrder);

foodOrderRouter.delete("/", deleteFoodOrder);

foodOrderRouter.get('/order' , getFoodOrderAllItems)
