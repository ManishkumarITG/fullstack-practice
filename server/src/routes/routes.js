import { Router } from "express";


import { createUser, getAllUsers } from "../controllers/user.controller.js";
import { adminAuth } from "../middlewares/autherize.middleware.js";
import { createActivityByAdmin } from "../controllers/activity.controller.js";
const router = Router();

router.post("/signIn", createUser);
router.post("/getAllUsers",adminAuth, getAllUsers);
router.post("/createActivityByAdmin",adminAuth, createActivityByAdmin);

export default router;
