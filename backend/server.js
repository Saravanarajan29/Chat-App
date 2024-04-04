import express from  "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes  from './routes/auth.routes.js';
import messageRoutes  from './routes/message.routes.js';
import userRoutes from  './routes/user.routes.js'

import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // Middleware - to  parse the incoming requests with JSON payloads (from req.body) and return responses in JSON format
app.use(cookieParser()); //  parse cookies

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`server Running on port ${PORT}`);
});
