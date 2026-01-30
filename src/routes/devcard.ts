
import { Router } from "express";
import DevCardModel from "../Models/Devcard";

const devcardRouter = Router();

devcardRouter.get("/", async (_req, res) => {
    try {
        // 1. Diagnóstico: ¿A qué DB y Colección estamos mirando?
        console.log("DB actual:", DevCardModel.db.name);
        console.log("Colección actual:", DevCardModel.collection.name);

        // 2. Intentamos buscar TODO lo que haya
        const allDocs = await DevCardModel.find().lean();
        console.log("Documentos encontrados:", allDocs.length);

        if (allDocs.length === 0) {
            return res.status(404).json({
                message: "Conectado a " + DevCardModel.db.name + ", pero la colección está vacía."
            });
        }

        res.json(allDocs[0]); // Devolvemos el primero para tu frontend
    } catch (err) {
        console.error("Error en la ruta:", err);
        res.status(500).json({ message: "Error interno" });
    }
});

export default devcardRouter;
