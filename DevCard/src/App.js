"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = require("react");
const EducationCard_1 = require("./components/EducationCard");
const IntroCard_1 = require("./components/IntroCard");
const PersonalInfoCard_1 = require("./components/PersonalInfoCard");
const ProjectCard_1 = require("./components/ProjectCard");
const SkillBackCard_1 = require("./components/SkillBackCard");
const SkillCloudCard_1 = require("./components/SkillCloudCard");
const SkillFrontCard_1 = require("./components/SkillFrontCard");
const SkillToolCard_1 = require("./components/SkillToolCard");
const devcard_service_1 = require("./services/devcard.service");
const App = () => {
    //Conexion con la Api para conectar con los datos de la BD de Mongo
    const [data, setData] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        (0, devcard_service_1.getDevCard)().then(setData).catch(console.error);
    }, []);
    if (!data)
        return <p>Cargando...</p>;
    return (<div className="container">

            
                <div className="custom-card">
                    <IntroCard_1.IntroCard data={data.intro}/>
                </div>

            
                <div className="custom-card">
                <h2>Experiencia</h2>
                <p>A traves del siquiente enlace os presento mi experiencia que  se ha ido construyendo paso a paso. Primero a través de proyectos personales donde aprendí a experimentar y después durante el máster de Desarrollo Full Stack y arquitecturas cloud en Tajamar, donde llevé esos conocimientos a un entorno más técnico, guiado y orientado a buenas prácticas.</p>
                <ProjectCard_1.ProjectCard projects={data.projects}/>
                </div>

            <div className="custom-card">
                <h2>Formación</h2>
                <p>En este enlace podéis ver un resumen de toda la formación que he realizado en los últimos años: certificaciones oficiales, formación privada y cursos con diplomas no oficiales que he completado para seguir creciendo profesionalmente</p>
                <EducationCard_1.EducationCard educations={data.education}/>
                   
            </div>

            <div className="custom-card">
                <h2>Contacto</h2>
                <PersonalInfoCard_1.PersonalInfoCard data={data.personalinfo}/>
            </div>

            <div className="custom-card">
                <h2>Skills</h2>
                <SkillFrontCard_1.SkillFrontCard skillsFront={data.skillsfront}/>
                <SkillBackCard_1.SkillBackCard skillsBack={data.skillsback}/>
                <SkillCloudCard_1.SkillCloudCard skillsCloud={data.skillscloud}/>
                <SkillToolCard_1.SkillToolCard skillsTool={data.skillstool}/>

            </div>
            

            
            
        </div>);
};
exports.App = App;
exports.default = exports.App;
