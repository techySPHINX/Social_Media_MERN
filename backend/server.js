import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connectdb.js';

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));

//nodemon is basically used for development stuff