import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

async function checkImages() {
    await mongoose.connect("mongodb://127.0.0.1:27017/devcard");
    const IMAGE_DIR = path.join(process.cwd(), 'DevCard', 'public', 'image');
    const archivosEnCarpeta = fs.readdirSync(IMAGE_DIR);

    const db = mongoose.connection.db;
    if (!db) return;
    const docs = await db.collection('devcards').find().toArray();

    docs.forEach(doc => {
        doc.skillsback.forEach((skill: any) => {
            if (!archivosEnCarpeta.includes(skill.image)) {
                console.warn(`Alerta: El archivo ${skill.image} no existe en la carpeta image`);
            }
        });
    });
    console.log("Chequeo finalizado.");
    await mongoose.disconnect();
}
checkImages();