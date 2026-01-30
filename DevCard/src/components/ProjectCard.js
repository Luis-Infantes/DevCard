"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCard = void 0;
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const ProjectCard = ({ projects }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const toggle = () => setOpen(prev => !prev);
    return (<div className="container">

            <reactstrap_1.Button className="Project-Style" onClick={toggle}>
                Prácticas y proyectos personales
            </reactstrap_1.Button>


            <reactstrap_1.Modal isOpen={open} toggle={toggle} size="lg" className="myModal" modalClassName="myModal" contentClassName="myModalContent" wrapClassName="myModalBackdrop">


                <reactstrap_1.ModalHeader className="myModalHeader">
                     <h4>Prácticas y proyectos personales</h4>
                </reactstrap_1.ModalHeader>

                <reactstrap_1.ModalBody className="myModalBody">

                    <ul className="list-unstyled mb-0">
                        {projects.map((p) => (<li key={p.id} className="d-flex flex-column align-items-center mb-4 text-center">

                                <img src={`/image/${p.image}`} className="skill-icon" width={330} height={220} loading="lazy" onError={(e) => {
                // Fallback si la imagen no existe
                e.currentTarget.src = "/images/_fallback.png";
            }}/>

                                {/* <strong className="fs-5">{p.title}</strong>*/}
                               <br />
                                <p className="mb-1">{p.description}</p>
                             
                                {/* Si tech es un array, conviene unirlo con comas */}
                                <h6 className="text-light mb-2 fw-bold">[Tecnologías]</h6>
                                <h6 className="text-info mb-2 fw-bold">
                                    {Array.isArray(p.tech) ? p.tech.join(" / ") : p.tech}
                                </h6>

                                <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light">
                                    Acceso repositorio
                                </a>
                                <p>_____________________________</p>
                            </li>))}
                    </ul>

                </reactstrap_1.ModalBody>

                <reactstrap_1.ModalFooter className="myModalFooter d-flex justify-content-center">
                    <reactstrap_1.Button color="secondary" onClick={toggle}>
                        Cerrar
                    </reactstrap_1.Button>
                </reactstrap_1.ModalFooter>

            </reactstrap_1.Modal>
        </div>);
};
exports.ProjectCard = ProjectCard;
