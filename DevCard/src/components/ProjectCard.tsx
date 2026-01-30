import { useState } from "react";
import type { Project, ProjectProps } from "../types/types";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


export const ProjectCard: React.FC<ProjectProps> = ({ projects }) => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    return (

        <div className="container">

            <Button className="Project-Style" onClick={toggle}>
                Prácticas y proyectos personales
            </Button>


            <Modal
                isOpen={open}
                toggle={toggle}
                size="lg"
                className="myModal"
                modalClassName="myModal"
                contentClassName="myModalContent"
                wrapClassName="myModalBackdrop"
            >


                <ModalHeader  className="myModalHeader">
                     <h4>Prácticas y proyectos personales</h4>
                </ModalHeader>

                <ModalBody className="myModalBody">

                    <ul className="list-unstyled mb-0">
                        {projects.map((p: Project) => (

                            <li key={p.id} className="d-flex flex-column align-items-center mb-4 text-center">

                                <img
                                    src={`/image/${p.image}`}
                                   
                                    className="skill-icon"
                                    width={330}
                                    height={220}
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback si la imagen no existe
                                        (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                                    }}
                                />

                                {/* <strong className="fs-5">{p.title}</strong>*/}
                               <br/>
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
                            </li>
                        ))}
                    </ul>

                </ModalBody>

                <ModalFooter className="myModalFooter d-flex justify-content-center">
                    <Button color="secondary" onClick={toggle}>
                        Cerrar
                    </Button>
                </ModalFooter>

            </Modal>
        </div>
    
    )
}