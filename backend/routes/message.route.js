import express from "express";
import {
  getMessages,
  sendMessage,
} from "../controllers/message.controllers.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/send/:id", authenticate, sendMessage);
router.get("/:id", authenticate, getMessages);

export default router;
