import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRouter from "./routes/user.route.js";
import connectDb from "./config/connectDb.js";
import { app, server } from "./socket/socket.js";
import express from "express";

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
