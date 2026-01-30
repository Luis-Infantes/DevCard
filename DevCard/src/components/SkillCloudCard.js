"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCloudCard = void 0;
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const SkillCloudCard = ({ skillsCloud }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const toggle = () => setOpen(prev => !prev);
    //Creamos un switch para dar un estilo de color dependiendo del nivel
    const levelColor = (level) => {
        switch (level) {
            case "Advanced":
                return "success";
            case "Intermediate":
                return "warning text-black";
            case "Basic":
            default:
                return "secondary";
        }
    };
    return (<>

            <reactstrap_1.Button className="Button-Style" onClick={toggle}>
                #CLOUD#
            </reactstrap_1.Button>

            <reactstrap_1.Modal isOpen={open} toggle={toggle} className="myModal" modalClassName="myModalDialog" contentClassName="myModalContent" wrapClassName="myModalBackdrop">

                <reactstrap_1.ModalHeader className="myModalHeader">Cloud Skills</reactstrap_1.ModalHeader>

                <reactstrap_1.ModalBody className="myModalBody">

                    <ul className="list-unstyled mb-0">
                        {skillsCloud.map((skill) => (<li key={skill.id} className="d-flex align-items-center gap-2 mb-2">

                                <img src={`/image/${skill.image}`} alt={`Logo de ${skill.name}`} className="skill-icon" width={24} height={24} loading="lazy" onError={(e) => {
                // Fallback si la imagen no existe
                e.currentTarget.src = "/images/_fallback.png";
            }}/>
                                <strong>{skill.name}</strong>
                                <reactstrap_1.Badge color={levelColor(skill.level)} pill>
                                    {skill.level}
                                </reactstrap_1.Badge>
                            </li>))}
                    </ul>

                </reactstrap_1.ModalBody>

                <reactstrap_1.ModalFooter className="myModalFooter">
                    <reactstrap_1.Button color="secondary" onClick={toggle}>
                        Cerrar
                    </reactstrap_1.Button>
                </reactstrap_1.ModalFooter>

            </reactstrap_1.Modal>
        </>);
};
exports.SkillCloudCard = SkillCloudCard;
