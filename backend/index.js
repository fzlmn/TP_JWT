import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";

app.use(express.json());

import LoginRoutes from "./routes/LoginRoutes.js"

dotenv.config();
app.use(cors());

app.use("/api", LoginRoutes);


mongoose.connect(process.env.DB_URI).then(
    ()=>{
        app.listen(process.env.Port, ()=>{
            console.log(`Server running on port ${process.env.PORT} ......`);
        });
    }
)


