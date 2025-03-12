import { Router } from "express";
import { createFoodOrderItem } from "../controllers/foodOrderItem/CreateFoodOrderItem.controllers.js";

import { updateFoodOrderItem } from "../controllers/foodOrderItem/UpdateFoodOrderItem.controllers.js";
import { deleteFoodOrderItem } from "../controllers/foodOrderItem/DeleteFoodOrderItem.controllers.js";
import { getAllFoodOrderItems } from "../controllers/foodOrderItem/getFoodAllITemsId.js";
import { getFoodOrderItemById } from "../controllers/foodOrderItem/GetFoodOrderItem.controllers.js";

export const foodOrderItemRouter = Router();

foodOrderItemRouter.post("/", createFoodOrderItem);

foodOrderItemRouter.get("/", getAllFoodOrderItems);

foodOrderItemRouter.get("/:id", getFoodOrderItemById);

foodOrderItemRouter.put("/:id", updateFoodOrderItem);

foodOrderItemRouter.delete("/:id", deleteFoodOrderItem);
