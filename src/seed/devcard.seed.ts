import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


async function seed() {

    const MONGO_URI = process.env.MONGODB_URI;

    try {
        await mongoose.connect(MONGO_URI!);

        // Usamos la conexión nativa para saltarnos las validaciones del Modelo que bloquean la inserción
        const collection = mongoose.connection.collection('devcard');

        // Borramos lo que haya quedado mal
        await collection.deleteMany({});

        // INSERTAMOS TU OBJETO TAL CUAL LO TENÍAS (He respetado todo tu contenido)
        await collection.insertOne({
            intro: {
                fullname: "Luis Infantes Lacal",
                title: "Desarrollador Full-Stack | Consultor de Power Platform",
                description:
                    "Estudiante de desarrollo Full Stack y Arquitecturas Cloud con formación técnica en diseño y programación web. Experiencia en tecnologías como: C#, .NET, EF Core, JavaScript, TypeScript, React y Bootstrap. Actualmente ampliando conocimientos en Node.js, Angular y desarrollo cloud. Certificación PL-900. Acceso al título atraves del icono.",
                image: "PL-900.png"
            },
            personalinfo: {
                email: "Luis@InfantesArtdesign.onmicrosoft.com",
                linkedin: "linkedin.com/in/luis-infantes-artdesign",
                github: "github.com/Luis-Infantes",
            },
            projects: [

                {
                    id: "#1",
                    title: "Dev Card",
                    description: "Dev Card es la aplicación que utilizo para presentar mi currículum de una forma distinta a lo tradicional. Su interfaz está diseñada como una experiencia interactiva, donde el usuario puede explorar mi perfil profesional a través de cinco secciones clave: Introducción, proyectos, formación, contacto, skills. El objetivo de Dev Card es mostrar mi trayectoria de manera visual, dinámica y moderna, ofreciendo una alternativa más atractiva que un CV convencional. ",
                    tech: ["React", "Node", "MongoDB", "Bootstrap", "HTML"],
                    link: "https://github.com/Luis-Infantes",
                    image: "DevCard.png",
                },


                {
                    id: "#2",
                    title: "C.R.O.M.E Play",
                    description: "C.R.O.M.E Play  es una aplicación para gestionar diferentes eventos para una tienda de juegos. Se pueden crear perfiles para cada tipo de juego que sen encargen de crear, editar y eliminar cualquier tipo de evento. Además podrán registrarse perfiles de miembros o socios de la tienda para poder gestionar datos personales e inscribirse a dichos eventos ",
                    tech: ["C#", "MVC", "JavaScript", "Bootstrap", "HTML"],
                    link: "https://github.com/Luis-Infantes/CROME-Play",
                    image: "CromePlay.png",
                },
                {
                    id: "#3",
                    title: "Social Home",
                    description: "Social Home es un proyecto de aplicación para gestionar diferentes eventos en una comunidad de vecinos. Trás un registro previo, puedes acceder a una interfaz donde podras gestionar datos personales y escribir en un chat comunitario",
                    tech: ["JavaScript", "CSS", "HTML"],
                    link: "https://github.com/Luis-Infantes/social-home",
                    image: "SocialHome.png",
                },
            ],
            education: [
                {
                    id: "#1",
                    title: "Master en desarrolo Full-Stack & Arquitecturas Cloud",
                    description: "Formación en desarrollo web Front‑End con Angular y React; programación Back‑End con C# y Node.js; bases de datos con SQL Server, acceso a datos y uso de Entity Framework; desarrollo de aplicaciones web con ASP.NET Core; creación de soluciones cloud en Microsoft Azure orientadas a la certificación AZ‑204 y en Amazon Web Services alineadas con la certificación DVA‑C02; y desarrollo de soluciones empresariales con Power Platform enfocado en la certificación PL‑400.",
                    center: "Tajamar.png",
                    link: "/image/TajamarLoading.jpg",
                    startdate: "2025 - En curso",
                    
                },


                {
                    id: "#2",
                    title: "Certificación PL‑900: Microsoft Power Platform Fundamentals",
                    description: "Certificación PL‑900: Microsoft Power Platform Fundamentals, preparada íntegramente a través de las rutas oficiales de Microsoft Learn, realizando módulos prácticos sobre Power Apps, Power Automate, Power Pages, Dataverse y los fundamentos generales de Power Platform.",
                    center: "PL-900.png",
                    link: "https://learn.microsoft.com/es-es/users/luisinfanteslacal-7036/credentials/e182d2f15d51e9ff?ref=https%3A%2F%2Fwww.linkedin.com%2F",
                    startdate: "2025",
                },

                {
                    id: "#3",
                    title: "Cursos de Power Apps, Power Automate y Power Pages",
                    description: "Formación complementaria en Power Platform a través de cursos de Udemy, donde profundicé en el uso práctico de Power Apps, Power Automate y Power Pages. Aunque no son certificaciones oficiales, estos cursos me proporcionaron una base sólida y experiencia aplicada que posteriormente reforcé y formalicé preparando la certificación PL‑900 a través de las rutas oficiales de Microsoft Learn.",
                    link:"/image/UdemyC.jpg",
                    center: "Udemy.png",
                    startdate: "2024",
                },


                {
                    id: "#4",
                    title: "Master de desarrollo web",
                    description: "Máster en Desarrollo Web, centrado en la creación de aplicaciones y sitios dinámicos utilizando PHP, HTML5, CSS3 y MySQL. Incluyó el uso de Apache como servidor web y Atom como editor principal de código.",
                    link:"/image/CEICDW2.jpeg",
                    center: "CEI.png",
                    startdate: "2013",
                },


                {
                    id: "#5",
                    title: "Master en diseño web",
                    description: "Máster en Diseño Web, centrado en la creación de interfaces y maquetación de sitios utilizando HTML5 y CSS3. La formación abarcó principios de diseño responsive, estructura semántica, accesibilidad web y buenas prácticas de maquetación.",
                    link: "/image/CEICDW1.jpeg",
                    center: "CEI.png",
                    startdate: "2012",
                },



            ],
            skillsfront: [
                { id: "#1", name: "HTML", level: "Advanced", category: "Front-end", image: "HTML.png" },
                { id: "#2", name: "CSS / Bootstrap", level: "Intermediate", category: "Front-end", image: "css.png" },
                { id: "#3", name: "JavaScript", level: "Intermediate", category: "Front-end", image: "JS.png" },
                { id: "#4", name: "TypeScript", level: "Intermediate", category: "Front-end", image: "TS.png" },
                { id: "#5", name: "React", level: "Intermediate", category: "Front-end", image: "React.png" },
            ],
            skillsback: [
                { id: "#1", name: "C#", level: "Intermediate", category: "Back-end", image: "CSharp.png" },
                { id: "#2", name: ".NET", level: "Intermediate", category: "Back-end", image: "Net.png" },
                { id: "#3", name: "Entity Framework Core", level: "Intermediate", category: "Back-end", image: "NetCore.png" },
                { id: "#4", name: "Node.js", level: "Intermediate", category: "Back-end", image: "Node.png" },
            ],
            skillscloud: [
                { id: "#10", name: "Power Apps", level: "Intermediate", category: "cloud", image: "PowerApps.png" },
                { id: "#11", name: "Power Automate", level: "Intermediate", category: "cloud", image: "PowerAuto.png" },
                { id: "#12", name: "Power BI", level: "Intermediate", category: "cloud", image: "PowerBi.png" },
                { id: "#13", name: "Power Platform", level: "Intermediate", category: "cloud", image: "PowerPlat.png" },
            ],
            skillstool: [
                { id: "#12", name: "Docker", level: "Basic", category: "tools", image: "Docker.png" },
                { id: "#13", name: "Insomnia", level: "Intermediate", category: "tools", image: "Insomnia.png" },
                { id: "#14", name: "Git", level: "Intermediate", category: "tools", image: "GitBash.png" },
                { id: "#15", name: "GitHub", level: "Intermediate", category: "tools", image: "GitHub.png" },
                { id: "#16", name: "Visual Studio", level: "Intermediate", category: "tools", image: "VisualStudio.png" },
                { id: "#17", name: "Visual Studio Code", level: "Intermediate", category: "tools", image: "VisualSCode.png" },
                { id: "#18", name: "My SQL", level: "Intermediate", category: "tools", image: "SQL.png" },
                { id: "#19", name: "MongoDB", level: "Intermediate", category: "tools", image: "MongoDB.png" },
            ],
        });

        console.log("Datos recuperados y actualizados correctamente");
        process.exit(0);
    } catch (error) {
        console.error("Error recuperando datos:", error);
        process.exit(1);
    }
}

seed();


