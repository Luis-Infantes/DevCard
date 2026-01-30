import cors from "cors";
import express from "express";
import devcardRouter from "./routes/devcard";
import mongoose from "mongoose";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();




const app = express();

// 2. CONFIGURAR VARIABLES
const MONGO_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(process.cwd(), 'DevCard', 'public', 'image')));

//Direccion de ruta

app.use("/api/devcard", devcardRouter);

//Arranque




mongoose
    .connect(MONGO_URI!)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`API corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(console.error);
