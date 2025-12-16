import { Router } from "express";


import { createUser, getAllUsers } from "../controllers/user.controller.js";
import { adminAuth } from "../middlewares/autherize.middleware.js";
const router = Router();

router.post("/signIn", createUser);
router.post("/getAllUsers",adminAuth, getAllUsers);

export default router;
