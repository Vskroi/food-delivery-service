import express from 'express'
import { adminPost } from '../controllers/adminPost.js';
import { getAdmin } from '../controllers/adminGet.js';

export const adminRouter = express.Router();

adminRouter.post("/", adminPost)
adminRouter.get("/" , getAdmin)