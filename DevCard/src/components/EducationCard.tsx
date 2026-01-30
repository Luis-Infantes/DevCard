import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import type {  Education, EducationProps } from '../types/types';
import { useState } from 'react';







export const EducationCard: React.FC<EducationProps> = ({ educations }) => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    return (

        <>

            <Button className="Project-Style" onClick={toggle}>
                Formación oficial y otros estudios
            </Button>


            <Modal
                isOpen={open}
                toggle={toggle}
                size="lg"
                className="myModal"
                modalClassName="myModalDialog"
                contentClassName="myModalContent"
                wrapClassName="myModalBackdrop"
            >


                <ModalHeader  className="myModalHeader">Formación oficial y otros estudios</ModalHeader>

                <ModalBody className="myModalBody">

                    <ul className="list-unstyled mb-0">
                        {educations.map((e: Education) => (
                            <li key={e.id} className=" d-flex flex-column align-items-center mb-4 text-center">

                                <img
                                    src={`/image/${e.center}`}

                                    className="skill-icon"
                                    width={130}
                                    height={130}
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback si la imagen no existe
                                        (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                                    }}
                                />


                                <strong className="h5">{e.title}</strong>
                                <br/>
                                <p>{e.description}</p>
                                <p className="text-info mb-2 fw-bold">{e.startdate}</p>

                                <a href={e.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light">
                                    Credenciales
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
        </>

    )
}