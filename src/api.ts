import mongoose from "mongoose";


export async function connectDB(url: string) {

    if (!url) console.error("La base de datos no está definida");

    try {

        await mongoose.connect(url);
        console.log("Conectado a MongoDB");

    } catch (error) {

        console.error("Error al conectar con MongoDB", error);
        process.exit(1);
    }
}