import express from 'express'
import { adminPost } from '../controllers/admin/adminPost.js';
import { getAdmin } from '../controllers/admin/adminGet.js';

export const adminRouter = express.Router();

adminRouter.post("/", adminPost)
adminRouter.get("/" , getAdmin)