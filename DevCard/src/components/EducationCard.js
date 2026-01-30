"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationCard = void 0;
const reactstrap_1 = require("reactstrap");
const react_1 = require("react");
const EducationCard = ({ educations }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const toggle = () => setOpen(prev => !prev);
    return (<>

            <reactstrap_1.Button className="Project-Style" onClick={toggle}>
                Formación oficial y otros estudios
            </reactstrap_1.Button>


            <reactstrap_1.Modal isOpen={open} toggle={toggle} size="lg" className="myModal" modalClassName="myModalDialog" contentClassName="myModalContent" wrapClassName="myModalBackdrop">


                <reactstrap_1.ModalHeader className="myModalHeader">Formación oficial y otros estudios</reactstrap_1.ModalHeader>

                <reactstrap_1.ModalBody className="myModalBody">

                    <ul className="list-unstyled mb-0">
                        {educations.map((e) => (<li key={e.id} className=" d-flex flex-column align-items-center mb-4 text-center">

                                <img src={`/image/${e.center}`} className="skill-icon" width={130} height={130} loading="lazy" onError={(e) => {
                // Fallback si la imagen no existe
                e.currentTarget.src = "/images/_fallback.png";
            }}/>


                                <strong className="h5">{e.title}</strong>
                                <br />
                                <p>{e.description}</p>
                                <p className="text-info mb-2 fw-bold">{e.startdate}</p>

                                <a href={e.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light">
                                    Credenciales
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
        </>);
};
exports.EducationCard = EducationCard;
