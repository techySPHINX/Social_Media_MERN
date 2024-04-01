import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connectdb.js';
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });

app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());


app.use("/api/users", userRoutes);


app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));

//nodemon is basically used for development stuff