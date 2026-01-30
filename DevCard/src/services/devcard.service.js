"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevCard = getDevCard;
async function getDevCard() {
    const res = await fetch("http://localhost:3000/api/devcard");
    if (!res.ok)
        return console.error("Error al cargar DevCard");
    return res.json();
}
