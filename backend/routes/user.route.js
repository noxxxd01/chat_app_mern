import express from "express";
import authenticate from "../middlewares/auth.middleware.js";
import { getUsersForSidebar } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", authenticate, getUsersForSidebar);

export default router;
