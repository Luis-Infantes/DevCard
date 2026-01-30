import { useEffect, useState } from "react";
import { EducationCard } from "./components/EducationCard";
import { IntroCard } from "./components/IntroCard";
import { PersonalInfoCard } from "./components/PersonalInfoCard";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBackCard } from "./components/SkillBackCard";
import { SkillCloudCard } from "./components/SkillCloudCard";
import { SkillFrontCard } from "./components/SkillFrontCard";
import { SkillToolCard } from "./components/SkillToolCard";
import { getDevCard } from "./services/devcard.service";






export const App = () => {


    //Conexion con la Api para conectar con los datos de la BD de Mongo

    const [data, setData] = useState<any>(null);

    useEffect(() => {

        getDevCard().then(setData).catch(console.error)
    }, []);

    if (!data) return <p>Cargando...</p>


    return (
    

        <div className="container">

            
                <div className="custom-card">
                    <IntroCard data={data.intro} />
                </div>

            
                <div className="custom-card">
                <h2>Experiencia</h2>
                <p>A traves del siquiente enlace os presento mi experiencia que  se ha ido construyendo paso a paso. Primero a través de proyectos personales donde aprendí a experimentar y después durante el máster de Desarrollo Full Stack y arquitecturas cloud en Tajamar, donde llevé esos conocimientos a un entorno más técnico, guiado y orientado a buenas prácticas.</p>
                <ProjectCard projects={data.projects} />
                </div>

            <div className="custom-card">
                <h2>Formación</h2>
                <p>En este enlace podéis ver un resumen de toda la formación que he realizado en los últimos años: certificaciones oficiales, formación privada y cursos con diplomas no oficiales que he completado para seguir creciendo profesionalmente</p>
                <EducationCard educations={data.education} />
                   
            </div>

            <div className="custom-card">
                <h2>Contacto</h2>
                <PersonalInfoCard data={data.personalinfo} />
            </div>

            <div className="custom-card">
                <h2>Skills</h2>
                <SkillFrontCard skillsFront={data.skillsfront} />
                <SkillBackCard skillsBack={data.skillsback} />
                <SkillCloudCard skillsCloud={data.skillscloud} />
                <SkillToolCard skillsTool={data.skillstool} />

            </div>
            

            
            
        </div>

    
    );
}

export default App;
