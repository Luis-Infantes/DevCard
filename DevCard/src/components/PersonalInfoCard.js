"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalInfoCard = void 0;
const react_bootstrap_icons_1 = require("react-bootstrap-icons");
const PersonalInfoCard = ({ data }) => {
    return (<div className="Intro-Style">
            
            <p>{data.phone}</p>
            <p>{data.location}</p>


            <p>Acceso a mi perfil de Linkedin y Github a traves de cada incono</p>

            <div className="Intro-Style d-flex align-items-center justify-content-center gap-2">


                <react_bootstrap_icons_1.Envelope size={30} color="#ffffff"/><p className="mb-0 text-white">{data.email}</p>
                
            </div>
            <br />

            <div className="Intro-Style d-flex align-items-center justify-content-center gap-2">
                
                <a href="https://www.linkedin.com/in/luis-infantes-artdesign/" target="_blank" rel="noopener noreferrer">
                    <react_bootstrap_icons_1.Linkedin size={30} color="#ffffff"/>
                </a>
                <p className="mb-0 text-white">{data.linkedin}</p>
            </div>
            <br />
            <div className="Intro-Style d-flex align-items-center justify-content-center gap-2">

                <a href="https://github.com/Luis-Infantes" target="_blank" rel="noopener noreferrer">
                    <react_bootstrap_icons_1.Github size={30} color="#ffffff"/>
                </a>
                <p className="mb-0 text-white">{data.github}</p>
            </div>

            

           
           
        </div>);
};
exports.PersonalInfoCard = PersonalInfoCard;
