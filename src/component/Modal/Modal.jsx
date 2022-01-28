import React from "react";
import Button from "../../Buttons/Button";
import Skill from "../Historicos/Habilidades/Skill";
import "./Modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="container-modal" onClick={onClose}>
      <div className="modal">
        <div className="modal-details">
          <div>
            <Skill />
          </div>
          <div className="button-detail">
            <Button onClick={onClose}>Fechar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
