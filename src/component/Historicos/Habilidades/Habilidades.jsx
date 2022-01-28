import React, { useState } from "react";

import "./Habilidades.css";

import SubTitle from "../../../Style/SubTitle/SubTitle";
import Skill from "./Skill";
import Title from "../../../Style/Title/Title";
import Modal from "../../Modal/Modal";

function Cursos() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="main-cursos">
      {modalVisible && <Modal onClose={() => setModalVisible(false)} />}

      <Title title="Cursos e Skills" />
      <div className="cursos">
        <div>
          <Title title="New Horizont" />
          <SubTitle title="2001-2002" />
          <SubTitle title="- Pacote Office" />
          <SubTitle title="- Flash 5.0" />
          <SubTitle title="- HTML - Intermediário" />
        </div>
        <div>
          <Title title="StackX" />
          <SubTitle title="2021" />
          <SubTitle title="- Python Basico" />
          <SubTitle title="- Soft Skills" />
        </div>
        <div>
          <Title title="Digital Innovation One" />
          <SubTitle title="2021" />
          <SubTitle title="- Introdução ao Git e Github" />
          <SubTitle title="- Introdução a criação de websites com HTML e CSS3" />
          <SubTitle title="- Programação para internet com JAVAScript" />
        </div>
      </div>

      <div className="modal2">
        <button onClick={() => setModalVisible(true)}>Skills</button>
      </div>

      {/* <div className="modal">
        {modalVisible && (
          <Modal text={"Campo Vazio"} onClose={() => setModalVisible(false)} />
        )}
      </div> */}
      {/* <span>
        <button onClick={() => modal(<Skill />)}>Skills</button>
      </span> */}
      {/* <Button que leva pra Skill - ("Skill") /> */}
      {/* <button>XXXX</button>
      <Skill>.</Skill> */}
    </div>
  );
}

export default Cursos;
